FROM maven:3.9.8-openjdk-22 AS build
WORKDIR /app
COPY . .
FROM openjdk:22-jre-slim
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]