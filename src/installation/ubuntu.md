# Installing OctoFarm on Linux (Ubuntu)

## 1 Prepare your system
First we need to prep the system for the required applications used to run OctoFarm.

### 1.1 Setup MongoDB's repository
- Add MongoDB's Repository Key\
`wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add`
- Add the MongoDB Repository (Choose by your current ubuntu version)
    - 20.04:\
`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`\
    - 18.08:\
`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`\
    - 16.04:\
`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`

### 1.2 Setup NodeJS LTS v14 repository
- Run the node repository setup\
`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`

### 1.3 Update apt with the new repository's
- Run the apt upgrade command\
`sudo apt-get update`

## 2. Install OctoFarm's requirements
If you've successfully run through all of the system prep for the repositories then we can continue to install the applications from them.

### 2.1 Install Git 
- Install the git application\
`sudo apt install git`

### 2.2 Install MongoDB and check the service is running
- Install the mongodb application\
`sudo apt install mongodb-org`
- Enable the mongodb service\
`sudo systemctl enable mongod`
- Start the mongodb service\
`sudo systemctl start mongod`
- Check the service has actually started\
`sudo systemctl status mongod`\
You should see the system report back as 'active'

### 2.3 Install NodeJS and check the version is correct.
- Install the nodejs application\
`sudo apt -y nodejs gcc g++ make`
- Double check we have the correct version (must be v14+)\
`node --version`\
Example output: `v14.16.1`

### 2.4 Install pm2 (Service Manager)
- OctoFarm uses a process manager called 'pm2'. Install it globally with the below command. OctoFarm's internal processes require this manager to action some internal commands like "Restart" and "Update".\
`sudo npm install pm2 -g`

## 3. Download and Install OctoFarm
After all that we can finally download OctoFarm from the latest release and start the service running. 

### 3.1 Download OctoFarm
- We use git here to grab the latest master version of the application.\
`git clone --depth 1 https://github.com/OctoFarm/OctoFarm.git`

### 3.2 Change into the new OctoFarm directory and start the service
- OctoFarm will have downloaded to your current directory, we now need to enter that folder and start it's service.\
`cd OctoFarm/`
- Once inside the directory we can run the start command for OctoFarm\
`npm start`

## 4 Profit! OctoFarm should now be running and available to access from your web browser
- You can double check the OctoFarm service is running by using `pm2 list` from anywhere on your console. If you see 'OctoFarm' and 'Running' on the output you should be good to access the web interface. 
- OctoFarm runs on port 4000 by default. So you'll be able to access it in a web browser from:\
`http://{your systems ip address}:4000`

## Additional
OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation: