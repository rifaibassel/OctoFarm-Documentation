# Raspberry Pi
OctoFarm comes wrapped in a nice pre-built image for the RaspberryPi running on Ubuntu 64-bit. Similar to OctoPrint's OctoPi, FarmPi comes with all you need to get up and running with OctoFarm. You have the option to use FarmPi, or manually install OctoFarm itself. Both instructions are below.
FarmPi was created by [Maurice Kevenaar](https://github.com/mkevenaar) and all credit for it's creation goes to him. You can find the [FarmPi Github](https://github.com/mkevenaar/FarmPi). 

::: warning 
This image does NOT include OctoPrint... You will need that on another device / installed seperately somewhere... 
:::

You can find more information about FarmPi here: [FarmPi Documentation](https://farmpi.kevenaar.name/)

### Supported Printer Amount
::: warning
This is a guesstimate, these figures are due to change as feedback is received on the image.
:::
| RaspberryPi | # of Printers |
| ----------- | ------------- |
| 3A+         | 5             |
| 3B / 3B+    | 10            |
| 4B - 2GB    | 20            |
| 4B - 4GB    | 40            |
| 4B - 8GB    | 80            |


## FarmPi Distribution

1. Download the FarmPi image from github or the official FarmPi mirror. Always make sure you're getting the latest version.

 - [Maurice Kevenaar's GitHub Release page.](https://github.com/mkevenaar/FarmPi/releases/latest)

 - [FarmPi's Official Mirror](https://farmpi.octofarm.net/)

2. Flash the image onto your microSD Card.

 - [Create Ubuntu image for Pi on Ubuntu](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu)

 - [Create Ubuntu image for Pi on Windows](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows)

 - [Create Ubuntu image for Pi on OSX](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos)

3. Configure your WiFi by editing `farmpi-wpa-supplicant.txt` on the root of the flashed card when using it like a thumb drive, or use an UTP cable.
   
4. Boot FarmPi after flashing the SD Card.

5. If your network PC supports bonjour you can find your instance at `http://farmpi.local` or the ip address that your router gave the device.
 
6. More configuration options can be found on Maurice Kevenaar GitHub but you will be able to start adding printers to your FarmPi instance on it's web interface now.

## Manual Installation (FarmPi Recommended)
1. Ubuntu Download for Raspberry Pi

Download Ubuntu 64-bit 20.04 for your Raspberry Pi Hardware.
[Click here](https://ubuntu.com/download/raspberry-pi)
::: warning
Make sure it's Ubuntu Server 20.04.1 LTS
:::

2. Flash the image onto your microSD Card.

 - [Create Ubuntu image for Pi on Ubuntu](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu)

 - [Create Ubuntu image for Pi on Windows](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows)

 - [Create Ubuntu image for Pi on OSX](https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos)

3. Boot the ubuntu server after inserting the SD card.

4. Login to the Pi command line with your favourite SSH application.
::: tip
Default ubuntu credentials are: 
 - Username: ubuntu
 - Password: ubuntu
:::

5. Continue on with the [Linux (Ubuntu)](/installation/install-linux-ubuntu.md) setup.
