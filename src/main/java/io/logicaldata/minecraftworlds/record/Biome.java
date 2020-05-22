package io.logicaldata.minecraftworlds.record;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * @author Anthony Merlo
 * @since 22/05/2020
 */
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public record Biome(String name, String namespaceId, int id) {

}
