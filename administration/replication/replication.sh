#!/bin/bash

docker-compose up -d

sleep 5

docker-compose exec -T mongo1 /scripts/rs-init.sh