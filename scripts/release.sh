#!/bin/bash

# Check if version argument is provided and valid
if [ -z "$1" ]; then
  echo "Error: Version argument is required"
  echo "Usage: release.sh <version>"
  echo "Example: release.sh 11.0.0"
  exit 1
fi

# Check GitHub CLI auth status
if ! gh auth status &>/dev/null; then
  echo "Error: GitHub CLI not authenticated"
  echo "Please run 'gh auth login' to authenticate with GitHub"
  exit 1
fi

# Set GITHUB_TOKEN from gh cli
export GH_TOKEN=$(gh auth token)

# Check if version follows semantic versioning format (x.y.z)
if ! [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Error: Version must be in format x.y.z (e.g. 11.0.0)"
  exit 1
fi

# Check if current branch is main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Error: Must be on 'main' branch to create a release"
  echo "Current branch: $CURRENT_BRANCH"
  exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
  echo "Error: There are uncommitted changes in the repository"
  echo "Please commit or stash your changes before running the release script"
  exit 1
fi

# Function to cleanup and exit
SHOULD_CLEANUP_BRANCH=false
cleanup() {
  local error_message=$1
  echo "Error: $error_message"
  echo "Cleaning up..."

  # Switch back to main and discard changes
  git reset --hard HEAD
  git clean -fd # Remove untracked files and directories
  git checkout main --force

  # Clean up the branch if needed
  if [ "$SHOULD_CLEANUP_BRANCH" = true ]; then
    echo "Removing release branch..."
    git branch -D "release/${PACKAGE_VERSION}"
    git push origin --delete "release/${PACKAGE_VERSION}" || echo "Warning: Failed to delete remote branch"
  fi

  exit 1
}

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Set version from argument
GRAFANA_VERSION="$1"
PACKAGE_VERSION="${2:-${GRAFANA_VERSION}}"

echo "Starting release process for Grafana version ${GRAFANA_VERSION}"

# Step 0: Create release branch
echo "Creating release branch..."
git checkout -b "release/${PACKAGE_VERSION}" || cleanup "Failed to create release branch"
SHOULD_CLEANUP_BRANCH=true

# Push the release branch to remote
echo "Pushing release branch to remote..."
git push -u origin "release/${PACKAGE_VERSION}" || cleanup "Failed to push release branch to remote"

# Step 1: Generate API clients
echo "Generating API clients..."
yarn generate ${GRAFANA_VERSION} || cleanup "Failed to generate API clients"

# Step 2: Install dependencies
echo "Installing dependencies..."
yarn install || cleanup "Failed to install dependencies"

# Step 3: Build packages
echo "Building packages..."
yarn build || cleanup "Failed to build packages"

# Step 4: Git add and commit the changes
echo "Committing changes..."
git add .
git commit -m "chore: generated clients for ${GRAFANA_VERSION}" || cleanup "Failed to commit changes"

# Step 5: Publish packages with explicit version
echo "Publishing packages..."
echo "Using version: ${PACKAGE_VERSION}"
npx lerna publish ${PACKAGE_VERSION} || cleanup "Failed to publish packages"

# Step 6: Switch back to main
echo "Switching back to main branch..."
git checkout main || cleanup "Failed to switch back to main branch"

echo "Release process completed successfully!"
