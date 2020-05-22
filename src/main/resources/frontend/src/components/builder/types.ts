export interface World {
  bonus_chest: boolean;
  generate_features: boolean;
  seed: number;
  dimensions: DimensionMap;
}

export interface DimensionMap {
  [name: string]: Dimension;
}

export interface Dimension {
  type: string | DimensionType;
  generator: Generator;
}

export interface DimensionType {
  ultrawarm: boolean;
  natural: boolean;
  shrunk: boolean;
  ambient_light: number;
  fixed_time: number;
  has_skylight: boolean;
  has_ceiling: boolean;
}

export interface Generator {
  seed: number;
  settings: string | GeneratorSettings;
  type: string;
  biome_source: BiomeSource;
}

export interface GeneratorSettings {
  bedrock_roof_position: number;
  bedrock_floor_position: number;
  sea_level: number;
  disable_mob_generation: boolean;
}

export interface BiomeSource {
  seed: number;
  type: string;
  large_biomes?: boolean;
  preset?: string;
  biomes?: Biome[];
}

export interface Biome {
  biome: string;
  parameters: BiomeParameters;
}

export interface BiomeParameters {
  altitude: number;
  weirdness: number;
  offset: number;
  temparature: number;
  humidity: number;
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomSeed() {
  return getRandomInt(Number.MAX_SAFE_INTEGER * -1, Number.MAX_SAFE_INTEGER);
}

export function getDefaultWorld(): World {
  const seed = getRandomSeed();
  return {
    "bonus_chest": false,
    "seed": seed,
    "generate_features": true,
    "dimensions": {
      "minecraft:overworld": {
        "type": "minecraft:overworld",
        "generator": {
          "biome_source": {
            "seed": seed,
            "large_biomes": false,
            "type": "minecraft:vanilla_layered"
          },
          "seed": seed,
          "settings": "minecraft:overworld",
          "type": "minecraft:noise"
        }
      },
      "minecraft:the_nether": {
        "type": "minecraft:the_nether",
        "generator": {
          "biome_source": {
            "seed": seed,
            "preset": "minecraft:nether",
            "type": "minecraft:multi_noise"
          },
          "seed": seed,
          "settings": "minecraft:nether",
          "type": "minecraft:noise"
        },
      },
      "minecraft:the_end": {
        "type": "minecraft:the_end",
        "generator": {
          "biome_source": {
            "seed": seed,
            "type": "minecraft:the_end"
          },
          "seed": seed,
          "settings": "minecraft:end",
          "type": "minecraft:noise"
        },
      }
    }
  };
}

export function getDefaultOverworldDimension(seed: number) {
  return {
    "type": "minecraft:overworld",
    "generator": {
      "biome_source": {
        "seed": seed,
        "large_biomes": false,
        "type": "minecraft:vanilla_layered"
      },
      "seed": seed,
      "settings": "minecraft:overworld",
      "type": "minecraft:noise"
    }
  };
}

export function getDefaultDimensionType(): DimensionType {
  return {
    ultrawarm: false,
    natural: false,
    shrunk: false,
    ambient_light: 0.5,
    fixed_time: 6000,
    has_skylight: true,
    has_ceiling: false
  };
}

export function getWorldExample(): World {
  return {
    "bonus_chest": false,
    "dimensions": {
      "minecraft:overworld": {
        "generator": {
          "biome_source": {
            "seed": -1464245863,
            "large_biomes": false,
            "type": "minecraft:vanilla_layered"
          },
          "seed": -1464245863,
          "settings": "minecraft:overworld",
          "type": "minecraft:noise"
        },
        "type": "minecraft:overworld"
      },
      "minecraft:the_nether": {
        "generator": {
          "biome_source": {
            "seed": -1464245863,
            "preset": "minecraft:nether",
            "type": "minecraft:multi_noise"
          },
          "seed": -1464245863,
          "settings": "minecraft:nether",
          "type": "minecraft:noise"
        },
        "type": "minecraft:the_nether"
      },
      "minecraft:the_end": {
        "generator": {
          "biome_source": {
            "seed": -1464245863,
            "type": "minecraft:the_end"
          },
          "seed": -1464245863,
          "settings": "minecraft:end",
          "type": "minecraft:noise"
        },
        "type": "minecraft:the_end"
      },
      "minecraft:use_teleport_command": {
        "generator": {
          "biome_source": {
            "seed": 1516683359872193970,
            "biomes": [
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temparature": 0.0,
                  "humidity": 0.0
                },
                "biome": "minecraft:plains"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temparature": 0.0,
                  "humidity": -0.5
                },
                "biome": "minecraft:the_end"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temparature": 0.5,
                  "humidity": 0.0
                },
                "biome": "minecraft:mushroom_fields"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temparature": 0.0,
                  "humidity": 0.5
                },
                "biome": "minecraft:mountains"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temparature": -0.5,
                  "humidity": 0.0
                },
                "biome": "minecraft:shattered_savanna"
              }
            ],
            "type": "minecraft:multi_noise"
          },
          "seed": -1464245863,
          "settings": {
            "bedrock_roof_position": -10,
            "bedrock_floor_position": -10,
            "sea_level": 0,
            "disable_mob_generation": true,
            // "structures": {
            //   "structures": {
            //     "minecraft:jungle_pyramid": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 14357619
            //     },
            //     "minecraft:endcity": {
            //       "spacing": 20,
            //       "separation": 11,
            //       "salt": 10387313
            //     },
            //     "minecraft:village": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 10387312
            //     },
            //     "minecraft:ruined_portal": {
            //       "spacing": 40,
            //       "separation": 15,
            //       "salt": 34222645
            //     },
            //     "minecraft:igloo": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 14357618
            //     },
            //     "minecraft:stronghold": {
            //       "spacing": 1,
            //       "separation": 0,
            //       "salt": 0
            //     },
            //     "minecraft:bastion_remnant": {
            //       "spacing": 30,
            //       "separation": 4,
            //       "salt": 30084232
            //     },
            //     "minecraft:desert_pyramid": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 14357617
            //     },
            //     "minecraft:nether_fossil": {
            //       "spacing": 2,
            //       "separation": 1,
            //       "salt": 14357921
            //     },
            //     "minecraft:mansion": {
            //       "spacing": 80,
            //       "separation": 20,
            //       "salt": 10387319
            //     },
            //     "minecraft:shipwreck": {
            //       "spacing": 24,
            //       "separation": 4,
            //       "salt": 165745295
            //     },
            //     "minecraft:monument": {
            //       "spacing": 32,
            //       "separation": 5,
            //       "salt": 10387313
            //     },
            //     "minecraft:swamp_hut": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 14357620
            //     },
            //     "minecraft:fortress": {
            //       "spacing": 30,
            //       "separation": 4,
            //       "salt": 30084232
            //     },
            //     "minecraft:pillager_outpost": {
            //       "spacing": 32,
            //       "separation": 8,
            //       "salt": 165745296
            //     },
            //     "minecraft:ocean_ruin": {
            //       "spacing": 20,
            //       "separation": 8,
            //       "salt": 14357621
            //     }
            //   }
            // },
            // "noise": {
            //   "island_noise_override": true,
            //   "density_factor": 0.0,
            //   "density_offset": 0.0,
            //   "simplex_surface_noise": true,
            //   "bottom_slide": {
            //     "target": -30,
            //     "size": 7,
            //     "offset": 1
            //   },
            //   "size_horizontal": 2,
            //   "size_vertical": 1,
            //   "height": 128,
            //   "sampling": {
            //     "xz_scale": 2.0,
            //     "y_scale": 1.0,
            //     "xz_factor": 80.0,
            //     "y_factor": 160.0
            //   },
            //   "top_slide": {
            //     "target": -3000,
            //     "size": 64,
            //     "offset": -46
            //   }
            // },
            // "default_block": {
            //   "Name": "minecraft:end_stone"
            // },
            // "default_fluid": {
            //   "Name": "minecraft:air"
            // }
          },
          "type": "minecraft:noise"
        },
        "type": {
          "ultrawarm": false,
          "natural": false,
          "shrunk": false,
          "ambient_light": 0.5,
          "fixed_time": 6000,
          "has_skylight": true,
          "has_ceiling": false
        }
      }
    },
    "seed": -1464245863,
    "generate_features": true
  }
}