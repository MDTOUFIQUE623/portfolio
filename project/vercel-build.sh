#!/bin/bash
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
npm install

# Run the build
npm run build
