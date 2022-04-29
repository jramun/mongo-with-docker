#!/bin/bash
docker-compose up -d
sleep 5
docker-compose exec -T db mongoimport --db cooking --collection recipes --file json/recipes.json --jsonArray
docker-compose exec -T db mongoimport --db cooking --collection users --file json/users.json --jsonArray
