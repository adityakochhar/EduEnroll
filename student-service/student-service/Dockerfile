FROM eclipse-temurin:24-jdk AS build
WORKDIR /app

COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw -q -DskipTests dependency:go-offline

COPY src src
RUN ./mvnw -q -DskipTests clean package

FROM eclipse-temurin:24-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
# Render injects PORT; Spring reads server.port from env
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
