#!/bin/bash
# deploy.sh - Deploy Next.js Commerce from GitHub
# Usage: ./deploy.sh <github-repo-url> [branch]
# Example: ./deploy.sh https://github.com/user/dressshop.git main

set -e

REPO_URL=${1:-}
BRANCH=${2:-main}
CONTAINER_NAME=${3:-nextjs-commerce}
PORT=${PORT:-3000}

if [ -z "$REPO_URL" ]; then
    echo "Usage: $0 <github-repo-url> [branch] [container-name] [port]"
    echo "Example: $0 https://github.com/user/dressshop.git main"
    exit 1
fi

echo "=== Deploying Next.js Commerce ==="
echo "Repo: $REPO_URL"
echo "Branch: $BRANCH"
echo "Container: $CONTAINER_NAME"
echo ""

# Clone repo
APP_DIR="/tmp/deploy-$(date +%s)"
echo "Cloning repository to $APP_DIR..."
git clone --depth=1 -b "$BRANCH" "$REPO_URL" "$APP_DIR"

cd "$APP_DIR"

# Copy environment file if exists in current directory
if [ -f ".env" ]; then
    cp .env "$APP_DIR/.env"
    echo "Using existing .env file"
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install --frozen-lockfile

# Build
echo "Building application..."
NEXT_TELEMETRY_DISABLED=1 pnpm build

# Stop existing container if running
echo "Stopping existing container..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

# Build Docker image
echo "Building Docker image..."
docker build -t "$CONTAINER_NAME:latest" "$APP_DIR"

# Run container
echo "Starting container on port $PORT..."
docker run -d \
    --name "$CONTAINER_NAME" \
    -p "$PORT:3000" \
    --restart unless-stopped \
    "$CONTAINER_NAME:latest"

# Cleanup
echo "Cleaning up..."
rm -rf "$APP_DIR"

# Show status
echo ""
echo "=== Deployment Complete ==="
docker ps | grep "$CONTAINER_NAME" || echo "Container not running"
echo ""
echo "Check logs: docker logs $CONTAINER_NAME"
