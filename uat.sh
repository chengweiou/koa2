cp -r src ~/Desktop/docker/universe/wormhole-node/
cp package.json ~/Desktop/docker/universe/wormhole-node/
cp -r config ~/Desktop/docker/universe/wormhole-node/
cd ~/Desktop/docker/universe/wormhole-node
docker stop wormhole-node
docker stop wormhole
docker run --rm -it -d --name wormhole-node -p 60000:8906 --network net -v /Users/chengweiou/Desktop/docker/universe/wormhole-node:/proj/ -w /proj/ node yarn serve:uat