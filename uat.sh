cp -r src ~/Desktop/docker/wormhole-node/
cp package.json ~/Desktop/docker/wormhole-node/
cp -r config ~/Desktop/docker/wormhole-node/
cd ~/Desktop/docker/wormhole-node
docker stop wormhole-node
docker stop wormhole
docker run --rm -it -d --name wormhole-node -p 60000:8906 --network net -v /Users/chengweiou/Desktop/docker/wormhole-node:/proj/ -w /proj/ node yarn serve:uat