# Linux (Arch)

Verfied working as of Aug/30th 2021. Arch is a rolling release so this may be subject to sudden change.

## 1 Update your repositories and packages fully:

```bash
sudo pacman -Syu
```

## 2 Install necessary dependencies:

```bash    
sudo pacman -S nodejs gcc make git npm
```

## 3 Verify correct Nodejs version (needs to be 14+)

```bash
node --version`
```

## 4 MongoDB

This is somewhat of a pain on Arch. Because of licensing concerns it is not provided as a package from the official repository so we will need to install the binary from AUR. You may use a AUR helper (such as yay) if you prefer. It is also possible to leverage something like Atlas MongoDB but that is beyond the scope of this documentation. This being Linux (and especially a variant like Arch) there are a probably a couple dozen ways to skin this cat including but not limited to containers (Docker, Podman, etc) Flatpaks, appimages, etc. 

Just keep in mind that there is no accounting for what is in a binary blob; we have no way of telling what options it is compiled with, and what the pkgbuild looked like. The problem is that compiling MongoDB from source takes a stunning ~200GB of disk space and several hours on a decent CPU. This makes "doing it correctly" burdensome to say the least. Understand what you are doing and the origin of the code if you are going to install a binary from a non-official repository and take precautions. 

TL:DR use at your own risk.

### 4.1 Install necessary tools

```bash
sudo pacman -S --needed base-devel
```

### 4.2 Install mongodb-bin from AUR:

```bash
git clone https://aur.archlinux.org/mongodb-bin.git
cd mongodb-bin
makepkg -si
```

### 4.3 Start and make MongoDB persist reboots

```bash
sudo systemctl enable mongodb --now
sudo systemctl status mongodb
```
    
## 5 Install pm2:

```bash
sudo npm install pm2 -g
```

## 6 Obtain and start OctoFarm

```bash
cd ~
git clone --depth 1 https://github.com/OctoFarm/OctoFarm.git
cd OctoFarm/
npm start
pm2 list
```

- You should see something similar to:

```
[mnavarro@ArchLinux OctoFarm]$ pm2 list
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ OctoFarm           │ fork     │ 0    │ online    │ 0%       │ 94.1mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

## 7 Allow traffic on port 4000

This will depend on your particular installation of Arch (iptables, Firewalld, etc etc). Just make sure port 4000 tcp/udp (or whatever port you have the application running on) is open to traffic from your client machine.

That's it. Navigate to <printer_ip>:4000 (example: "192.168.100.10:4000") in your browser and have a day!

## Additional
OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation:
[Service Setup](/installation/setup-service.md)
