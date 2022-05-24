# Windows (10/11)

::: warning
I actively develop on Windows 10 so that will always be tested. Windows 11 should be fine but I do not personally test these version! 8.1 might even work.

Windows 7 was EOL a while ago, and NodeJS dropped support for it, so it's impossible for me to support that too.
:::

## 1 Prepare your system
First we need to prep the system for the required applications used to run OctoFarm.

### 1.1 Download and Install the pre-requisites
- Download and Install the latest version of git

[Git Downloads](https://git-scm.com/download/win)

- Download and Install Version V4.x of MongoDB (V5.X is not supported at this time)

[MongoDB Community Downloads](https://www.mongodb.com/try/download/community)

- Download and install the latest V14 LTS NodeJS

[NodeJS Downloads](https://nodejs.org/download/release/v14.19.0/)

## 2. Install OctoFarm's requirements
If you've successfully run through all of the system prep for the repositories then we can continue to install the applications from them.

### 2.1 Install pm2 (Service Manager)
- Due to some update dependencies in V1.2+ we need to update our local npm version to the latest.
```
sudo npm install npm@latest -g
```

### 2.2 Install pm2 (Service Manager)
- OctoFarm uses a process manager called 'pm2'. Install it globally with the below command. OctoFarm's internal processes require this manager to action some internal commands like "Restart" and "Update".

- Open up "CMD" or "PowerShell" and run the following command.
```
npm install pm2 -g
```

![](../images/windows-install/pm2-install.png)
## 3. Download and Install OctoFarm
After all that we can finally download OctoFarm from the latest release and start the service running.
::: tip
OctoFarm doesn't care about the location you install it. For brevity below I will use `C:/`
:::
### 3.1 Open up CMD in the location you'd like to install OctoFarm too.

- Open up "Windows Explorer"
- Go to your "C:/" drive
- In Exporers address bar type in `cmd` and press enter.

![](../images/windows-install/open-c.png)

### 3.2 Git clone the repository 
```bash
git clone --depth 1 https://github.com/OctoFarm/OctoFarm.git
```
![](../images/windows-install/clone-of.png)

### 3.3 Change into the new OctoFarm directory and start the service
- OctoFarm will have downloaded to your current directory, we now need to enter that folder and start it's service.
```bash
cd OctoFarm/
```

- Once inside the directory we can run the start command for OctoFarm
```bash
npm start
```
![](../images/windows-install/start-octofarm.png)

## 4 Profit!
- You can double check the OctoFarm service is running by using `pm2 list` from anywhere on your console. You should see:
```
┌─────┬─────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name        │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ OctoFarm    │ default     │ 1.1.13… │ fork    │ 6212     │ 88s    │ 0    │ online    │ 0%       │ 112.4mb  │ James    │ disabled │
└─────┴─────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

- OctoFarm runs on port 4000 by default. So you'll be able to access it in a web browser from:\
  `http://{your systems ip address}:4000`

## Additional
OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation: 
[Service Setup](/installation/setup-service.md)
