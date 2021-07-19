# Remote Access Setup.
Due to some legacy code from when OctoFarm was a single page html file it is currently impossible to host your OctoFarm instance on the internet without also hosting your OctoPrint instances with it.
That is not recommended at all as it would leave your OctoPrint instance exposed to the internet.

There is the same caveat for your web camera's as well, as they would require been directly accessible via the internet due to no internal routing happening with these requests.

Currently until this changes (set for 2.X release) then the best method of accessing OctoFarm remotely is with a VPN. There are various methods to setup a VPN detailed below, my personal favourite is WireGuard for it's simplicity.

::: warning
If you choose to host OctoFarm itself behind a reverse proxy, or with an open port then you do so at your own risk. I do not recommend this setup as it's not been verified to be secure and you'll also loose the ability to send commands to your OctoPrint instances due to legacy code within the client.
:::

::: danger
It's not recommended to put the VPN server on the same host as OctoFarm if your running a Pi4 or similar system. This can quite easily saturate the network connection on the Pi, and increase CPU usage.
:::

## VPN Recommendations
Below are just a few recommendations of the many available VPN solutions.
 - OpenVPN
 - WireGuard
 - PiVPN 