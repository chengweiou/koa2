cp -r src ~/Desktop/docker/universe/wormhole/
cp package.json ~/Desktop/docker/universe/wormhole/
cp -r config ~/Desktop/docker/universe/wormhole/

# zip -qr node_modules.zip node_modules
# cp node_modules.zip ~/Desktop/docker/universe/wormhole/
# rm -rf node_modules.zip
# cd ~/Desktop/docker/universe/wormhole
# unzip -o node_modules.zip
# cd ~/Desktop/docker/universe/wormhole

cd ~/Desktop/docker/universe/wormhole
docker stop wormhole
docker run --rm -it -d --name wormhole -p 60000:8906 --network net -v /Users/chengweiou/Desktop/docker/universe/wormhole:/proj/ -w /proj/ node yarn serve:uat
