# Gotify alerts with OctoFarm's scripts feature.

Setup OctoFarm to use [Gofity](https://github.com/gotify) with alerts (linux)

## Prerequisites
- Gotify installed and working and knowledge how to setup a new key.
- Some linux knowledge

## Creating your script.
NOTE: Bash is used here on the linux platform.

Open your favorite file editor and past in the below making sure to replace the url for your host e.g. "https://gotify.octofarm.net" and the {token} to what you setup in gotify.

```sh
#!/bin/bash          
curl "{url}/message?token={token}" -F "title=OctoFarm Alert" -F "message=$1" -F "priority=5"
```

make sure your script is set as executable and the user running nodejs can access the script. Also take note of the full path for your script.

## Setup OctoFarm.
Go into OctoFarm alerts so System -> Alerts and create a new alert.

Trigger: Pick the trigger you would like.

Script Location: `/home/octofarm/printerAlert.sh` - Where ever you saved the script.

Message: What ever message you would like. Make sure to check the Variable List and see what information is available to pass through.

Example:
`
[CurrentTime] : [PrinterName]: was paused. It has [PercentRemaining] left to print of [CurrentFile]. The tool temp is Tool0: [Tool0Temp] Bed: [BedTemp] and at a Z of: [CurrentZ]. There is [EstimatedTime] left on the print and should finish around [ETA].`

Click save and your done, it will listen for that event and fire your script.

## Example
![](../images/scripts/gotify-example.png)
