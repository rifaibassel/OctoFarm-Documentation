# Supported OctoPrint Plugins
There are a few OctoPrint plugins which are supported natively within OctoFarm.

## Requesting Plugin Support
OctoFarm is trying it's hardest not to actually support individual plugins. This method is time-consuming for OctoFarms development and also keeping the plugins supported as their development is largely out of our control. We would much rather replicate a plugin where possible within OctoFarm's system itself. That been said it's not always possibly to do that and sometimes a plugin is a much better place to grab the information from. You are advised to drop a discussion in on the main repository if you'd like to request support, but this is not a promise. 

## Additional note. 
Alot of OctoPrint plugins now send their data across OctoPrints websocket making it a much simpler task to support and more inline with how OctoFarm communicates with OctoPrint. If your a plugin developer then please do enable this method of communication for your plugin. If anyone else would like to request support for a plugin that supports this method of communication I'm all ears. Although I'm slowly running out of space for it I will try and find somewhere for the information to go! 

## [PrintTimeGenius](https://github.com/eyal0/OctoPrint-PrintTimeGenius)
Works as is, nothing is needed to make this work. OctoFarm will pick up the information when it does it's re-scan after uploading a file or on scanning the file list on printer add. This is also captured before the start of a print incase the file scan misses it for whatever reason. You will also be able to see an accuracy for the calculation displayed in the History view panels. 

## [SlicerThumbnails](https://github.com/jneilliii/OctoPrint-PrusaSlicerThumbnails)
Works as is, nothing is needed to make this work. OctoFarm will pick up the information when it scans your files. Uploaded files are now automatically updated with the thumbnail information after they are created on OctoPrints side. 

## [Cost Estimation](https://github.com/OllisGit/OctoPrint-CostEstimation)
OctoFarm will use the cost plugins settings it detects to base it's own calculations on for cost within History and other places. OctoFarm replicates the calculations made by the plugin so nothing else is required for setup. You can edit OctoFarm's values within your printers settings.

## [Display Layer Progress](https://github.com/OllisGit/OctoPrint-DisplayLayerProgress)
OctoFarm will detect the plugins' availability on the first sync of your OctoPrint instance. Everything else is automatic once OctoFarm receives the data from the plugin. The plugin information will be available on the views in a cut down version and also on the printers job information panel.

## [Resource Monitor](https://github.com/Renaud11232/OctoPrint-Resource-Monitor)
Automatically detected by OctoFarm and displayed within Printer Manager for the plugins latest values. V1.2.x+ these values will be clickable and a history will be generated. 

## [OctoKlipper](https://github.com/thelastWallE/OctoprintKlipperPlugin)
Automatically detected by OctoFarm. Currently grabs and adds status output from Klipper to the printer manager's ticker and also updates the printers firmware version with current Klipper version number. A logs history is also captured that can be viewed in Printer Manager's "Manage" dropdown "Logs" section.

## OctoPrint's Power Control Plugins
These can all be setup in the Printer Settings plugin. You need to input your printer url and the api endpoint that the plugin has. Currently there are no pre-made settings to choose from but I have found all of the information on the corrosponding plugins github page.

Below are example settings for the OctoFarm power button. This will enable the button on the UI allowing power actions to be sent through OctoFarm to your printers power source.

OctoFarm's power button is not limited to these plugins, it just makes a POST request for each one if you supply a command to, and a GET request when no command object is supplied. It should suffice to support most setups / other power plugin's. 

As noted on the settings screen you may use ```[PrinterURL]``` / ```[PrinterAPI]``` to replace api key and a printer url when making the call.

### [PSU Control](https://github.com/kantlivelong/OctoPrint-PSUControl)
If the plugin is available on OctoFarms initial scan you will have your setting's from OctoPrint pre-filled. If you need to set this up manually then you can copy and paste from the table below. 
| Command | URL |
| --- | --- |
| Power On | |
|  ``` { "command":"turnPSUOn" }``` | ```[PrinterURL]/api/plugin/psucontrol``` |
| Power Off | |
|  ``` { "command":"turnPSUOff" }``` | ```[PrinterURL]/api/plugin/psucontrol``` |
| Power Toggle | |
|  ``` { "command":"togglePSU" }``` | ```[PrinterURL]/api/plugin/psucontrol``` |
| Get Status | |
|  ``` { "command":"getPSUState" }``` | ```[PrinterURL]/api/plugin/psucontrol``` |

### [TP-Link Smartplug](https://github.com/jneilliii/OctoPrint-TPLinkSmartplug)
These settings are not pulled on an initial scan due to requiring the Smartplugs IP address. You will need to fill them in as below replacing the required fields inside the "< >" brackets.
| Command | URL |
| --- | --- |
| Power On | |
|  ``` { "command":"turnOn", "ip": "<IP of tasmota device in settings>"``` | ```[PrinterURL]/api/plugin/tasmota``` |
| Power Off | |
|  ``` { "command":"turnOff", "ip": "<IP of tasmota device in settings>"``` | ```[PrinterURL]/api/plugin/tasmota``` |
| Power Toggle | |
|  ``` No toggle command available ``` | ```  ``` |
| Get Status | |
|  ``` { "command":"checkStatus", "ip": "<IP of tasmota device in settings>" }``` | ```[PrinterURL]/api/plugin/tasmota``` |


