# Linux (OpenSUSE)

This was verified working on Leap 15 and should be fine with Tumbleweed as well but has not been independatly verified.

## 1 Update your repositories and packages fully:

```bash
sudo zypper dup
```

## 2 Install necessary dependencies:

```bash    
sudo zypper install nodejs gcc make git ca-certificates{,-cacert,-mozilla}
```

## 3 Verify correct Nodejs version (needs to be 14+)

```bash
node --version`
```

## 4 Import the necessary pgp key and add the MongoDB community repository

```bash
sudo rpm --import https://www.mongodb.org/static/pgp/server-5.0.asc
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/5.0/x86_64/" mongodb
```
 
## 5 Install, start and make MongoDB persist reboots:

```bash
sudo zypper install mongodb-org
sudo systemctl enable mongod --now
sudo systemctl status mongod
```
    
## 6 Install pm2:

```bash
sudo npm install pm2 -g
```

## 7 Obtain and start OctoFarm

```bash
git clone --depth 1 https://github.com/OctoFarm/OctoFarm.git
cd OctoFarm/
npm start
pm2 list
```

- You should see something similar to:

```mnavarro@PaintedGreen:~> pm2 list
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ OctoFarm           │ fork     │ 0    │ online    │ 0%       │ 239.6mb  │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

## 8 Allow traffic on port 4000 during the current boot:

- By default OctoFarm runs on port 4000, adjust as required:

```bash
sudo firewall-cmd --add-port=4000/tcp
sudo firewall-cmd --add-port=4000/udp
```

## 9 And finally with one additional flag to make it persist reboots

```bash
    sudo firewall-cmd --add-port=4000/udp --permanent
    sudo firewall-cmd --add-port=4000/tcp --permanent
```

That's it. Navigate to <printer_ip>:4000 (example: "192.168.100.10:4000") in your browser and have a day!

## Additional
OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation:
[Service Setup](/installation/setup-service.md)
