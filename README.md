# Kira Ask

This is a React application containerized using Docker. The app is built using Node.js and served using Nginx.

## Project Setup
### Running Locally
```shell
npm install
```
```shell
npm start
```

This will start the development server at http://localhost:3000.

### Running in a Container
```shell
docker build -t kira-ask-ui .
```
```shell
docker run -p 80:80 kira-ask-ui
```

Now, visit http://localhost in your browser to see the app.

### Stopping the Container
To stop running the app run:
```shell
docker ps
docker stop <container_id>
```

### To Remove the Container & Image
```shell
docker rm <container_id>
docker rmi kira-ask-ui
```
