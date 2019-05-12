cp -r src ~/Desktop/docker/xxx-node/
cp package.json ~/Desktop/docker/xxx-node/
cp -r config ~/Desktop/docker/xxx-node/
cd ~/Desktop/docker/xxx-node
docker stop xxx-node
docker run --rm -it -d --name xxx-node -p 60001:8906 --network net -v /Users/chengweiou/Desktop/docker/xxx-node:/proj/ -w /proj/ node yarn serve:uat