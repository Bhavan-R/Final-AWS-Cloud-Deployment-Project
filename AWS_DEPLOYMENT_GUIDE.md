# EC2 deployment guide (Ubuntu + Nginx)

## Before you start
1. Create an Ubuntu EC2 instance.
2. Create or select a key pair and keep the private key secure.
3. Security group inbound rules: HTTP (TCP 80) from `0.0.0.0/0`; SSH (TCP 22) only from **your IP address**. Do not leave SSH open to everyone.
4. Note the instance public IPv4 address.

## Connect
From a terminal with your downloaded key:
```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

## Install web server
```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

## Upload application files
From your local machine, in the folder containing the web files:
```bash
scp -i your-key.pem index.html style.css script.js ubuntu@YOUR_EC2_PUBLIC_IP:/tmp/
```
On EC2:
```bash
sudo mkdir -p /var/www/cloudtask
sudo cp /tmp/index.html /tmp/style.css /tmp/script.js /var/www/cloudtask/
sudo chown -R www-data:www-data /var/www/cloudtask
```

## Configure Nginx site
Create config:
```bash
sudo tee /etc/nginx/sites-available/cloudtask <<'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    root /var/www/cloudtask;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
EOF
```
Enable and reload:
```bash
sudo ln -sf /etc/nginx/sites-available/cloudtask /etc/nginx/sites-enabled/cloudtask
sudo nginx -t
sudo systemctl reload nginx
```
Visit `http://YOUR_EC2_PUBLIC_IP/`.

## Verify
- Homepage loads from the EC2 public IP.
- Add a task, refresh, and verify the browser retains the task.
- Test pending/completed filters and delete.
- Capture your own screenshots after deployment.

## Cost and cleanup
Check AWS Free Tier/credits eligibility, regional pricing, and billing before launching. EC2, storage, IPs, and data transfer can incur charges. When finished, stop or terminate resources you no longer need.
