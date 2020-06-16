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
  name?: string;
  ultrawarm: boolean;
  natural: boolean;
  shrunk: boolean;
  has_skylight: boolean;
  has_ceiling: boolean;
  ambient_light: number;
  fixed_time?: boolean | number;
  piglin_safe?: boolean;
  bed_works?: boolean;
  respawn_anchor_works?: boolean;
  has_raids?: boolean;
  logical_height?: number;
  infiniburn?: string;
  //biome_zoomer?: string;
  //ender_dragon?: boolean;
}

export interface Generator {
  seed: number;
  type: string;
  settings: string | GeneratorSettingsNoise | GeneratorSettingsFlat;
  biome_source?: BiomeSource;
}

export interface GeneratorSettingsNoise {
  bedrock_roof_position?: number;
  bedrock_floor_position?: number;
  sea_level?: number;
  disable_mob_generation?: boolean;
  structures?: Structures;
  noise?: Noise;
  default_block?: Block;
  default_fluid?: Block;
}

export interface GeneratorSettingsFlat {
  structures?: Structures;
  layers?: Layer[];
  biome?: string;
}

export interface Block {
  Name: string;
  Properties: Properties;
}

export interface Properties {
  state: string;
}

export interface Layer {
  height: number;
  block: string;
}

export interface Structures {
  structures: StructureMap;
}

export interface StructureMap {
  [name: string]: Structure;
}

export interface Structure {
  spacing: number;
  separation: number;
  salt: number;
}

export interface Noise {
  island_noise_override?: boolean;
  density_factor: number;
  density_offset: number;
  simplex_surface_noise: boolean;
  random_density_offset?: boolean;
  amplified?: boolean;
  bottom_slide: BottomSlide;
  size_horizontal: number;
  size_vertical: number;
  height: number;
  sampling: Sampling;
  top_slide: TopSlide;
}

export interface BottomSlide {
  target: number;
  size: number;
  offset: number;
}

export interface Sampling {
  xz_scale: number;
  y_scale: number;
  xz_factor: number;
  y_factor: number;
}

export interface TopSlide {
  target: number;
  size: number;
  offset: number;
}

export interface BiomeSource {
  seed: number;
  type: string;
  large_biomes?: boolean;
  preset?: string;
  biomes?: Biome[] | string[];
  biome?: string;
  scale?: number;
}

export interface Biome {
  biome: string;
  parameters: BiomeParameters;
}

export interface BiomeParameters {
  altitude: number;
  weirdness: number;
  offset: number;
  temperature: number;
  humidity: number;
}

export interface Option {
  text: string;
  value: string;
}

export function instanceOfGeneratorSettingsNoise(object: any): object is GeneratorSettingsNoise {
  return (object as GeneratorSettingsNoise).bedrock_floor_position != undefined;
}

