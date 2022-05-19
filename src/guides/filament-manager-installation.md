# Filament Manager Plugin Database Setup ( Linux / RaspberryPi )

## Postgresql Database Setup
There are many places you could in theory install the postgresql database for use with the plugin. It's probably best it resides on your OctoFarm host, and these instructions will detail for Ubuntu / Debian systems and Arch.

::: warning
This must be installed on an always on device. You could run into issues if this device isn't on whilst OctoFarm / OctoPrint are communicating
:::

### Install the package

Debian / Ubunutu
```bash
sudo apt install postgresql
```
Arch Linux
```bash
sudo pacman -S postgresql

sudo -u postgres -i initdb --locale $LANG -E UTF8 -D /var/lib/postgres/data
```

Make sure the service is enabled and running (both systems)

```bash
sudo systemctl start postgresql.service
sudo systemctl enable postgresql.service
```

### Setup the database (Same on both systems)

Switch to the postgres user
```bash
sudo -u postgres -i
```

Create a user called octoprint
```bash
createuser --interactive -P

Enter name of role to add: octoprint
Enter password for new role:
Enter it again:
Shall the new role be a superuser? (y/n) n
Shall the new role be allowed to create databases? (y/n) n
Shall the new role be allowed to create more new roles? (y/n) n
```

Create the filament manager database
```bash
createdb -O octoprint octoprint_filamentmanager
```

Type: `\q` - This will quit the postgres user terminal and return you to the normal terminal

Configure PostgreSQL for local network
Per default PostgreSQL only accepts connections from localhost. To make the database server available in your network you have to modify two config files.
```bash
sudo nano /etc/postgresql/12/main/postgresql.conf
```

In /etc/postgresql/12/main/postgresql.conf change the line with listen_addresses to, make sure it's uncommented.
```bash
listen_addresses = '*'
```

Edit the following pg_hba.conf file with your database and network information.
```bash
sudo nano /etc/postgresql/12/main/pg_hba.conf
```
Adapt the IP address to your network, e.g. if your server has the IP 192.168.0.25 use 192.168.0.0/24 instead. This allows all clients in your network to access the database. For more information see https://en.wikipedia.org/wiki/Subnetwork
```bash
host octoprint_filamentmanager octoprint 192.168.0.0/24 md5
```
The final step is to restart the PostgreSQL service:
```bash
sudo systemctl restart postgresql.service
```

## OctoPrint Setup
::: warning
This will wipe the spools / profiles you have setup already. Thankfully Filament Manager Plugin has an export feature, please use this if you don't wish to lose that data.
:::

### SSH into the Pi and install the psycopg2 dependency the plugin requires

Use the SSH client you feel comfortable with and on every instance you will need to do the following
Python 3 Setups:
```bash
~/oprint/bin/pip3 install psycopg2
```
Python 2 Setups:
```bash
~/oprint/bin/pip install psycopg2
```

The above command is for Raspberry Pi's image "OctoPi". If your using another installation method then the path will vary.

If the above doesn't work then you can try the following -
Python 3
```bash
~/oprint/bin/pip3 install psycopg2-binary
```
Python 2
```bash
~/oprint/bin/pip install psycopg2-binary
```

## Setting up OctoPrint and OctoFarm
:::tip
The steps below can both now be run from OctoFarm and also in bulk to all of your instances. Printer Manager has an "Install Plugins" option and there is now a new button, in the System settings under "Filament Manager", to enter your database details and update the instances.
:::

### Install the plugin (if not already)
Go into OctoPrints plugin manager and search for Filament Manager. Press install.

### Setup the plugin
Go into OctoPrints settings and enter the following data under the database tab in Filament Manager.

URL: ```postgresql://[your database IP]```

Database Name: ```octoprint_filamentmanager```

User: ```octoprint```

Password: ```The one you set above.```

After this you can use the "Test Connection" button, this will turn green when successful and red when not. (This is depending on your theme! If the button doesn't change switch back to OctoPrints default).

All been well, please go and continue the setup in OctoFarm. [Filament Manager Plugin](/getting-started/octoprint-supported-plugins.html#filament-manager-plugin)
