# OctoFarm's Alpha and Beta versions

OctoFarm has now automated it's entire development release schedule. There are 3 main branches on git to look for specific releases of OctoFarm.

Canary (x.x.x.alpha.x) - This is OctoFarm's alpha branch, new features / fixes hit this branch first for testing. (Considered unstable).
Development (x.x.x.beta.x) - This is OctoFarm's beta branch. When Canary is considered stable by the developer those updates will hit this branch for further testing.
Master (x.x.x) - This is OctoFarm's stable branch. After the development work has been further tested those features will hit here for public use. 

Anyone is free to try out any of these branches for themselves and instructions below are how to switch to the desired release branch.

::: warning
If you are running the Development or Canary branches and want to switch back to master, you must wait for a full release. This is when all 3 of these branches will be aligned and is the safest way to do so. There maybe database migrations and those will cause instability on previous versions.
:::

::: tip
Windows: The commands below are system agnostic, you'll need to get into your OctoFarm folder, where ever you installed it, to run the commands. Easiest way is to open the "File Explorer" and type `cmd` into the address bar.
:::

## Setting up development version for pm2.
These commands MUST be run from your OctoFarm folder.

### 1. Switching to a different branch
```bash
git checkout {replace with desired branch}
```

example: 
`git checkout development` or `git checkout canary`

:::warning
OctoFarm initially clones to a depth of 0, which means you may not be able to fetch all the remote branches.
If you get a "pathspec" error when trying to check out then please run the following set of commands, followed by the checkout command.
:::

```bash
git remote set-branches origin '*'
git fetch -v
```

Finally pull the repositor.
```bash
git pull
```

### 2. Updating OctoFarms packages
Run the following command to update OctoFarms packages. Must be run or you may have client issues!
```bash
npm run install-server
```

### 3. Restarting the OctoFarm service
As long as you originally setup OctoFarm with pm2 then the following command will restart the service.
```bash
pm2 restart OctoFarm
```

## Setting up development/canary versions for docker.
Docker is a hell of a lot easier!

There is already a development tag for docker builds and these are updated whenever any code hits the development branch. The following tags are available:
`octofarm/octofarm:dev`

`octofarm/octofarm:monolithic-dev` - This is currently broken! Please await the fix for mongodb install - Relevant Issue: [Monolithic Docker Broken (dev only)](https://github.com/OctoFarm/OctoFarm/issues/818)

`octofarm/octofarm:x.x.x-alpha.x` - Replace the 'x' with the relevant version number and alpha increment.

## Reporting and issue!
I've found an issue, how should I report it?

The easiest way is to just create an issue on github or pop along to the development channel on discord.

On github, you can use the labels to filter items that have been reported for the development branch with the "branch: development" label. Check to see if your issue has already been reported. If it's already there, it would great if you added your log dump to that list.

Be sure to pass me the current version number you see in System. It's required for both client and server versions.

[Github Issues](https://github.com/OctoFarm/OctoFarm/issues)

::: warning
Please go to System -> Logs and press the "House Keeping" button. This will clear out logs older than 5 days so I'm not inundated with stuff from older versions.

The press the "Generate Log Dump" button and upload the "octofarm_dump*.zip" to the issues. Issues without this will be asked to produce it anyway.

This is because there may be other bugs you and I are not aware of. This gives me a decent chance to spot these!
:::

::: danger
If you P.M. me and I don't answer, I haven't had coffee or steak and would rather you didn't...
:::

