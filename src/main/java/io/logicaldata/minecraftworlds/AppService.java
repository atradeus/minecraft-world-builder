package io.logicaldata.minecraftworlds;

import io.logicaldata.minecraftworlds.record.Biome;
import org.apache.commons.io.IOUtils;

import javax.inject.Named;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static java.nio.charset.StandardCharsets.UTF_8;
import static java.nio.file.StandardOpenOption.CREATE_NEW;

/**
 * @author Anthony Merlo
 * @since 22/05/2020
 */
@Named
public class AppService {

    public List<Biome> getBiomes() {
        try {
            String html;
            Path biomeFile = Paths.get(System.getProperty("java.io.tmpdir"), "minecraft_biome.html");

            if (Files.exists(biomeFile)) {
                html = Files.readString(biomeFile);
            } else {
                html = IOUtils.toString(new URL("https://minecraft.gamepedia.com/Biome/ID"), UTF_8);
                Files.writeString(biomeFile, html, CREATE_NEW);
            }

            Pattern p = Pattern.compile("(?=<tr.+?title=\"([^\"]+).+?code>([^<]+).+?<td>([^<]+))", Pattern.DOTALL);
            return p.matcher(html.substring(html.indexOf(">Numeric ID"), html.indexOf("</table")))
                    .results()
                    .filter(mr -> mr.group(1).trim().length() > 0)
                    .map(mr -> new Biome(mr.group(1), mr.group(2), Integer.parseInt(mr.group(3).trim())))
                    .collect(Collectors.toList());
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }


//    public static void main(String[] args) {
//        AppService appService = new AppService();
//        appService.getBiomes().forEach(b -> System.out.println(b));
//    }
}
