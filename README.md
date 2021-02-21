# GoBarber - Back-end
This project is a marketplace for barber shops. It was the main project on Rocketseat's Bootcamp.

### Features:
  - Sign up, sign in and sign out
  - Reset Password
  - Send forgot password e-mail
  - Show and Update profile with avatar

  - List providers
  - List Appointments by provider
  - List availability 
  - Create Appointment

### Tech:

  - Node.js
  - TypeScript
  - Docker
  - Postgres
  - MongoDB
  - Redis
  - Jest

### Setup:
  - Install Node.js
  - Install Docker
  - Install Postgres on Docker
 
  ```  
docker run -d --name postgresql -e POSTGRESQL_PASSWORD=YOUR_PASS -e POSTGRESQL_USERNAME=YOUR_USER -e POSTGRESQL_DATABASE=YOUR_DB -p PORTA_EXTERNA:5432 bitnami/postgresql:latest
```
  - Install MongoDB

  ```  
docker run -d --name mongodb -e MONGODB_USERNAME=YOUR_USER -e MONGODB_PASSWORD=YOUR_PASS -e MONGODB_DATABASE=YOUR_DB -p PORTA_EXTERNA:27017 bitnami/mongodb:latest
```
  - Install Redis

  ```  
docker run -d --name redis -e REDIS_PASSWORD=YOUR_PASS -p PORTA_EXTERNA:6379 bitnami/redis:latest
```
  - Configure the file ormconfig.json properly (Postgres and MongoDB settings)
  - Configure the file .env properly (Redis settings and other environment variables)
  - Start all Docker images: Postgres, MongoDB and Redis
  - Run the command to install all dependencies
  ```  
yarn
```
  - Run the typeorm script to create the tables:
  ```
  yarn typeorm migration:run
```
  - Run the project:
  ```
  yarn dev:server
```
  
### Endpoints:

POST   - /users <br>
```json
{
	"name": "Robinson",
	"email": "robinson@example.com",
	"password": "123456"
}
```

PUT (bearer token)   - /profile <br>
```json
{
	"name": "Robinson Lovatto",
	"email": "robinson@example.com"	,
	"old_password": "123456",
	"password": "123456"
}
```

PATCH  (bearer token)  - /users/avatar <br>
GET  (bearer token)  - /profile <br>
POST   - /sessions <br>
```json
{
	"email": "robinson@example.com"	,
	"password": "123456"
}
```

POST   - /password/reset <br>
```json
{
	"password": "123123",
	"token": "f1e0bd28-cbc3-41a5-a269-1760f756395f"
}
```

POST   - /password/forgot <br>
```json
{
	"email": "robinson@example.com"	
}
```

GET (bearer token)  - /providers <br>
GET (bearer token)  - /appointments/me <br>
GET (bearer token)  - /providers/:provider_id/month-availability?year=2020&month=5 <br>
GET (bearer token)  - /providers/:provider_id/day-availability?year=2021&month=2&day=11 <br>
POST (bearer token)  - /appointments <br>
```json
{
	"provider_id": "e70de624-9e82-4490-bb49-4edede35b4c0",
	"date": "2021-02-09 14:00:00"
}
```

### ReactJS Front-end for this project:

[gobarber-reactjs](https://github.com/rlovatto/gobarber-reactjs)


### React Native App for this project:

[gobarber-react-native](https://github.com/rlovatto/gobarber-react-native)
