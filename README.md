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
