#FROM adoptopenjdk/openjdk14
FROM adoptopenjdk/jdk-14.0.1_7-alpine-slim
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
