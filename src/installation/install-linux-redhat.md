# Linux (OpenSUSE)

This was verified working on Fedora 34, Alma Linux and Rocky Linux as of 1/Sep/2021. Should be fine with other Red Hat variants as well but not independantly verified.

## 1 Update your repositories and packages fully:

```bash
sudo dnf update
```

## 2 Install necessary dependencies:

```bash    
sudo dnf install nodejs gcc make git
```

## 3 Verify correct Nodejs version (needs to be 14+)

```bash
node --version
```

## 4 Create the repository for MongoDB. 

Of the Red Hat variants; currently only Red Hat Enterprise Linux, Alma Linux and Rocky Linux support MongoDB 5.0. Fedora is sadly dependency broken at this time with regards to MongoDB 5.0 and may or may not be resolved moving forward. 

### 4.1 RHEL, Alma, Rocky:
```bash
sudo vim /etc/yum.repos.d/mongodb-org-5.0.repo
```

Add the following content:

```bash
[mongodb-upstream]
name=MongoDB Upstream Repository
baseurl=https://repo.mongodb.org/yum/redhat/8Server/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
```

### 4.2 Fedora only

sudo vim /etc/yum.repos.d/mongodb-org-4.4.repo
```

Add the following content:

```bash
[mongodb-upstream]
name=MongoDB Upstream Repository
baseurl=https://repo.mongodb.org/yum/redhat/8Server/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
 
## 5 Install, start and make MongoDB persist reboots:

```bash
sudo dnf install mongodb-org
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

```
[mnavarro@Fedora OctoFarm]$ pm2 list
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ OctoFarm           │ fork     │ 0    │ online    │ 0%       │ 92.5mb   │
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
