cp -r src ~/Desktop/docker/universe/wormhole/
cp package.json ~/Desktop/docker/universe/wormhole/
cp -r config ~/Desktop/docker/universe/wormhole/

# zip -qr node_modules.zip node_modules
# cp node_modules.zip ~/Desktop/docker/universe/wormhole/
# rm -rf node_modules.zip
# cd ~/Desktop/docker/universe/wormhole
# unzip -o node_modules.zip
# cd ~/Desktop/docker/universe/wormhole

cp docker-compose.yml ~/Desktop/docker/universe/wormhole/docker-compose.yml
cd ~/Desktop/docker/universe/wormhole

docker compose down
docker compose rm -f
docker compose up -d