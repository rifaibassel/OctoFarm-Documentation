# Remote Access Setup.

## Reverse Proxy
You can host OctoFarm behind a reverse proxy and use local connections to your camera and octoprint hosts. OctoFarm proxies all commands through itself so it can be at the front end of your network and keeping all your octoprint instances hidden and secured. Only OctoFarm requires access to your OctoPrint instances. The only functionality you will lose is been able to open the OctoPrint GUI from OctoFarm as that will still require local access to OctoPrint.
::: warning
If you choose to host OctoFarm itself behind a reverse proxy, or with an open port then you do so at your own risk. OctoFarm is setup to be relatively secure but I am yet to full check it over.
:::

## VPN
OctoFarm works fine over VPN, you also have the added benefit of been able to access your OctoPrint web GUI when needed.
::: danger
It's not recommended to put the VPN server on the same host as OctoFarm if your running a Pi4 or similar system. This can quite easily saturate the network connection on the Pi, and increase CPU usage.
:::

### VPN Recommendations
Below are just a few recommendations of the many available VPN solutions.
 - OpenVPN
 - WireGuard
 - PiVPN
