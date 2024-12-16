#!/bin/bash

# Check if version argument is provided and valid
if [ -z "$1" ]; then
  echo "Error: Version argument is required"
  echo "Usage: release.sh <version>"
  echo "Example: release.sh 11.0.0"
  exit 1
fi

# Check if version follows semantic versioning format (x.y.z)
if ! [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Error: Version must be in format x.y.z (e.g. 11.0.0)"
  exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
  echo "Error: There are uncommitted changes in the repository"
  echo "Please commit or stash your changes before running the release script"
  exit 1
fi

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Set version from argument
GRAFANA_VERSION="$1"
PACKAGE_VERSION="${2:-${GRAFANA_VERSION}}"

echo "Starting release process for Grafana version ${GRAFANA_VERSION}"

# Step 1: Generate API clients
echo "Generating API clients..."
yarn generate ${GRAFANA_VERSION} || {
  echo "Failed to generate API clients"
  exit 1
}

# Step 2: Install dependencies
echo "Installing dependencies..."
yarn install || {
  echo "Failed to install dependencies"
  exit 1
}

# Step 3: Build packages
echo "Building packages..."
yarn build || {
  echo "Failed to build packages"
  exit 1
}

# Step 4: Git add and commit the changes
echo "Committing changes..."
git add .
git commit -m "chore: update generated clients for version ${GRAFANA_VERSION}" || {
  echo "Failed to commit changes"
  exit 1
}

# Step 5: Publish packages with explicit version
echo "Publishing packages..."
echo "Using version: ${PACKAGE_VERSION}"
npx lerna publish ${PACKAGE_VERSION} || {
  echo "Failed to publish packages"
  exit 1
}

echo "Release process completed successfully!"
