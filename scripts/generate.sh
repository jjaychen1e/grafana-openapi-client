#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Check if version argument is provided and valid
if [ -z "$1" ]; then
  echo "Error: Version argument is required"
  echo "Usage: generate.sh <version>"
  echo "Example: generate.sh 11.0.0"
  exit 1
fi

# Check if version follows semantic versioning format (x.y.z)
if ! [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Error: Version must be in format x.y.z (e.g. 11.0.0)"
  exit 1
fi

# Check for uncommitted changes
# if [[ -n $(git status -s) ]]; then
#   echo "Error: There are uncommitted changes in the repository"
#   echo "Please commit or stash your changes before running the release script"
#   exit 1
# fi

# Set version from argument
GRAFANA_VERSION="$1"

# Download and process API spec
GITHUB_URL="https://raw.githubusercontent.com/grafana/grafana/refs/heads/release-${GRAFANA_VERSION}/public/api-merged.json"
echo "Downloading API spec from: ${GITHUB_URL}"

API_SPEC=$(curl -sf "$GITHUB_URL") || {
  echo "Failed to download API spec from ${GITHUB_URL}"
  exit 1
}

PROCESSED_SPEC=$(echo "$API_SPEC" | jq 'del(.definitions.SecretURL.title, .definitions.ObjectMatchers.description)') || {
  echo "Failed to process API spec"
  exit 1
}

# Install dependencies
yarn install

# Define generators and their properties
# Format: "name:properties"
GENERATORS=(
  # Add `prefixParameterInterfaces=true` to avoid duplicate type names
  "typescript-fetch:--additional-properties=prefixParameterInterfaces=true"
  "typescript-axios:--additional-properties=useSingleRequestParameter=true"
)

# Remove the existing generated files and generate new API clients
for config in "${GENERATORS[@]}"; do
  # Split the config string into name and properties
  generator_name="${config%%:*}"
  generator_properties="${config#*:}"

  rm -rf "$ROOT_DIR/packages/$generator_name"

  # Create a temporary file for the processed spec
  TEMP_SPEC=$(mktemp)
  echo "$PROCESSED_SPEC" >"$TEMP_SPEC"

  openapi-generator-cli generate \
    -i "$TEMP_SPEC" \
    -g "$generator_name" \
    -o "$ROOT_DIR/packages/$generator_name" \
    $generator_properties || {
    rm "$TEMP_SPEC" # Clean up temp file on error
    echo "Failed to generate client: ${generator_name}"
    exit 1
  }

  # Clean up the temporary file
  rm "$TEMP_SPEC"

  # Fix ESM import path
  npx fix-esm-import-path "$ROOT_DIR/packages/$generator_name"

  # Copy and update the corresponding package.json template
  template_path="$SCRIPT_DIR/templates/$generator_name.package.json"
  target_path="$ROOT_DIR/packages/$generator_name/package.json"

  # Copy template and update version
  cp "$template_path" "$target_path" || {
    echo "Failed to copy package.json template for ${generator_name}"
    exit 1
  }

  # Copy shared tsconfig.json
  cp "$SCRIPT_DIR/templates/tsconfig.json" "$ROOT_DIR/packages/$generator_name/tsconfig.json" || {
    echo "Failed to copy tsconfig.json for ${generator_name}"
    exit 1
  }

  # Copy shared tsup config
  cp "$SCRIPT_DIR/templates/tsup.config.ts" "$ROOT_DIR/packages/$generator_name/tsup.config.ts" || {
    echo "Failed to copy tsup.config.ts for ${generator_name}"
    exit 1
  }

  # Copy README template
  cp "$SCRIPT_DIR/templates/$generator_name.README.md" "$ROOT_DIR/packages/$generator_name/README.md" || {
    echo "Failed to copy README.md for ${generator_name}"
    exit 1
  }
done
