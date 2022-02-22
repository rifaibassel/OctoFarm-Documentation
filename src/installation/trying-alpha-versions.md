# Trying out alpha versions

OctoFarm has now automated its development (alpha) versions, these are not to be confused with RC (Release Candidates), as they are generally the lead up to the release of an RC.

It's always helpful for anyone to try out a development version and below are some instructions how to go about it. 

::: warning
Here be many bugs!

Also expects you followed original install instructions!
:::

::: tip
Windows: The commands below are system agnostic, you'll need to get into your OctoFarm folder, where ever you installed it, to run the commands. Easiest way is to open the "File Explorer" and type `cmd` into the address bar. 
:::

## Setting up development version for pm2. 

### 1. Backup, or create a new database. 
Development versions often have database migrations preventing easily switching between the two versions on the same database. It's much safer and easier (better than aspirin) to create a backup of your current database, or just setup a new one. 

The easiest way to create a new database is open your `.env` file and append a random digit on the end of your `MONGO` with your favorite text editor!
e.g. MONGO=mongodb://127.0.0.1:27017/octofarm2

When you reboot OctoFarm it will setup a fresh database for you. Just remember to switch back / run multiple versions of OctoFarm along side each other. 

### 2. Checkout the development version. 
There are two methods of setting this up. The better method would be to copy the OctoFarm folder and run the two versions along side each other. The quickest is to just update in line. 

If you want, copy your OctoFarm folder to a new folder. e.g. OctoFarm-DEV. 

`cd / DIR` into the directory. 

Run the commands `git fetch origin development && git checkout development && git pull`

This will fetch the latest data from the github repository for you. 

If you copied your OctoFarm directory, then you will need to change the `OCTOFARM_PORT=4000` to a new number, recommended `OCTOFARM_PORT=4001`

### 3. Make sure OctoFarms packages are up to date.
As long as your still in the OctoFarm directory then you can run the following commands to setup the new version. 

`npm run setup-alpha`

This will run a slightly modified startup script for you, installing OctoFarms dependencies, then starting a pm2 process called "OctoFarm-Testing". 

You may control that process with the following commands: 
`pm2 restart OctoFarm-Testing`: Restart the service.

`pm2 stop OctoFarm-Testing`: Stop the service.

`pm2 delete OctoFarm-Testing`: Delete the service.

## Setting up development version for docker. 
Docker is a hell of a lot easier! 

There is already a development tag for docker builds and these are updated whenever any code hits the development branch. The following tags are available:
`octofarm/octofarm:dev`

`octofarm/octofarm:monolithic-dev` - This is currently broken! Please await the fix for mongodb install - Relevant Issue: [Monolithic Docker Broken (dev only)](https://github.com/OctoFarm/OctoFarm/issues/818)

`octofarm/octofarm:x.x.x-alpha.x` - Replace the 'x' with the relevant version number and alpha increment.

## Reporting and issue! 
I've found an issue, how should I report it? 

The easiest way is to just create an issue on github or pop along to the development channel on discord. 

On github, you can use the labels to filter items that have been reported for the development branch with the "branch: development" label. Check to see if your issue has already been reported. If it's already there, it would great if you added your log dump to that list. 

[Github Issues](https://github.com/OctoFarm/OctoFarm/issues)

Alternatively fire and email off to info@notexpectedyet.com but with a github issue you will be notified when the fix hits the development branch.

::: warning
Please go to System -> Logs and press the "House Keeping" button. This will clear out logs older than 5 days so I'm not inundated with stuff from older versions.

The press the "Generate Log Dump" button and upload the "octofarm_dump*.zip" to the issues. Issues without this will be asked to produce it anyway.

This is because there may be other bugs you and I are not aware of. This gives me a decent chance to spot these!
:::

::: danger
If you P.M. me and I don't answer, I haven't had coffee or steak and would rather you didn't...
:::