### [Tasmota](https://github.com/jneilliii/OctoPrint-Tasmota)
These settings are not grabbed on an initial scan due to requiring the Tasmota IP address and index stored inside OctoPrint. You will need to fill them in as below replacing the required fields inside the "< >" brackets.
| Command | URL |
| --- | --- |
| Power On | |
|  ``` { "command":"turnOn", "ip": "<IP of tasmota device in settings>", "idx": "<index number of tasmota device in settings>" }``` | ```[PrinterURL]/api/plugin/tasmota``` |
| Power Off | |
|  ``` { "command":"turnOff", "ip": "<IP of tasmota device in settings>", "idx": "<index number of tasmota device in settings>" }``` | ```[PrinterURL]/api/plugin/tasmota``` |
| Power Toggle | |
|  ``` No toggle command available ``` | ```  ``` |
| Get Status | |
|  ``` { "command":"checkStatus", "ip": "<IP of tasmota device in settings>", "idx": "<index number of tasmota device in settings>" }``` | ```[PrinterURL]/api/plugin/tasmota``` |

### Custom Setup
As mentioned above, OctoFarm is not limited by the use of a plugin. If you have another method of controlling your printers power that accepts GET / POST requests then you may follow the examples below.
#### GET
Leave the command section empty to make a get request. Input the URL of your endpoint into the URL box. Please be aware that for status responses your endpoint needs to return a single object (any key) with true / false.
| Command | URL |
| --- | --- |
| Power On | |
|   | ```[PrinterURL]/some/api/endpoint/?=powerOn``` |
| Power Off | |
|   | ```[PrinterURL]/some/api/endpoint/?=powerOff``` |
| Power Toggle | |
|   | ```[PrinterURL]/some/api/endpoint/?=powerToggle``` |
| Get Status | |
|   | ```[PrinterURL]/some/api/endpoint/?=getStatus``` |
#### POST
Input the json object your endpoint requires to be sent into the first box. Then input the URL of your endpoint into the URL box. Please be aware that for status responses your endpoint needs to return a single object (any key) with true / false.
| Command | URL |
| --- | --- |
| Power On | |
|  ``` { "command":"turnPSUOn" }``` | ```[PrinterURL]/some/api/endpoint``` |
| Power Off | |
|  ``` { "command":"turnPSUOff" }``` | ```[PrinterURL]/some/api/endpoint``` |
| Power Toggle | |
|  ``` { "command":"togglePSU" }``` | ```[PrinterURL]/some/api/endpoint``` |
| Get Status | |
|  ``` { "command":"getPSUState" }``` | ```[PrinterURL]/some/api/endpoint``` |

## Filament Manager Plugin
::: warning
OctoFarm will not work without the plugins database setting up. Do not use this without that.
:::
::: danger
This will clear out any spools currently in OctoFarms database and replace them with those on your Filament Manager Plugin instance. 
:::
### Setup in OctoFarm
If you haven't already, then it's recommended to follow the filament managers database setup guide that has been created specifically for OctoFarm setups. You can find that here: [Filament Manager Plugin Database Setup](/guides/filament-manager-installation.md).

Once that is setup then please navigate to the section showing below: System -> Server -> Filament Manager. 

Press the sync button to enable the sync.

### What does the sync actually do?

OctoFarm will do the following whilst checking your system is setup correctly. It is best you read this as there are some caveats to been aware of. 

1. OctoFarm will build a list of all the available online printers. They need to be online so OctoFarm can contact the plugin. If any are offline they will be dis-regarded in the checking and a warning notice will be produced informing you: that the plugin has been setup but these instances couldn't be checked.
2. OctoFarm will then check that it can find the plugins settings in each of your online instances.
3. A call to the plugins endpoint is made to make sure the plugin can contact the database. 
4. Profit! 

### Eurgh, I've got to update all my instances settings!?

No, you don't anymore. Since V1.2 I've put a button in the System settings page. If you click this, it will ask for your postgresql database settings, once inputted it will update every online instance it can find! Much easier :D

::: warning
When managing your filament please be aware that at least 1 OctoPrint instances needs to be online to handle the communications between OctoFarm <-> OctoPrint. If this isn't the case then your changes will not be updated in the database. 
:::

::: tip
Why do I need to setup two databases for this to work? Can't I just use OctoFarms database? 

I wish! That would be lovely. Basically this extra necessary step is in place because OctoFarm is supporting the Plugin and not the other way around. The plugin already had a setup for multi-instances support which utilised a postgresql database. 
:::