export function instanceOfGeneratorSettingsFlat(object: any): object is GeneratorSettingsFlat {
  return (object as GeneratorSettingsFlat).biome != undefined;
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomSeed() {
  // 2^64??
  // const size = Number.MAX_SAFE_INTEGER - 1;
  const size = Math.pow(2, 32) - 1;
  return getRandomInt(-size, size);
}

export function getEmptyWorld() {
  return {
    bonus_chest: false,
    seed: getRandomSeed(),
    generate_features: true,
    dimensions: {}
  };
}

export function getDefaultWorld(): World {
  const seed = getRandomSeed();
  return {
    bonus_chest: false,
    seed: seed,
    generate_features: true,
    dimensions: {
      "minecraft:overworld": {
        type: "minecraft:overworld",
        generator: {
          biome_source: {
            seed: seed,
            large_biomes: false,
            type: "minecraft:vanilla_layered"
          },
          seed: seed,
          settings: "minecraft:overworld",
          type: "minecraft:noise"
        }
      },
      "minecraft:the_nether": {
        type: "minecraft:the_nether",
        generator: {
          biome_source: {
            seed: seed,
            preset: "minecraft:nether",
            type: "minecraft:multi_noise"
          },
          seed: seed,
          settings: "minecraft:nether",
          type: "minecraft:noise"
        },
      },
      "minecraft:the_end": {
        type: "minecraft:the_end",
        generator: {
          biome_source: {
            seed: seed,
            type: "minecraft:the_end"
          },
          seed: seed,
          settings: "minecraft:end",
          type: "minecraft:noise"
        },
      }
    }
  };
}

export function getDefaultOverworldDimension(seed: number) {
  return {
    type: "minecraft:overworld",
    generator: {
      biome_source: {
        seed: seed,
        large_biomes: false,
        type: "minecraft:vanilla_layered"
      },
      seed: seed,
      settings: "minecraft:overworld",
      type: "minecraft:noise"
    }
  };
}

export function getDefaultNetherDimension(seed: number) {
  return {
    type: "minecraft:the_nether",
    generator: {
      biome_source: {
        seed: seed,
        preset: "minecraft:nether",
        type: "minecraft:multi_noise"
      },
      seed: seed,
      settings: "minecraft:nether",
      type: "minecraft:noise"
    }
  };
}

export function getDefaultEndDimension(seed: number) {
  return {
    type: "minecraft:the_end",
    generator: {
      biome_source: {
        seed: seed,
        type: "minecraft:the_end"
      },
      seed: seed,
      settings: "minecraft:end",
      type: "minecraft:noise"
    }
  };
}

export function getDefaultDimensionType(): DimensionType {
  return {
    ultrawarm: false,
    natural: false,
    shrunk: false,
    ambient_light: 0.5,
    fixed_time: undefined,
    has_skylight: true,
    has_ceiling: false
  };
}

export function getGeneratorSettingsFlatDefault(): GeneratorSettingsFlat {
  return {
    structures: {
      structures: {}
    },
    layers: [],
    biome: 'minecraft:plains'
  }
}

export function getGeneratorSettingsNoiseDefault(): GeneratorSettingsNoise {
  return {
    bedrock_roof_position: 0,
    bedrock_floor_position: 0,
    sea_level: 30,
    disable_mob_generation: false,
    noise: {
      island_noise_override: false,
      density_factor: 1.0,
      density_offset: -0.46875,
      simplex_surface_noise: false,
      bottom_slide: {
        target: 0,
        size: 0,
        offset: 0
      },
      size_horizontal: 0,
      size_vertical: 0,
      height: 0,
      sampling: {
        xz_scale: 1,
        y_scale: 0,
        xz_factor: 0,
        y_factor: 0
      },
      top_slide: {
        target: 0,
        size: 0,
        offset: 0
      }
    },
    structures: {
      structures:
        {}
    },
    default_fluid: {
      Name: 'minecraft:water',
      Properties: {
        state: ''
      }
    },
    default_block: {
      Name: 'minecraft:air',
      Properties: {
        state: ''
      }
    },
  }
}

export function getDefaultDimension(seed: number) {
  return {
    type: getDefaultDimensionType(),
    generator: {
      type: "minecraft:noise",
      seed: seed,
      settings: getGeneratorSettingsNoiseDefault(),
      biome_source: {
        seed: seed,
        large_biomes: false,
        type: ''
      },
    }
  };
}

export function getBiome(name: string): Biome {
  return {
    parameters: {
      altitude: 0.0,
      weirdness: 0.0,
      offset: 0.0,
      temperature: 0.0,
      humidity: 0.0
    },
    biome: `minecraft:${name}`
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
                  "temperature": 0.0,
                  "humidity": 0.0
                },
                "biome": "minecraft:plains"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temperature": 0.0,
                  "humidity": -0.5
                },
                "biome": "minecraft:the_end"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temperature": 0.5,
                  "humidity": 0.0
                },
                "biome": "minecraft:mushroom_fields"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temperature": 0.0,
                  "humidity": 0.5
                },
                "biome": "minecraft:mountains"
              },
              {
                "parameters": {
                  "altitude": 0.0,
                  "weirdness": 0.0,
                  "offset": 0.0,
                  "temperature": -0.5,
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
            "structures": {
              "structures": {
                "minecraft:jungle_pyramid": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 14357619
                },
                "minecraft:endcity": {
                  "spacing": 20,
                  "separation": 11,
                  "salt": 10387313
                },
                "minecraft:village": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 10387312
                },
                "minecraft:ruined_portal": {
                  "spacing": 40,
                  "separation": 15,
                  "salt": 34222645
                },
                "minecraft:igloo": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 14357618
                },
                "minecraft:stronghold": {
                  "spacing": 1,
                  "separation": 0,
                  "salt": 0
                },
                "minecraft:bastion_remnant": {
                  "spacing": 30,
                  "separation": 4,
                  "salt": 30084232
                },
                "minecraft:desert_pyramid": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 14357617
                },
                "minecraft:nether_fossil": {
                  "spacing": 2,
                  "separation": 1,
                  "salt": 14357921
                },
                "minecraft:mansion": {
                  "spacing": 80,
                  "separation": 20,
                  "salt": 10387319
                },
                "minecraft:shipwreck": {
                  "spacing": 24,
                  "separation": 4,
                  "salt": 165745295
                },
                "minecraft:monument": {
                  "spacing": 32,
                  "separation": 5,
                  "salt": 10387313
                },
                "minecraft:swamp_hut": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 14357620
                },
                "minecraft:fortress": {
                  "spacing": 30,
                  "separation": 4,
                  "salt": 30084232
                },
                "minecraft:pillager_outpost": {
                  "spacing": 32,
                  "separation": 8,
                  "salt": 165745296
                },
                "minecraft:ocean_ruin": {
                  "spacing": 20,
                  "separation": 8,
                  "salt": 14357621
                }
              }
            },
            "noise": {
              "island_noise_override": true,
              "density_factor": 0.0,
              "density_offset": 0.0,
              "simplex_surface_noise": true,
              "bottom_slide": {
                "target": -30,
                "size": 7,
                "offset": 1
              },
              "size_horizontal": 2,
              "size_vertical": 1,
              "height": 128,
              "sampling": {
                "xz_scale": 2.0,
                "y_scale": 1.0,
                "xz_factor": 80.0,
                "y_factor": 160.0
              },
              "top_slide": {
                "target": -3000,
                "size": 64,
                "offset": -46
              }
            },
            default_block: {
              Name: "minecraft:end_stone",
              Properties: {
                state: ""
              }
            },
            default_fluid: {
              Name: "minecraft:air",
              Properties: {
                state: ""
              }
            },
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