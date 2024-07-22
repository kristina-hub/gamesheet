# gamesheet

**What does it do:**

Web application that shows a list of hockey teams. It allows users to edit team names and displays the revision history.

**Tools used:**

1. Maven: to manage dependencies
2. Angular: used to build web pages using HTML and Typescript
3. Spring Boot: used to create the Java application
4. PostgreSQL: to manage the relational database
5. pgAdmin: UI to manage PostgreSQL database
6. Docker: builds and runs application using containers

**To run the application:**

```
docker pull postgres
docker run --name postgres-container -e POSTGRES_USER=user -e POSTGRES_PASSWORD=postgres2024 -p 5432:5432 -d postgres
docker ps -a
docker pull dpage/pgadmin4
docker run --name pgadmin-container -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=user@domain.com -e PGADMIN_DEFAULT_PASSWORD=pgadmin2024 -d dpage/pgadmin4
docker exec postgres-container psql -U user -c"CREATE DATABASE team_db" postgres
cd backend
./mvnw spring-boot:run
cd frontend
ng serve
```

**To access the running application in a browser:**

1. http://localhost:8080/team/show
2. http://localhost:8080/team/post
3. http://localhost:8080/team/edit
4. http://localhost:8080/team/select
5. http://localhost:8080/team/history

**To access api documentation on swagger and login to PgAdmin4:**

1. http://localhost:8080/swagger-ui/index.html
2. https://localhost:5050

**Local login credentials:**

```
PgAdmin4: user@domain.com pgadmin2024
PostgreSQL: user postgres2024
```

**Sample output:**

```
Teams found with findAll():
-------------------------------
Team [id=1, content='Brampton Steelheads']
Team [id=2, content='Guelph Storm']
Team [id=3, content='Oshawa Generals']
Team [id=4, content='Kitchener Rangers']
Team [id=5, content='Erie Otters']

Team found with findById(1L):
--------------------------------
Team [id=1, content='Brampton Steelheads']

Team found with findByContent('Kitchener Rangers'):
--------------------------------------------
Team [id=4, content='Kitchener Rangers']
```
