#!/bin/bash

# Exit on error
set -e

# Update system packages
echo "Updating system packages..."
sudo apt update -y && sudo apt upgrade -y

# Install necessary tools
echo "Installing required packages..."
sudo apt install -y nginx git curl unzip

# Install Node.js and npm
echo "Installing Node.js and npm..."
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installations
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Configure Nginx for ReactJS
echo "Configuring Nginx..."
sudo bash -c 'cat > /etc/nginx/sites-available/default <<EOF
server {
    listen 80;
    server_name _;

    location / {
        root /var/www/html;
        index index.html;
        try_files \$uri /index.html;
    }
}
EOF'

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Set up deployment directory
echo "Setting up deployment directory..."
sudo mkdir -p /var/www/html
sudo chown -R \$USER:\$USER /var/www/html

# Print success message
echo "Setup completed successfully. You can now deploy your ReactJS app by copying the build files to /var/www/html."