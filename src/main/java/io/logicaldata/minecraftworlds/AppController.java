package io.logicaldata.minecraftworlds;

import org.apache.commons.lang3.RandomUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Anthony Merlo
 * @since 22/05/2020
 */
@RestController
@RequestMapping("/api")
public class AppController {

    private static final Logger logger = LoggerFactory.getLogger(AppController.class);

    private final AppService appService;

    public AppController(AppService appService) {
        this.appService = appService;
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
}
