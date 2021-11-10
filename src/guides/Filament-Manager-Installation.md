# Setup guide for remote database using the plugin FilamentManager

## Installation of PostgreSQL database on OctoFarm Client

#### If you have filament records loaded into filament manager already on one of your OctoPrint instances please export them to save you loosing them

On the OctoFarm client open the terminal and enter the following:

Install the postgresql package:
```
$ sudo apt install postgresql
```

Switch to the postgres user:
```
$ sudo -u postgres -i
```

Create user octoprint:
```
[postgres]$ createuser --interactive -P

Enter name of role to add: octoprint
Enter password for new role:
Enter it again:
Shall the new role be a superuser? (y/n) n
Shall the new role be allowed to create databases? (y/n) n
Shall the new role be allowed to create more new roles? (y/n) n
```

Create database octoprint_filamentmanager:
```
[postgres]$ createdb -O octoprint octoprint_filamentmanager
```

Configure PostgreSQL for local network
Per default PostgreSQL only accepts connections from localhost. To make the database server available in your network you have to modify two config files.
```
sudo nano /etc/postgresql/12/main/postgresql.conf
```

In /etc/postgresql/12/main/postgresql.conf change the line with listen_addresses to
```
listen_addresses = '*'
```

Then append the following line to /etc/postgresql/12/main/pg_hba.conf
```
sudo nano /etc/postgresql/12/main/pg_hba.conf
```
Adapt the IP address to your network, e.g. if your server has the IP 192.168.0.25 use 192.168.0.0/24 instead. This allows all clients in your network to access the database. For more information see https://en.wikipedia.org/wiki/Subnetwork
```
host octoprint_filamentmanager octoprint 192.168.0.0/24 md5
```
The final step is to restart the PostgreSQL service:
```
sudo systemctl restart postgresql.service
```

## Setup of database connection on OctoPrint

Open the terminal on your OctoPrint RPi in my case i SSH into them 

always good to do updating your RPI:
```
sudo apt-get update
```
#### curently cause of debian changes you need to run 
```
apt-get update --allow-releaseinfo-change
```
Now we upgrade them
```
sudo apt-get upgrade
```

Now install :
```
~/oprint/bin/pip3 install psycopg2
```
```
cd /oprint/bin/
```
```
sudo apt install libpq5
```
```
sudo apt install python3-psycopg2
```
```
sudo reboot
```
the RPI will now reboot once this is complete open OctoPrint

#### with some RPI i had to do the below to get it to work (its super flakey)
open settings
then plugin manager
uninstall filament manager and clean up data
click the reboot now
wait for the reload now
go to settings
plugin manager
reinstall filament manager
click the reboot now
wait for the reload now
go to settings
filament manager

#### All going well you should just have to run these setps on the RPI and your good to go
enter the database info into the filament manager plugin
URL: postgresql://[your database IP]
database name: octoprint_filamentmanager
User: octoprint
password: one you set

hit test connection it should turn green
hit save
reboot octoprint

enjoy!

#### when deleting items from your filament database you must remove a spool before removing the vendor this is due to a key constraint within the join of the two tables
