package io.logicaldata.minecraftworlds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({MailProperties.class})
public class MinecraftWorldsApplication {

    public static void main(String[] args) {
        SpringApplication.run(MinecraftWorldsApplication.class, args);
    }

}
