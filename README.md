# gamesheet

**To run the application:**

1. docker run --name postgres-container -e POSTGRES_USER=user -e POSTGRES_PASSWORD=postgres2024 -p 5432:5432 -d postgres
2. docker ps -a
3. docker run --name pgadmin-container -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=user@domain.com -e PGADMIN_DEFAULT_PASSWORD=pgadmin2024 -d dpage/pgadmin4
4. docker exec postgres-container psql -U user -c"CREATE DATABASE team_db" postgres
5. cd backend
6. ./mvnw spring-boot:run
7. cd frontend
8. ng serve

**What it can do:**

1. I would like a greeting service, so that I can have a personalized greeting returned
2. I would like to be able to see previous greetings, so that I can see who I said hello to
3. I would like all of my data stored in a Postgres database so that I can better manage it
4. I would like to see the revision history of my greetings, so I can see when I greeted
5. I would like to have a UI, so that I can manage my greetings

**To run the angular app:**

```
cd frontend
ng frontend
ng serve
```

**To access the running application in a browser:**

1. http://localhost:4200

**To create the angular app: https://angular.io/tutorial**

```
yarn global add @angular/cli
ng new frontend
ng generate component postGreeting --inline-template --skip-tests
ng generate service greeting

```

**To connect to the PostgreSQL database:**

1. Install WSL through Software Centre
2. Install Ubuntu 20.04 https://gitlab.chimera.cyber.gc.ca/woti/wsl_setup/-/blob/main/README.md

```
powershell -ExecutionPolicy Bypass -File c:\wsl_setup-main\setup_wsl2.ps1
```

4. Install Docker https://confluence.devtools.cse-cst.gc.ca/pages/viewpage.action?pageId=122520298

```
wsl
sudo apt update
sudo apt install docker.io
sudo systemctl enable docker.service
sudo systemctl start docker.service
sudo usermod -a -G docker $SUDO_USER
newgrp docker
sudo apt remove docker docker-engine docker.io containerd runc
echo "deb https://bagofholding.cse-cst.gc.ca/repository/docker_linux_ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/docker.list
curl https://bagofholding.cse-cst.gc.ca/repository/docker_linux_ubuntu/gpg | sudo apt-key add -
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

6. Download PostgreSQL

```
docker pull postgres
docker run --name postgres-container -e POSTGRES_USER=user -e POSTGRES_PASSWORD=postgres2024 -p 5432:5432 -d postgres
```

8. Download PgAdmin4 for Windows https://www.pgadmin.org/download/pgadmin-4-windows/

```
docker pull dpage/pgadmin4
docker run --name pgadmin-container -p 5050:80 -e PGADMIN_DEFAULT_EMAIL=user@domain.com -e PGADMIN_DEFAULT_PASSWORD=pgadmin2024 -d dpage/pgadmin4
docker exec postgres-container psql -U user -c"CREATE DATABASE greeting_db" postgres
```

9. Visit https://localhost:5050 and login to PgAdmin4

**Local login credentials:**

```
WSL2: kkacmaro bootcamp2024
PgAdmin4: user@domain.com pgadmin2024
PostgreSQL: user postgres2024
```

**Other useful Docker commands:**

```
docker ps -a
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker container prune -f
docker rm -f pgadmin-container
docker exec -it postgres-container psql -U user
\c greeting_db
SELECT * FROM greeting;
```

**To run the application:**

```
./mvnw spring-boot:run
```

**To access the running application in a browser:**

1. http://localhost:8080/greeting
2. http://localhost:8080/greeting?name=User
3. http://localhost:8080/greeting/2
4. http://localhost:8080/greeting/2/history
5. http://localhost:8080/greeting/2/edit

**To access api documentation on swagger:**

1. http://localhost:8080/swagger-ui/index.html
2. http://localhost:8080/v3/api-docs

**Other useful maven commands:**

```
./mvnw install
./mvnw clean
./mvnw test
./mvnw dependency:tree
```

**Sample output:**

```
Greetings found with findAll():
-------------------------------
Greeting [id=1, content='Bauer']
Greeting [id=2, content='Chloe']
Greeting [id=3, content='Kim']
Greeting [id=4, content='David']
Greeting [id=5, content='Michelle']

Greeting found with findById(1L):
--------------------------------
Greeting [id=1, content='Bauer']

Greeting found with findByContent('Kim'):
--------------------------------------------
Greeting [id=3, content='Kim']
```
