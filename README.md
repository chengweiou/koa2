### uat 环境
network
docker network create net

mongodb
docker run --rm -it --name mongodb -p 27017:27017 --network net -v /Users/chengweiou/Desktop/docker/mongodb/data:/data/db -d mongo

#### 上传
```
./uat.sh
```
first time:
```
chmod +x uat.sh
./uat.sh
```
each time node_modules update, add blow to uat.sh
```
zip -qr node_modules.zip node_modules
cp node_modules.zip ~/Desktop/docker/universe/wormhole/
rm -rf node_modules.zip
cd ~/Desktop/docker/universe/wormhole
unzip -o node_modules.zip
cd ~/Desktop/docker/universe/wormhole
```
