#!/usr/bin/env bash
set -ex

IMAGE=logicaldata/minecraft-world-builder
NAME=minecraft
PORT=8420

cd ..

./mvnw -DskipTests spring-boot:build-image -Dspring-boot.build-image.imageName=${IMAGE}

if [ "$(docker ps -q -f name=${NAME})" ]; then
  docker rm -f ${NAME}
fi

docker run -d --name ${NAME} -p ${PORT}:${PORT} -t ${IMAGE}

cd -
