package io.logicaldata.minecraftworlds;

import javax.inject.Named;

/**
 * @author Anthony Merlo
 * @since 22/05/2020
 */
@Named
public class AppService {
//
//    public List<Biome> getBiomes() {
//        try {
//            String html;
//            Path biomeFile = Paths.get(System.getProperty("java.io.tmpdir"), "minecraft_biome.html");
//
//            if (Files.exists(biomeFile)) {
//                html = Files.readString(biomeFile);
//            } else {
//                html = IOUtils.toString(new URL("https://minecraft.gamepedia.com/Biome/ID"), UTF_8);
//                Files.writeString(biomeFile, html, CREATE_NEW);
//            }
//
//            Pattern p = Pattern.compile("(?=<tr.+?title=\"([^\"]+).+?code>([^<]+).+?<td>([^<]+))", Pattern.DOTALL);
//            return p.matcher(html.substring(html.indexOf(">Numeric ID"), html.indexOf("</table")))
//                    .results()
//                    .filter(mr -> mr.group(1).trim().length() > 0)
//                    .map(mr -> new Biome(mr.group(1), mr.group(2), Integer.parseInt(mr.group(3).trim())))
//                    .collect(Collectors.toList());
//        } catch (IOException e) {
//            throw new UncheckedIOException(e);
//        }
//    }
//
//    public List<Block> getBlocks() {
//        try {
//            String html = null;
//            Path biomeFile = Paths.get("/tmp/blocks.html");
//
//            if (Files.exists(biomeFile)) {
//                html = Files.readString(biomeFile);
//            } else {
//                html = IOUtils.toString(new URL("https://www.digminecraft.com/lists/item_id_list_pc.php"), UTF_8);
//                Files.writeString(biomeFile, html, CREATE_NEW);
//            }
//
//            Set<String> exclude = Set.of("potion", "disc", "arrow");
//
//            // </a><br>(<em>minecraft:<wbr>golden_<wbr>axe</em>)</td>
//
//            //Pattern p = Pattern.compile("(?=<tr.+?alt=\"([^\"]+).+?<a href.+?>([^<]+).+?<td>([^<]+))", Pattern.DOTALL);
//            Pattern p = Pattern.compile("(?=<tr.+?<a href.+?>([^<]+).+?minecraft:<wbr>(.+?(?=</em>)).+?<td>([^<]+))", Pattern.DOTALL);
//            return p.matcher(html.substring(html.indexOf("table id=\"minecraft_items"), html.indexOf("</table")))
//                    .results()
//                    .map(mr -> {
//                        Integer id = mr.group(3).equals("&nbsp;") ? null : Integer.valueOf(mr.group(3));
//                        var name = mr.group(1);
//                        var namespaceId = mr.group(2).replaceAll("<wbr>", "");
//                        return new Block(id, name, namespaceId);
//                    })
//                    .filter(b -> b.id != null && Arrays.stream(b.namespaceId.split("_")).noneMatch(exclude::contains))
//                    .sorted(Comparator.comparing(b -> b.id))
//                    .collect(Collectors.toList());
//        } catch (IOException e) {
//            throw new UncheckedIOException(e);
//        }
//    }
//
//    @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
//    public record Biome(String name, String namespaceId, int id) {
//    }
//
//    @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
//    public record Block(Integer id, String name, String namespaceId) {
//    }
//
//    public static void main(String[] args) throws Exception {
//        AppService appService = new AppService();
//        List<Block> list = appService.getBlocks();
//        list.forEach(System.out::println);
//        System.out.println(new ObjectMapper().writeValueAsString(list));
//    }
}
