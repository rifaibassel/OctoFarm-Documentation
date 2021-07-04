# Follow the steps below to enable OctoFarms Service
## Setup the OctoFarm service, required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)
 - Generate a pm2 startup script.
 - pm2 startup

## Example: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
 - Save the running services 
 - pm2 save
