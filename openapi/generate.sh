#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Set default version if not provided in environment
GRAFANA_VERSION="${GRAFANA_VERSION:-11.0.0}"

# Download api-merged.json from GitHub
GITHUB_URL="https://raw.githubusercontent.com/grafana/grafana/refs/heads/release-${GRAFANA_VERSION}/public/api-merged.json"
echo "Downloading API spec from: ${GITHUB_URL}"
curl -f -o "$SCRIPT_DIR/api-merged.json" "$GITHUB_URL" || {
  echo "Failed to download API spec from ${GITHUB_URL}"
  exit 1
}

# Process the downloaded JSON file
jq 'del(.definitions.SecretURL.title)' "$SCRIPT_DIR/api-merged.json" >"$SCRIPT_DIR/api-merged-processed.json"

# Define generators and their properties
# Format: "name:properties"
GENERATORS=(
  # Add `prefixParameterInterfaces=true` to avoid duplicate type names
  "typescript-fetch:--additional-properties=prefixParameterInterfaces=true"
  "typescript-axios:"
)

# Remove the existing generated files and generate new API clients
for config in "${GENERATORS[@]}"; do
  # Split the config string into name and properties
  generator_name="${config%%:*}"
  generator_properties="${config#*:}"

  rm -rf "$SCRIPT_DIR/../packages/$generator_name"

  openapi-generator-cli generate \
    -i "$SCRIPT_DIR/api-merged-processed.json" \
    -g "$generator_name" \
    -o "$SCRIPT_DIR/../packages/$generator_name" \
    $generator_properties

  # Copy and update the corresponding package.json template
  template_path="$SCRIPT_DIR/templates/$generator_name.package.json"
  target_path="$SCRIPT_DIR/../packages/$generator_name/package.json"

  # Copy template and update version using jq
  jq --arg version "$GRAFANA_VERSION" '.version = $version' "$template_path" >"$target_path"

  # Copy shared tsconfig.json
  cp "$SCRIPT_DIR/templates/tsconfig.json" "$SCRIPT_DIR/../packages/$generator_name/tsconfig.json"

  # Copy shared tsup config
  cp "$SCRIPT_DIR/templates/tsup.config.ts" "$SCRIPT_DIR/../packages/$generator_name/tsup.config.ts"
done

# Clean up downloaded and processed files
rm "$SCRIPT_DIR/api-merged.json" "$SCRIPT_DIR/api-merged-processed.json"
