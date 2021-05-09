# nest-todo-api

Install [docker and docker-compose](https://docs.docker.com/compose/install/)

To start application:

```bash
# start postgres service
sudo docker-compose up -d --build

# start nest.js app
yarn start:dev
```

To stop postgres container:

```bash
sudo docker-compose down -v --rmi all --remove-orphans
```

[localhost:3003](http://localhost:3003)
