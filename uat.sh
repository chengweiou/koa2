cp -r src ~/Desktop/docker/universe/bloodbrone-koa2/
cp package.json ~/Desktop/docker/universe/bloodbrone-koa2/
cp -r config ~/Desktop/docker/universe/bloodbrone-koa2/
cd ~/Desktop/docker/universe/bloodbrone-koa2
docker stop bloodbrone-koa2
docker run --rm -it -d --name bloodbrone-koa2 -p 60001:8906 --network net -v /Users/chengweiou/Desktop/docker/universe/bloodbrone-koa2:/proj/ -w /proj/ node yarn serve:uat
