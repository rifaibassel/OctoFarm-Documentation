# F.A.Q

## I've installed but I can't access the web interface? 
This is usually down to MongoDB instance not starting or been incorrectly installed. Make sure it's running and restart OctoFarm.

## OctoFarm won't connect to my printer? 
There's a few things to check here. Make sure you've followed the OctoPrint and restarted your device after enabling CORS. If you have multiple OctoPrint users then you need to double check you've provided the correct key+user combination. Look in the Printer Settings to see which user OctoFarm is connecting with. It's hard coded so you'll have to provide the key for that user. For more information
[OctoPrint Setup](/src/getting-started/octoprint-setup.md)


## Commands fail to send to OctoPrint but status updates? 
This is usually a routing issue. Make sure the client your accessing OctoFarm from can connect to the OctoPrint instances as the commands are currently sent client side.

## Can I install OctoFarm on OctoPi? 
No, to put it bluntly. Due to MongoDB's 64-bit requirement this is currently not possible nor recommended. OctoFarm has a chance (albeit slim) to interferr with a print by taking CPU away from your OctoPrint instance. This setup is not recommended and not supported in anyway by the team at OctoFarm. 