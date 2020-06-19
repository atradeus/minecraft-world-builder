package io.logicaldata.minecraftworlds;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.apache.commons.lang3.RandomUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;
import java.util.Objects;
import java.util.Properties;

/**
 * @author Anthony Merlo
 * @since 22/05/2020
 */
@RestController
@RequestMapping("/api")
public class AppController {

    private static final Logger logger = LoggerFactory.getLogger(AppController.class);

    private static final String GIT_PROPERTIES = "git.properties";

    private final AppService appService;
    private final JavaMailSender javaMailSender;
    private final String fromEmail;

    AppController(AppService appService, JavaMailSender javaMailSender, @Value("${app.email}") String fromEmail) {
        this.appService = appService;
        this.javaMailSender = javaMailSender;
        this.fromEmail = fromEmail;
    }

    @GetMapping("/biomes")
    public ResponseEntity<?> biomes() {
        try {
            return ResponseEntity.ok(appService.getBiomes());
        } catch (Exception e) {
            logger.error("Get biomes failed", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/seed")
    public ResponseEntity<?> seed() {
        return ResponseEntity.ok(RandomUtils.nextLong(-Long.MAX_VALUE, Long.MAX_VALUE));
    }

    @GetMapping("/locale")
    public ResponseEntity<?> locale(Locale locale) {
        return ResponseEntity.ok(locale);
    }

    @GetMapping("/version")
    public ResponseEntity<?> version() {
        try {
            final Properties properties = new Properties();
            try (final InputStream inputStream = Objects.requireNonNull(getClass().getClassLoader()
                    .getResourceAsStream(GIT_PROPERTIES), GIT_PROPERTIES)) {
                properties.load(inputStream);
            }
            return ResponseEntity.ok(new GitInfo(properties.getProperty("git.commit.id")));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/contact")
    public ResponseEntity<?> contact(@RequestBody ContactRequest request) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(request.email);
            message.setTo(fromEmail);
            //message.setCc(request.email);
            message.setSubject(request.subject);
            message.setText(String.format("From: %s\n\n%s", request.email, request.content));
            javaMailSender.send(message);
            logger.debug("Email sent: {}", message);
            return ResponseEntity.accepted().build();
        } catch (MailException e) {
            logger.error("Failed to send email: " + request, e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
    public record GitInfo(String commitId) {
    }

    @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
    public static class ContactRequest {
        String email;
        String subject;
        String content;
    }
}
