# OctoFarm CLI Commands
You can use various commands to control OctoFarm from your systems command line (cli). Below are a list of accepted commands and what they do. These commands we're created for convenience and currently require the installation and setup of pm2. You can find more information in the Instructions below.
Command Lists (All must be run from the OctoFarm installation directory)
::: tip
After installation you need to setup OctoFarms service manager to utilise the below commands. [Service Manager Setup](./installation/../../installation/setup-service.md)
:::

## Start OctoFarm
This command is used to start the OctoFarm service.
```sh
npm run start
```

## Restart OctoFarm
This command is used to restart the OctoFarm service.
```sh
npm run restart
```

## Stop OctoFarm
This command is used to stop the OctoFarm service.
```sh
npm run stop
```

## Delete OctoFarm
This command is used to stop and delete the OctoFarm service.
```sh
npm run stop:delete 
```
