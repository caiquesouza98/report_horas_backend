# Training Node JS

### MongoDB

` $ docker run --name mongodb -p 27017:27017 -d mongo:latest`

### Environment variables 

`NODE_ENV=` -> related to the env: development|production
`DATABASE_URL` -> the MongoDB ip + database name ex: `mongodb://localhost:27017/db`
