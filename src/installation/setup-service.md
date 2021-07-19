# Service Setup

Required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)

### Setting up the OctoFarm service
 - Generate a pm2 startup script
   ```bash 
      pm2 startup
   ```

 
Example Output (for linux): \
`sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi`
 - Save the running services
   ```bash 
      pm2 save
   ```

