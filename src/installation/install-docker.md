# Docker

NOTE I assume you are familiar with `docker` or `docker-compose`. These are great tools for isolating your software deployment (+), but it be quite new to some users (-).
   - I cannot support each custom scenario or setup!

## Tags

We provide `octofarm/octofarm:latest` and `octofarm/octofarm:monolithic-latest`
- `latest`require you to run MongoDB or a MongoDB container (see compose below)
- `monolithic` does not require a separate MongoDB, but we at OctoFarm personally like MongoDB to be separate (docker = isolation remember?).

You can check out the latest development version by replacing `-latest` with `-dev` so `octofarm/octofarm:dev`

## Docker Run

You can get up and running quite easily with the command below. It's recommended to use the docker-compose instructions below for a more persistent configuration. 

```sh
docker run -d --name octofarm -e "MONGO=mongodb://{ mongoip }/octofarm" -p4000:4000 octofarm/octofarm -e "TZ=America/Chicago" -v '{your persistent folder}/OctoFarm/scripts/':/scripts/':'rw' -v '<your persistent folder>/OctoFarm/logs/':'/app/logs/':'rw' -v './OctoFarm/images':'/app/images':rw'
```

Environment Variables

- MONGO = contains mongodb connection string
- TZ = local timezone code e.g. "America/Chicago" Database of TimeZone Values Here

## Docker Compose

### Docker images 'latest' with separate MongoDb
**Pay good attention that you have to configure your root-user's username and password for MongoDB and that OctoFarm needs it to work!**

Replace the values for `MONGO_ROOTUSER_HERE`, `MONGO_PASSWORD_HERE` below!

```docker
version: '3.4' 

services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    environment:
      MONGO_INITDB_ROOT_USERNAME: MONGO_ROOTUSER_HERE
      MONGO_INITDB_ROOT_PASSWORD: MONGO_PASSWORD_HERE
      MONGO_INITDB_DATABASE: octofarm
    volumes:
    # Local volume (change to mongodb-data for a named volume folder)
      - ./mongodb-data:/data/db
    restart: unless-stopped

  octofarm:
    container_name: octofarm
    # choose octofarm/octofarm:latest
    image: octofarm/octofarm:latest
    restart: unless-stopped
    links:
      - mongodb
    ports:
      - 4000:4000 # port of SYSTEM : port of CONTAINER
    environment:
      - MONGO=mongodb://MONGO_ROOTUSER_HERE:MONGO_PASSWORD_HERE@mongodb:27017/octofarm?authSource=admin
    volumes:
    # Volumes as local relative folders (validate with 'docker-compose config')
      - ./OctoFarm/logs:/app/logs
      - ./OctoFarm/scripts:/app/scripts
      - ./OctoFarm/images:/app/images
```
### Docker image 'monolithic-latest'
The monolithic image does not require MongoDB externally, but it also has less control over MongoDB setup:
```docker
 octofarm-monolithic:
    container_name: octofarm-monolithic
    image: octofarm/octofarm:monolithic-latest
    restart: unless-stopped
    volumes:
    # Local volumes, can be made named
      - ./OctoFarm/logs:/app/logs   
      - ./OctoFarm/scripts:/app/scripts
      - ./OctoFarm/images:/app/images
      - ./mongodb-data:/data/db 
    ports:
    # SYSTEM:CONTAINER
      - 4000:4000
```

Enjoy using OctoFarm with docker and do share your big-flex juicy pics on [Our Discord](https://discord.octofarm.net).
