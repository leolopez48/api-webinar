# Webinar - ITCA-FEPADE

## Construir la imagen de docker

    docker build . -t leolopez48/api-webinar

## Subir la imagen al repositorio

    docker push leolopez48/api-webinar

## Correr el contenedor

    docker run -p 4000:3000 leolopez48/api-webinar

## Construir y correr el contenedor

    docker compose up -d