# Upgrading MongoDB From Previous Versions

## Guide is specifically for Monolithic but should work for any mongodb data. Just be aware of the versions.

If your still on the older version, you can skip part 1. Just exec into the octofarm container and run the commands from there... the "some_mongo" name will be different though.

1. Start mongodb 3.4 container
```bash
docker run -v /{replace with your data directory}/:/data/db --name some_mongo -d mongo:3.4
```
2. Go into the containers CLI
```bash
docker exec -it some_mongo bash
```
3. Make a new "dump" directory
```bash
mkdir /data/db/dump
```
4. Use mongodump to backup the database
```bash
mongodump -d octofarm -o /data/db/dump
```
5. Exit the docker container cli
```bash
exit
```
6. Clean up the old container and move the dump somewhere safe
```bash
sudo docker stop some_mongo
sudo docker rm some_mongo
sudo mv /{replace with your data directory}/dump/octofarm ~/{your safe dir}
```
7. Nuke you data dir folder
```bash
rm -Rf /{replace with your data directory}/
```
8. Spin up a mongodb 4.4.14 container (this is what the new monolithic image uses), then stop it
```bash
docker run -v /{replace with your data directory}/:/data/db --name some_mongo -d mongo:4.4.14
docker stop some_mongo
```
8. Change into your newly created local directory, create a folder called dump and add back in the octofarm dump.
```bash
cd /{replace with your data directory}/
sudo mkdir dump
sudo cp -r ~/{your safe dir} /{replace with your data directory}/dump
docker start some_mongo
```
9. Back into the containers CLI
```bash
docker exec -it some_mongo bash
```
10. Restore your database dump
```bash
mongorestore /data/db/dump/octofarm/ --db octofarm
```
You should see something like: `2022-05-22T02:03:41.594+0000    # document(s) restored successfully. 0 document(s) failed to restore.`
11. Exit the container and remove the 4.4 image.
```bash
exit
docker stop some_mongo
docker rm some_mongo
```

That's it! Your database will be updated to mongo v4.4. You just need to update your container and restart if you haven't already updated.



