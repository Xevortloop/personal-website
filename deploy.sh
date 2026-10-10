#!/bin/bash

# VPS Deployment Script for xev.my.id
# Run this script on your VPS server

set -e

echo "🚀 Deploying Xev Portfolio Website..."

# Configuration
PROJECT_DIR="/root/xev-website/personal-website"
NGINX_CONFIG="/etc/nginx/sites-available/xev.my.id"
NGINX_ENABLED="/etc/nginx/sites-enabled/xev.my.id"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Navigate to project directory
echo -e "${YELLOW}📁 Navigating to project directory...${NC}"
cd $PROJECT_DIR

# Step 2: Pull latest changes from Git
echo -e "${YELLOW}📥 Pulling latest changes from Git...${NC}"
git pull origin main

# Step 3: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci

# Step 4: Build the project
echo -e "${YELLOW}🔨 Building project...${NC}"
npm run build

# Step 5: Copy Nginx configuration
echo -e "${YELLOW}⚙️  Configuring Nginx...${NC}"
if [ -f "nginx.conf" ]; then
    sudo cp nginx.conf $NGINX_CONFIG
    sudo ln -sf $NGINX_CONFIG $NGINX_ENABLED
    echo -e "${GREEN}✓ Nginx configuration updated${NC}"
else
    echo -e "${YELLOW}⚠️  nginx.conf not found, skipping Nginx config update${NC}"
fi

# Step 6: Test Nginx configuration
echo -e "${YELLOW}🧪 Testing Nginx configuration...${NC}"
sudo nginx -t

# Step 7: Reload Nginx
echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
sudo systemctl reload nginx

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Website is live at: http://xev.my.id${NC}"
