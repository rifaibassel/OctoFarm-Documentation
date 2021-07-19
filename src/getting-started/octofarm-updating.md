# Updating OctoFarm
Since v1.1.13 there are now two methods to successfully updating your OctoFarms instance. One is from the command line interface, and the other is a new feature within OctoFarms web interface.

## CLI Update (Pre v1.1.13)
Make sure your currently in the OctoFarm installation directory before running any of the following commands. No support will be giving in rectifying this issue.

 - Stop and delete the OctoFarm service
```sh
npm run stop:delete
```

 - Git pull the latest repository.
```sh
git pull
```

::: warning
If you have issues with git complaining about local file changes then use this command below.
```sh
git reset --hard
```
:::


Run the start-up script for OctoFarm.
```sh
npm run start
```


## Web Interface Update (Post v1.1.13)
For Docker please see below.
Since 1.1.13 we brought in a few buttons to make this easier for the user. This can now be done from the web interface.

 - Navigate to the "System" page within OctoFarms web interface.

 - Scroll down and click on the "Server" Button on the side bar.

 - If the "Update OctoFarm" button is greyed out, then click "Check for Updates

 - If there's an update available you will get a success message and the "Update OctoFarm" button will become available

 - Click "Update OctoFarm" and profit!

::: warning
There may be some additional dialogs you will have to either confirm or cancel after the update check has run. These are checks in place to make sure OctoFarm doesn't do anything you don't want with your system. Firstly it will check if any local changes are detected. If there are it will ask if you'd like to overwrite those and procede. This will mostly be a package.json unless you've been tinkering. Secondly OctoFarm will make sure there are no missing packages, to continue the update you will have to OK this warning if it appears.
:::


## Updating Docker
Currently the auto update feature is disabled in docker. We are looking to improve this going forward but for now you can follow the steps below to update your container

Inside the folder where your docker-compose.yml file resides, run the following command.
### Grab the latest version
```sh
docker-compose pull
```

### Restart the current container
```sh
docker-compose up -d 
```

## Updating On UnRaid
UnRaid's docker management system will periodically check for updates to the image. You should see a "Apply Update", in your version column next to the OctoFarm container, notice on the docker management screen when it's found one. If you don't see the notice you can use the "Check for updates" button at the bottom of the screen and it will search for all the latest versions of your container.
