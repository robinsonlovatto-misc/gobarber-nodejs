# GoBarber - Back-end
This project is a marketplace for barber shops. It was the main project on Rocketseat's Bootcamp.

### Features:
  - Sign in, sign up and sign out
  - More is coming

### Tech:

  - Node.js
  - TypeScript
  - Postgres via docker
  - TypeORM

### Setup:
  - Install Postgres or a container of Postgres in Docker
  - Configure the file ormconfig.json properly (database connection config) and start the database
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
  
### Endpoints


### ReactJS Front-end for this project:

[gobarber-reactjs](https://github.com/rlovatto/gobarber-reactjs)


### React Native App for this project:

[gobarber-react-native](https://github.com/rlovatto/gobarber-react-native)
