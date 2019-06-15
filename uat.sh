cp -r src ~/Desktop/docker/universe/xxx-node/
cp package.json ~/Desktop/docker/universe/xxx-node/
cp -r config ~/Desktop/docker/universe/xxx-node/
cd ~/Desktop/docker/universe/xxx-node
docker stop xxx-node
docker run --rm -it -d --name xxx-node -p 60001:8906 --network net -v /Users/chengweiou/Desktop/docker/universe/xxx-node:/proj/ -w /proj/ node yarn serve:uat