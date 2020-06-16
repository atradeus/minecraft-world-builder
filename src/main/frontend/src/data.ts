export interface MinecraftType {
  name: string;
  namespaceId: string;
  id?: number;
}

export function getStructures(): MinecraftType[] {
  return [
    {
      name: "Jungle pyramid",
      namespaceId: "jungle_pyramid"
    },
    {
      name: "Village",
      namespaceId: "village"
    },
    {
      name: "End City",
      namespaceId: "end_city"
    },
    {
      name: "Ruined Portal",
      namespaceId: "ruined_portal"
    },
    {
      name: "Igloo",
      namespaceId: "igloo"
    },
    {
      name: "Stronghold",
      namespaceId: "stronghold"
    },
    {
      name: "Bastion Remnant",
      namespaceId: "bastion_remnant"
    },
    {
      name: "Desert pyramid",
      namespaceId: "desert_pyramid"
    },
    {
      name: "Nether Fossil",
      namespaceId: "nether_fossil"
    },
    {
      name: "Woodland Mansion",
      namespaceId: "mansion"
    },
    {
      name: "Shipwreck",
      namespaceId: "shipwreck"
    },
    {
      name: "Ocean Monument",
      namespaceId: "monument"
    },
    {
      name: "Swamp hut",
      namespaceId: "swamp_hut"
    },
    {
      name: "Nether Fortress",
      namespaceId: "fortress"
    },
    {
      name: "Pillager Outpost",
      namespaceId: "pillager_outpost"
    },
    {
      name: "Ocean Ruins",
      namespaceId: "ocean ruin"
    }
  ]
}

export function getBiomes(): MinecraftType[] {
  return [
    {
      name: "Ocean",
      namespaceId: "ocean",
      "id": 0
    },
    {
      name: "Deep Ocean",
      namespaceId: "deep_ocean",
      "id": 24
    },
    {
      name: "Frozen Ocean",
      namespaceId: "frozen_ocean",
      "id": 10
    },
    {
      name: "Deep Frozen Ocean",
      namespaceId: "deep_frozen_ocean",
      "id": 50
    },
    {
      name: "Cold Ocean",
      namespaceId: "cold_ocean",
      "id": 46
    },
    {
      name: "Deep Cold Ocean",
      namespaceId: "deep_cold_ocean",
      "id": 49
    },
    {
      name: "Lukewarm Ocean",
      namespaceId: "lukewarm_ocean",
      "id": 45
    },
    {
      name: "Deep Lukewarm Ocean",
      namespaceId: "deep_lukewarm_ocean",
      "id": 48
    },
    {
      name: "Warm Ocean",
      namespaceId: "warm_ocean",
      "id": 44
    },
    {
      name: "Deep Warm Ocean",
      namespaceId: "deep_warm_ocean",
      "id": 47
    },
    {
      name: "River",
      namespaceId: "river",
      "id": 7
    },
    {
      name: "Frozen River",
      namespaceId: "frozen_river",
      "id": 11
    },
    {
      name: "Beach",
      namespaceId: "beach",
      "id": 16
    },
    {
      name: "Stone Shore",
      namespaceId: "stone_shore",
      "id": 25
    },
    {
      name: "Snowy Beach",
      namespaceId: "snowy_beach",
      "id": 26
    },
    {
      name: "Forest",
      namespaceId: "forest",
      "id": 4
    },
    {
      name: "Wooded Hills",
      namespaceId: "wooded_hills",
      "id": 18
    },
    {
      name: "Flower Forest",
      namespaceId: "flower_forest",
      "id": 132
    },
    {
      name: "Birch Forest",
      namespaceId: "birch_forest",
      "id": 27
    },
    {
      name: "Birch Forest Hills",
      namespaceId: "birch_forest_hills",
      "id": 28
    },
    {
      name: "Tall Birch Forest",
      namespaceId: "tall_birch_forest",
      "id": 155
    },
    {
      name: "Tall Birch Hills",
      namespaceId: "tall_birch_hills",
      "id": 156
    },
    {
      name: "Dark Forest",
      namespaceId: "dark_forest",
      "id": 29
    },
    {
      name: "Dark Forest Hills",
      namespaceId: "dark_forest_hills",
      "id": 157
    },
    {
      name: "Jungle",
      namespaceId: "jungle",
      "id": 21
    },
    {
      name: "Jungle Hills",
      namespaceId: "jungle_hills",
      "id": 22
    },
    {
      name: "Modified Jungle",
      namespaceId: "modified_jungle",
      "id": 149
    },
    {
      name: "Jungle Edge",
      namespaceId: "jungle_edge",
      "id": 23
    },
    {
      name: "Modified Jungle Edge",
      namespaceId: "modified_jungle_edge",
      "id": 151
    },
    {
      name: "Bamboo Jungle",
      namespaceId: "bamboo_jungle",
      "id": 168
    },
    {
      name: "Bamboo Jungle Hills",
      namespaceId: "bamboo_jungle_hills",
      "id": 169
    },
    {
      name: "Taiga",
      namespaceId: "taiga",
      "id": 5
    },
    {
      name: "Taiga Hills",
      namespaceId: "taiga_hills",
      "id": 19
    },
    {
      name: "Taiga Mountains",
      namespaceId: "taiga_mountains",
      "id": 133
    },
    {
      name: "Snowy Taiga",
      namespaceId: "snowy_taiga",
      "id": 30
    },
    {
      name: "Snowy Taiga Hills",
      namespaceId: "snowy_taiga_hills",
      "id": 31
    },
    {
      name: "Snowy Taiga Mountains",
      namespaceId: "snowy_taiga_mountains",
      "id": 158
    },
    {
      name: "Giant Tree Taiga",
      namespaceId: "giant_tree_taiga",
      "id": 32
    },
    {
      name: "Giant Tree Taiga Hills",
      namespaceId: "giant_tree_taiga_hills",
      "id": 33
    },
    {
      name: "Giant Spruce Taiga",
      namespaceId: "giant_spruce_taiga",
      "id": 160
    },
    {
      name: "Giant Spruce Taiga Hills",
      namespaceId: "giant_spruce_taiga_hills",
      "id": 161
    },
    {
      name: "Mushroom Fields",
      namespaceId: "mushroom_fields",
      "id": 14
    },
    {
      name: "Mushroom Field Shore",
      namespaceId: "mushroom_field_shore",
      "id": 15
    },
    {
      name: "Swamp",
      namespaceId: "swamp",
      "id": 6
    },
    {
      name: "Swamp Hills",
      namespaceId: "swamp_hills",
      "id": 134
    },
    {
      name: "Savanna",
      namespaceId: "savanna",
      "id": 35
    },
    {
      name: "Savanna Plateau",
      namespaceId: "savanna_plateau",
      "id": 36
    },
    {
      name: "Shattered Savanna",
      namespaceId: "shattered_savanna",
      "id": 163
    },
    {
      name: "Shattered Savanna Plateau",
      namespaceId: "shattered_savanna_plateau",
      "id": 164
    },
    {
      name: "Plains",
      namespaceId: "plains",
      "id": 1
    },
    {
      name: "Sunflower Plains",
      namespaceId: "sunflower_plains",
      "id": 129
    },
    {
      name: "Desert",
      namespaceId: "desert",
      "id": 2
    },
    {
      name: "Desert Hills",
      namespaceId: "desert_hills",
      "id": 17
    },
    {
      name: "Desert Lakes",
      namespaceId: "desert_lakes",
      "id": 130
    },
    {
      name: "Snowy Tundra",
      namespaceId: "snowy_tundra",
      "id": 12
    },
    {
      name: "Snowy Mountains",
      namespaceId: "snowy_mountains",
      "id": 13
    },
    {
      name: "Ice Spikes",
      namespaceId: "ice_spikes",
      "id": 140
    },
    {
      name: "Mountains",
      namespaceId: "mountains",
      "id": 3
    },
    {
      name: "Wooded Mountains",
      namespaceId: "wooded_mountains",
      "id": 34
    },
    {
      name: "Gravelly Mountains",
      namespaceId: "gravelly_mountains",
      "id": 131
    },
    {
      name: "Gravelly Mountains+",
      namespaceId: "modified_gravelly_mountains",
      "id": 162
    },
    {
      name: "Mountain Edge",
      namespaceId: "mountain_edge",
      "id": 20
    },
    {
      name: "Badlands",
      namespaceId: "badlands",
      "id": 37
    },
    {
      name: "Badlands Plateau",
      namespaceId: "badlands_plateau",
      "id": 39
    },
    {
      name: "Modified Badlands Plateau",
      namespaceId: "modified_badlands_plateau",
      "id": 167
    },
    {
      name: "Wooded Badlands Plateau",
      namespaceId: "wooded_badlands_plateau",
      "id": 38
    },
    {
      name: "Modified Wooded Badlands Plateau",
      namespaceId: "modified_wooded_badlands_plateau",
      "id": 166
    },
    {
      name: "Eroded Badlands",
      namespaceId: "eroded_badlands",
      "id": 165
    },
    {
      name: "The Nether",
      namespaceId: "nether",
      "id": 8
    },
    {
      name: "Crimson Forest",
      namespaceId: "crimson_forest",
      "id": 171
    },
    {
      name: "Warped Forest",
      namespaceId: "warped_forest",
      "id": 172
    },
    {
      name: "Soul Sand Valley",
      namespaceId: "soul_sand_valley",
      "id": 170
    },
    {
      name: "Basalt Deltas",
      namespaceId: "basalt_deltas",
      "id": 173
    },
    {
      name: "The End",
      namespaceId: "the_end",
      "id": 9
    },
    {
      name: "Small End Islands",
      namespaceId: "small_end_islands",
      "id": 40
    },
    {
      name: "End Midlands",
      namespaceId: "end_midlands",
      "id": 41
    },
    {
      name: "End Highlands",
      namespaceId: "end_highlands",
      "id": 42
    },
    {
      name: "End Barrens",
      namespaceId: "end_barrens",
      "id": 43
    },
    {
      name: "Superflat",
      namespaceId: "the_void",
      "id": 127
    }
  ];
}

export function getBlocks() {
  return [
    {
      "id": 0,
      "name": "Air",
      "namespaceId": "air"
    },
    {
      "id": 1,
      "name": "Stone",
      "namespaceId": "stone"
    },
    {
      "id": 2,
      "name": "Grass Block",
      "namespaceId": "grass_block"
    },
    {
      "id": 3,
      "name": "Dirt",
      "namespaceId": "dirt"
    },
    {
      "id": 4,
      "name": "Cobblestone",
      "namespaceId": "cobblestone"
    },
    {
      "id": 13,
      "name": "Gravel",
      "namespaceId": "gravel"
    },
    {
      "id": 14,
      "name": "Gold Ore",
      "namespaceId": "gold_ore"
    },
    {
      "id": 15,
      "name": "Iron Ore",
      "namespaceId": "iron_ore"
    },
    {
      "id": 16,
      "name": "Coal Ore",
      "namespaceId": "coal_ore"
    },
    {
      "id": 19,
      "name": "Sponge",
      "namespaceId": "sponge"
    },
    {
      "id": 20,
      "name": "Glass",
      "namespaceId": "glass"
    },
    {
      "id": 21,
      "name": "Lapis Lazuli Ore",
      "namespaceId": "lapis_ore"
    },
    {
      "id": 22,
      "name": "Lapis Lazuli Block",
      "namespaceId": "lapis_block"
    },
    {
      "id": 23,
      "name": "Dispenser",
      "namespaceId": "dispenser"
    },
    {
      "id": 24,
      "name": "Sandstone",
      "namespaceId": "sandstone"
    },
    {
      "id": 25,
      "name": "Note Block",
      "namespaceId": "note_block"
    },
    {
      "id": 27,
      "name": "Powered Rails",
      "namespaceId": "powered_rail"
    },
    {
      "id": 28,
      "name": "Detector Rails",
      "namespaceId": "detector_rail"
    },
    {
      "id": 28,
      "name": "Detector Rails",
      "namespaceId": "detector_rail"
    },
    {
      "id": 29,
      "name": "Sticky Piston",
      "namespaceId": "sticky_piston"
    },
    {
      "id": 30,
      "name": "Cobweb",
      "namespaceId": "cobweb"
    },
    {
      "id": 32,
      "name": "Dead Bush",
      "namespaceId": "dead_bush"
    },
    {
      "id": 32,
      "name": "Dead Bush",
      "namespaceId": "dead_bush"
    },
    {
      "id": 33,
      "name": "Piston",
      "namespaceId": "piston"
    },
    {
      "id": 37,
      "name": "Dandelion",
      "namespaceId": "dandelion"
    },
    {
      "id": 39,
      "name": "Mushroom (brown)",
      "namespaceId": "brown_mushroom"
    },
    {
      "id": 40,
      "name": "Mushroom (red with white spots)",
      "namespaceId": "red_mushroom"
    },
    {
      "id": 41,
      "name": "Block of Gold",
      "namespaceId": "gold_block"
    },
    {
      "id": 42,
      "name": "Block of Iron",
      "namespaceId": "iron_block"
    },
    {
      "id": 46,
      "name": "TNT",
      "namespaceId": "tnt"
    },
    {
      "id": 47,
      "name": "Bookshelf",
      "namespaceId": "bookshelf"
    },
    {
      "id": 48,
      "name": "Mossy Cobblestone",
      "namespaceId": "mossy_cobblestone"
    },
    {
      "id": 49,
      "name": "Obsidian",
      "namespaceId": "obsidian"
    },
    {
      "id": 50,
      "name": "Torch",
      "namespaceId": "torch"
    },
    {
      "id": 53,
      "name": "Oak Wood Stairs",
      "namespaceId": "oak_stairs"
    },
    {
      "id": 54,
      "name": "Chest",
      "namespaceId": "chest"
    },
    {
      "id": 56,
      "name": "Diamond Ore",
      "namespaceId": "diamond_ore"
    },
    {
      "id": 57,
      "name": "Block of Diamond",
      "namespaceId": "diamond_block"
    },
    {
      "id": 58,
      "name": "Crafting Table",
      "namespaceId": "crafting_table"
    },
    {
      "id": 60,
      "name": "Farmland",
      "namespaceId": "farmland"
    },
    {
      "id": 61,
      "name": "Furnace",
      "namespaceId": "furnace"
    },
    {
      "id": 65,
      "name": "Ladder",
      "namespaceId": "ladder"
    },
    {
      "id": 66,
      "name": "Rails",
      "namespaceId": "rail"
    },
    {
      "id": 69,
      "name": "Lever",
      "namespaceId": "lever"
    },
    {
      "id": 70,
      "name": "Stone Pressure Plate",
      "namespaceId": "stone_pressure_plate"
    },
    {
      "id": 72,
      "name": "Oak Pressure Plate",
      "namespaceId": "oak_pressure_plate"
    },
    {
      "id": 73,
      "name": "Redstone Ore",
      "namespaceId": "redstone_ore"
    },
    {
      "id": 76,
      "name": "Redstone Torch",
      "namespaceId": "redstone_torch"
    },
    {
      "id": 77,
      "name": "Stone Button",
      "namespaceId": "stone_button"
    },
    {
      "id": 79,
      "name": "Ice",
      "namespaceId": "ice"
    },
    {
      "id": 80,
      "name": "Snow Block",
      "namespaceId": "snow_block"
    },
    {
      "id": 81,
      "name": "Cactus",
      "namespaceId": "cactus"
    },
    {
      "id": 82,
      "name": "Clay Block",
      "namespaceId": "clay"
    },
    {
      "id": 84,
      "name": "Jukebox",
      "namespaceId": "jukebox"
    },
    {
      "id": 85,
      "name": "Oak Fence",
      "namespaceId": "oak_fence"
    },
    {
      "id": 86,
      "name": "Pumpkin",
      "namespaceId": "pumpkin"
    },
    {
      "id": 87,
      "name": "Netherrack",
      "namespaceId": "netherrack"
    },
    {
      "id": 88,
      "name": "Soul Sand",
      "namespaceId": "soul_sand"
    },
    {
      "id": 89,
      "name": "Glowstone",
      "namespaceId": "glowstone"
    },
    {
      "id": 91,
      "name": "Jack o'Lantern",
      "namespaceId": "jack_o_lantern"
    },
    {
      "id": 96,
      "name": "Oak Trapdoor",
      "namespaceId": "oak_trapdoor"
    },
    {
      "id": 99,
      "name": "Brown Mushroom Block",
      "namespaceId": "brown_mushroom_block"
    },
    {
      "id": 100,
      "name": "Red Mushroom Block",
      "namespaceId": "red_mushroom_block"
    },
    {
      "id": 101,
      "name": "Iron Bars",
      "namespaceId": "iron_bars"
    },
    {
      "id": 102,
      "name": "Glass Pane",
      "namespaceId": "glass_pane"
    },
    {
      "id": 103,
      "name": "Block of Melon",
      "namespaceId": "melon"
    },
    {
      "id": 106,
      "name": "Vines",
      "namespaceId": "vine"
    },
    {
      "id": 107,
      "name": "Oak Fence Gate",
      "namespaceId": "oak_fence_gate"
    },
    {
      "id": 108,
      "name": "Brick Stairs",
      "namespaceId": "brick_stairs"
    },
    {
      "id": 109,
      "name": "Stone Brick Stairs",
      "namespaceId": "stone_brick_stairs"
    },
    {
      "id": 110,
      "name": "Mycelium",
      "namespaceId": "mycelium"
    },
    {
      "id": 111,
      "name": "Lily Pad",
      "namespaceId": "lily_pad"
    },
    {
      "id": 112,
      "name": "Block of Nether Brick",
      "namespaceId": "nether_bricks"
    },
    {
      "id": 113,
      "name": "Nether Brick Fence",
      "namespaceId": "nether_brick_fence"
    },
    {
      "id": 114,
      "name": "Nether Brick Stairs",
      "namespaceId": "nether_brick_stairs"
    },
    {
      "id": 116,
      "name": "Enchanting Table",
      "namespaceId": "enchanting_table"
    },
    {
      "id": 120,
      "name": "End Portal Frame",
      "namespaceId": "end_portal_frame"
    },
    {
      "id": 121,
      "name": "End Stone",
      "namespaceId": "end_stone"
    },
    {
      "id": 122,
      "name": "Dragon Egg",
      "namespaceId": "dragon_egg"
    },
    {
      "id": 123,
      "name": "Redstone Lamp",
      "namespaceId": "redstone_lamp"
    },
    {
      "id": 128,
      "name": "Sandstone Stairs",
      "namespaceId": "sandstone_stairs"
    },
    {
      "id": 129,
      "name": "Emerald Ore",
      "namespaceId": "emerald_ore"
    },
    {
      "id": 130,
      "name": "Ender Chest",
      "namespaceId": "ender_chest"
    },
    {
      "id": 131,
      "name": "Tripwire Hook",
      "namespaceId": "tripwire_hook"
    },
    {
      "id": 133,
      "name": "Block of Emerald",
      "namespaceId": "emerald_block"
    },
    {
      "id": 134,
      "name": "Spruce Wood Stairs",
      "namespaceId": "spruce_stairs"
    },
    {
      "id": 135,
      "name": "Birch Wood Stairs",
      "namespaceId": "birch_stairs"
    },
    {
      "id": 136,
      "name": "Jungle Wood Stairs",
      "namespaceId": "jungle_stairs"
    },
    {
      "id": 137,
      "name": "Command Block",
      "namespaceId": "command_block"
    },
    {
      "id": 138,
      "name": "Beacon",
      "namespaceId": "beacon"
    },
    {
      "id": 139,
      "name": "Cobblestone Wall",
      "namespaceId": "cobblestone_wall"
    },
    {
      "id": 143,
      "name": "Oak Button",
      "namespaceId": "oak_button"
    },
    {
      "id": 145,
      "name": "Anvil",
      "namespaceId": "anvil"
    },
    {
      "id": 145,
      "name": "Slightly Damaged Anvil",
      "namespaceId": "chipped_anvil"
    },
    {
      "id": 145,
      "name": "Very Damaged Anvil",
      "namespaceId": "damaged_anvil"
    },
    {
      "id": 146,
      "name": "Trapped Chest",
      "namespaceId": "trapped_chest"
    },
    {
      "id": 147,
      "name": "Light Weighted Pressure Plate",
      "namespaceId": "light_weighted_pressure_plate"
    },
    {
      "id": 148,
      "name": "Heavy Weighted Pressure Plate",
      "namespaceId": "heavy_weighted_pressure_plate"
    },
    {
      "id": 151,
      "name": "Daylight Sensor",
      "namespaceId": "daylight_detector"
    },
    {
      "id": 152,
      "name": "Block of Redstone",
      "namespaceId": "redstone_block"
    },
    {
      "id": 153,
      "name": "Nether Quartz Ore",
      "namespaceId": "nether_quartz_ore"
    },
    {
      "id": 154,
      "name": "Hopper",
      "namespaceId": "hopper"
    },
    {
      "id": 155,
      "name": "Block of Quartz",
      "namespaceId": "quartz_block"
    },
    {
      "id": 156,
      "name": "Quartz Stairs",
      "namespaceId": "quartz_stairs"
    },
    {
      "id": 157,
      "name": "Activator Rails",
      "namespaceId": "activator_rail"
    },
    {
      "id": 158,
      "name": "Dropper",
      "namespaceId": "dropper"
    },
    {
      "id": 163,
      "name": "Acacia Wood Stairs",
      "namespaceId": "acacia_stairs"
    },
    {
      "id": 164,
      "name": "Dark Oak Wood Stairs",
      "namespaceId": "dark_oak_stairs"
    },
    {
      "id": 165,
      "name": "Slime Block",
      "namespaceId": "slime_block"
    },
    {
      "id": 166,
      "name": "Barrier",
      "namespaceId": "barrier"
    },
    {
      "id": 167,
      "name": "Iron Trapdoor",
      "namespaceId": "iron_trapdoor"
    },
    {
      "id": 168,
      "name": "Prismarine",
      "namespaceId": "prismarine"
    },
    {
      "id": 169,
      "name": "Sea Lantern",
      "namespaceId": "sea_lantern"
    },
    {
      "id": 170,
      "name": "Hay Bale",
      "namespaceId": "hay_block"
    },
    {
      "id": 172,
      "name": "Terracotta",
      "namespaceId": "terracotta"
    },
    {
      "id": 173,
      "name": "Coal Block",
      "namespaceId": "coal_block"
    },
    {
      "id": 174,
      "name": "Packed Ice",
      "namespaceId": "packed_ice"
    },
    {
      "id": 179,
      "name": "Red Sandstone",
      "namespaceId": "red_sandstone"
    },
    {
      "id": 180,
      "name": "Red Sandstone Stairs",
      "namespaceId": "red_sandstone_stairs"
    },
    {
      "id": 183,
      "name": "Spruce Fence Gate",
      "namespaceId": "spruce_fence_gate"
    },
    {
      "id": 184,
      "name": "Birch Fence Gate",
      "namespaceId": "birch_fence_gate"
    },
    {
      "id": 185,
      "name": "Jungle Fence Gate",
      "namespaceId": "jungle_fence_gate"
    },
    {
      "id": 186,
      "name": "Dark Oak Fence Gate",
      "namespaceId": "dark_oak_fence_gate"
    },
    {
      "id": 187,
      "name": "Acacia Fence Gate",
      "namespaceId": "acacia_fence_gate"
    },
    {
      "id": 188,
      "name": "Spruce Fence",
      "namespaceId": "spruce_fence"
    },
    {
      "id": 189,
      "name": "Birch Fence",
      "namespaceId": "birch_fence"
    },
    {
      "id": 190,
      "name": "Jungle Fence",
      "namespaceId": "jungle_fence"
    },
    {
      "id": 191,
      "name": "Dark Oak Fence",
      "namespaceId": "dark_oak_fence"
    },
    {
      "id": 192,
      "name": "Acacia Fence",
      "namespaceId": "acacia_fence"
    },
    {
      "id": 198,
      "name": "End Rod",
      "namespaceId": "end_rod"
    },
    {
      "id": 199,
      "name": "Chorus Plant",
      "namespaceId": "chorus_plant"
    },
    {
      "id": 200,
      "name": "Chorus Flower",
      "namespaceId": "chorus_flower"
    },
    {
      "id": 201,
      "name": "Purpur Block",
      "namespaceId": "purpur_block"
    },
    {
      "id": 202,
      "name": "Purpur Pillar",
      "namespaceId": "purpur_pillar"
    },
    {
      "id": 203,
      "name": "Purpur Stairs",
      "namespaceId": "purpur_stairs"
    },
    {
      "id": 205,
      "name": "Purpur Slab",
      "namespaceId": "purpur_slab"
    },
    {
      "id": 206,
      "name": "End Stone Bricks",
      "namespaceId": "end_stone_bricks"
    },
    {
      "id": 208,
      "name": "Grass Path",
      "namespaceId": "grass_path"
    },
    {
      "id": 210,
      "name": "Repeating Command Block",
      "namespaceId": "repeating_command_block"
    },
    {
      "id": 211,
      "name": "Chain Command Block",
      "namespaceId": "chain_command_block"
    },
    {
      "id": 213,
      "name": "Magma Block",
      "namespaceId": "magma_block"
    },
    {
      "id": 214,
      "name": "Nether Wart Block",
      "namespaceId": "nether_wart_block"
    },
    {
      "id": 215,
      "name": "Red Nether Brick",
      "namespaceId": "red_nether_bricks"
    },
    {
      "id": 216,
      "name": "Bone Block",
      "namespaceId": "bone_block"
    },
    {
      "id": 217,
      "name": "Structure Void",
      "namespaceId": "structure_void"
    },
    {
      "id": 218,
      "name": "Observer",
      "namespaceId": "observer"
    },
    {
      "id": 219,
      "name": "White Shulker Box",
      "namespaceId": "white_shulker_box"
    },
    {
      "id": 220,
      "name": "Orange Shulker Box",
      "namespaceId": "orange_shulker_box"
    },
    {
      "id": 221,
      "name": "Magenta Shulker Box",
      "namespaceId": "magenta_shulker_box"
    },
    {
      "id": 222,
      "name": "Light Blue Shulker Box",
      "namespaceId": "light_blue_shulker_box"
    },
    {
      "id": 223,
      "name": "Yellow Shulker Box",
      "namespaceId": "yellow_shulker_box"
    },
    {
      "id": 224,
      "name": "Lime Shulker Box",
      "namespaceId": "lime_shulker_box"
    },
    {
      "id": 225,
      "name": "Pink Shulker Box",
      "namespaceId": "pink_shulker_box"
    },
    {
      "id": 226,
      "name": "Gray Shulker Box",
      "namespaceId": "gray_shulker_box"
    },
    {
      "id": 228,
      "name": "Cyan Shulker Box",
      "namespaceId": "cyan_shulker_box"
    },
    {
      "id": 229,
      "name": "Purple Shulker Box",
      "namespaceId": "purple_shulker_box"
    },
    {
      "id": 230,
      "name": "Blue Shulker Box",
      "namespaceId": "blue_shulker_box"
    },
    {
      "id": 231,
      "name": "Brown Shulker Box",
      "namespaceId": "brown_shulker_box"
    },
    {
      "id": 232,
      "name": "Green Shulker Box",
      "namespaceId": "green_shulker_box"
    },
    {
      "id": 233,
      "name": "Red Shulker Box",
      "namespaceId": "red_shulker_box"
    },
    {
      "id": 234,
      "name": "Black Shulker Box",
      "namespaceId": "black_shulker_box"
    },
    {
      "id": 235,
      "name": "White Glazed Terracotta",
      "namespaceId": "white_glazed_terracotta"
    },
    {
      "id": 236,
      "name": "Orange Glazed Terracotta",
      "namespaceId": "orange_glazed_terracotta"
    },
    {
      "id": 237,
      "name": "Magenta Glazed Terracotta",
      "namespaceId": "magenta_glazed_terracotta"
    },
    {
      "id": 238,
      "name": "Light Blue Glazed Terracotta",
      "namespaceId": "light_blue_glazed_terracotta"
    },
    {
      "id": 239,
      "name": "Yellow Glazed Terracotta",
      "namespaceId": "yellow_glazed_terracotta"
    },
    {
      "id": 240,
      "name": "Lime Glazed Terracotta",
      "namespaceId": "lime_glazed_terracotta"
    },
    {
      "id": 241,
      "name": "Pink Glazed Terracotta",
      "namespaceId": "pink_glazed_terracotta"
    },
    {
      "id": 242,
      "name": "Gray Glazed Terracotta",
      "namespaceId": "gray_glazed_terracotta"
    },
    {
      "id": 244,
      "name": "Cyan Glazed Terracotta",
      "namespaceId": "cyan_glazed_terracotta"
    },
    {
      "id": 245,
      "name": "Purple Glazed Terracotta",
      "namespaceId": "purple_glazed_terracotta"
    },
    {
      "id": 246,
      "name": "Blue Glazed Terracotta",
      "namespaceId": "blue_glazed_terracotta"
    },
    {
      "id": 247,
      "name": "Brown Glazed Terracotta",
      "namespaceId": "brown_glazed_terracotta"
    },
    {
      "id": 248,
      "name": "Green Glazed Terracotta",
      "namespaceId": "green_glazed_terracotta"
    },
    {
      "id": 249,
      "name": "Red Glazed Terracotta",
      "namespaceId": "red_glazed_terracotta"
    },
    {
      "id": 250,
      "name": "Black Glazed Terracotta",
      "namespaceId": "black_glazed_terracotta"
    },
    {
      "id": 255,
      "name": "Structure Block",
      "namespaceId": "structure_block"
    },
    {
      "id": 256,
      "name": "Iron Shovel",
      "namespaceId": "iron_shovel"
    },
    {
      "id": 257,
      "name": "Iron Pickaxe",
      "namespaceId": "iron_pickaxe"
    },
    {
      "id": 258,
      "name": "Iron Axe",
      "namespaceId": "iron_axe"
    },
    {
      "id": 259,
      "name": "Flint and Steel",
      "namespaceId": "flint_and_steel"
    },
    {
      "id": 260,
      "name": "Apple",
      "namespaceId": "apple"
    },
    {
      "id": 261,
      "name": "Bow",
      "namespaceId": "bow"
    },
    {
      "id": 263,
      "name": "Coal",
      "namespaceId": "coal"
    },
    {
      "id": 264,
      "name": "Diamond",
      "namespaceId": "diamond"
    },
    {
      "id": 265,
      "name": "Iron Ingot",
      "namespaceId": "iron_ingot"
    },
    {
      "id": 266,
      "name": "Gold Ingot",
      "namespaceId": "gold_ingot"
    },
    {
      "id": 267,
      "name": "Iron Sword",
      "namespaceId": "iron_sword"
    },
    {
      "id": 268,
      "name": "Wooden Sword",
      "namespaceId": "wooden_sword"
    },
    {
      "id": 269,
      "name": "Wooden Shovel",
      "namespaceId": "wooden_shovel"
    },
    {
      "id": 270,
      "name": "Wooden Pickaxe",
      "namespaceId": "wooden_pickaxe"
    },
    {
      "id": 271,
      "name": "Wooden Axe",
      "namespaceId": "wooden_axe"
    },
    {
      "id": 272,
      "name": "Stone Sword",
      "namespaceId": "stone_sword"
    },
    {
      "id": 273,
      "name": "Stone Shovel",
      "namespaceId": "stone_shovel"
    },
    {
      "id": 274,
      "name": "Stone Pickaxe",
      "namespaceId": "stone_pickaxe"
    },
    {
      "id": 275,
      "name": "Stone Axe",
      "namespaceId": "stone_axe"
    },
    {
      "id": 276,
      "name": "Diamond Sword",
      "namespaceId": "diamond_sword"
    },
    {
      "id": 277,
      "name": "Diamond Shovel",
      "namespaceId": "diamond_shovel"
    },
    {
      "id": 278,
      "name": "Diamond Pickaxe",
      "namespaceId": "diamond_pickaxe"
    },
    {
      "id": 279,
      "name": "Diamond Axe",
      "namespaceId": "diamond_axe"
    },
    {
      "id": 280,
      "name": "Stick",
      "namespaceId": "stick"
    },
    {
      "id": 281,
      "name": "Bowl",
      "namespaceId": "bowl"
    },
    {
      "id": 282,
      "name": "Mushroom Stew",
      "namespaceId": "mushroom_stew"
    },
    {
      "id": 283,
      "name": "Golden Sword",
      "namespaceId": "golden_sword"
    },
    {
      "id": 284,
      "name": "Golden Shovel",
      "namespaceId": "golden_shovel"
    },
    {
      "id": 285,
      "name": "Golden Pickaxe",
      "namespaceId": "golden_pickaxe"
    },
    {
      "id": 286,
      "name": "Golden Axe",
      "namespaceId": "golden_axe"
    },
    {
      "id": 287,
      "name": "String",
      "namespaceId": "string"
    },
    {
      "id": 288,
      "name": "Feather",
      "namespaceId": "feather"
    },
    {
      "id": 289,
      "name": "Gunpowder",
      "namespaceId": "gunpowder"
    },
    {
      "id": 290,
      "name": "Wooden Hoe",
      "namespaceId": "wooden_hoe"
    },
    {
      "id": 291,
      "name": "Stone Hoe",
      "namespaceId": "stone_hoe"
    },
    {
      "id": 292,
      "name": "Iron Hoe",
      "namespaceId": "iron_hoe"
    },
    {
      "id": 293,
      "name": "Diamond Hoe",
      "namespaceId": "diamond_hoe"
    },
    {
      "id": 294,
      "name": "Golden Hoe",
      "namespaceId": "golden_hoe"
    },
    {
      "id": 295,
      "name": "Seeds",
      "namespaceId": "wheat_seeds"
    },
    {
      "id": 296,
      "name": "Wheat",
      "namespaceId": "wheat"
    },
    {
      "id": 297,
      "name": "Bread",
      "namespaceId": "bread"
    },
    {
      "id": 298,
      "name": "Leather Cap",
      "namespaceId": "leather_helmet"
    },
    {
      "id": 299,
      "name": "Leather Tunic",
      "namespaceId": "leather_chestplate"
    },
    {
      "id": 300,
      "name": "Leather Pants",
      "namespaceId": "leather_leggings"
    },
    {
      "id": 301,
      "name": "Leather Boots",
      "namespaceId": "leather_boots"
    },
    {
      "id": 302,
      "name": "Chain Helmet",
      "namespaceId": "chainmail_helmet"
    },
    {
      "id": 303,
      "name": "Chain Chestplate",
      "namespaceId": "chainmail_chestplate"
    },
    {
      "id": 304,
      "name": "Chain Leggings",
      "namespaceId": "chainmail_leggings"
    },
    {
      "id": 305,
      "name": "Chain Boots",
      "namespaceId": "chainmail_boots"
    },
    {
      "id": 306,
      "name": "Iron Helmet",
      "namespaceId": "iron_helmet"
    },
    {
      "id": 307,
      "name": "Iron Chestplate",
      "namespaceId": "iron_chestplate"
    },
    {
      "id": 308,
      "name": "Iron Leggings",
      "namespaceId": "iron_leggings"
    },
    {
      "id": 309,
      "name": "Iron Boots",
      "namespaceId": "iron_boots"
    },
    {
      "id": 310,
      "name": "Diamond Helmet",
      "namespaceId": "diamond_helmet"
    },
    {
      "id": 311,
      "name": "Diamond Chestplate",
      "namespaceId": "diamond_chestplate"
    },
    {
      "id": 312,
      "name": "Diamond Leggings",
      "namespaceId": "diamond_leggings"
    },
    {
      "id": 313,
      "name": "Diamond Boots",
      "namespaceId": "diamond_boots"
    },
    {
      "id": 314,
      "name": "Golden Helmet",
      "namespaceId": "golden_helmet"
    },
    {
      "id": 315,
      "name": "Golden Chestplate",
      "namespaceId": "golden_chestplate"
    },
    {
      "id": 316,
      "name": "Golden Leggings",
      "namespaceId": "golden_leggings"
    },
    {
      "id": 317,
      "name": "Golden Boots",
      "namespaceId": "golden_boots"
    },
    {
      "id": 318,
      "name": "Flint",
      "namespaceId": "flint"
    },
    {
      "id": 319,
      "name": "Raw Porkchop",
      "namespaceId": "porkchop"
    },
    {
      "id": 320,
      "name": "Cooked Porkchop",
      "namespaceId": "cooked_porkchop"
    },
    {
      "id": 321,
      "name": "Painting",
      "namespaceId": "painting"
    },
    {
      "id": 322,
      "name": "Golden Apple",
      "namespaceId": "golden_apple"
    },
    {
      "id": 323,
      "name": "Oak Sign",
      "namespaceId": "oak_sign"
    },
    {
      "id": 324,
      "name": "Oak Door",
      "namespaceId": "oak_door"
    },
    {
      "id": 325,
      "name": "Bucket",
      "namespaceId": "bucket"
    },
    {
      "id": 326,
      "name": "Water Bucket",
      "namespaceId": "water_bucket"
    },
    {
      "id": 327,
      "name": "Lava Bucket",
      "namespaceId": "lava_bucket"
    },
    {
      "id": 328,
      "name": "Minecart",
      "namespaceId": "minecart"
    },
    {
      "id": 329,
      "name": "Saddle",
      "namespaceId": "saddle"
    },
    {
      "id": 330,
      "name": "Iron Door",
      "namespaceId": "iron_door"
    },
    {
      "id": 331,
      "name": "Redstone Dust",
      "namespaceId": "redstone"
    },
    {
      "id": 332,
      "name": "Snowball",
      "namespaceId": "snowball"
    },
    {
      "id": 333,
      "name": "Oak Boat",
      "namespaceId": "oak_boat"
    },
    {
      "id": 334,
      "name": "Leather",
      "namespaceId": "leather"
    },
    {
      "id": 335,
      "name": "Milk",
      "namespaceId": "milk_bucket"
    },
    {
      "id": 336,
      "name": "Brick",
      "namespaceId": "brick"
    },
    {
      "id": 337,
      "name": "Clay",
      "namespaceId": "clay_ball"
    },
    {
      "id": 338,
      "name": "Sugar Canes",
      "namespaceId": "sugar_cane"
    },
    {
      "id": 339,
      "name": "Paper",
      "namespaceId": "paper"
    },
    {
      "id": 340,
      "name": "Book",
      "namespaceId": "book"
    },
    {
      "id": 341,
      "name": "Slimeball",
      "namespaceId": "slime_ball"
    },
    {
      "id": 342,
      "name": "Minecart with Chest",
      "namespaceId": "chest_minecart"
    },
    {
      "id": 343,
      "name": "Minecart with Furnace",
      "namespaceId": "furnace_minecart"
    },
    {
      "id": 344,
      "name": "Egg",
      "namespaceId": "egg"
    },
    {
      "id": 345,
      "name": "Compass",
      "namespaceId": "compass"
    },
    {
      "id": 346,
      "name": "Fishing Rod",
      "namespaceId": "fishing_rod"
    },
    {
      "id": 346,
      "name": "Fishing Rod",
      "namespaceId": "fishing_rod"
    },
    {
      "id": 347,
      "name": "Clock",
      "namespaceId": "clock"
    },
    {
      "id": 348,
      "name": "Glowstone Dust",
      "namespaceId": "glowstone_dust"
    },
    {
      "id": 352,
      "name": "Bone",
      "namespaceId": "bone"
    },
    {
      "id": 353,
      "name": "Sugar",
      "namespaceId": "sugar"
    },
    {
      "id": 354,
      "name": "Cake",
      "namespaceId": "cake"
    },
    {
      "id": 356,
      "name": "Redstone Repeater",
      "namespaceId": "repeater"
    },
    {
      "id": 357,
      "name": "Cookie",
      "namespaceId": "cookie"
    },
    {
      "id": 359,
      "name": "Shears",
      "namespaceId": "shears"
    },
    {
      "id": 360,
      "name": "Melon Slice",
      "namespaceId": "melon_slice"
    },
    {
      "id": 361,
      "name": "Pumpkin Seeds",
      "namespaceId": "pumpkin_seeds"
    },
    {
      "id": 362,
      "name": "Melon Seeds",
      "namespaceId": "melon_seeds"
    },
    {
      "id": 363,
      "name": "Raw Beef",
      "namespaceId": "beef"
    },
    {
      "id": 364,
      "name": "Steak",
      "namespaceId": "cooked_beef"
    },
    {
      "id": 365,
      "name": "Raw Chicken",
      "namespaceId": "chicken"
    },
    {
      "id": 366,
      "name": "Cooked Chicken",
      "namespaceId": "cooked_chicken"
    },
    {
      "id": 367,
      "name": "Rotten Flesh",
      "namespaceId": "rotten_flesh"
    },
    {
      "id": 368,
      "name": "Ender Pearl",
      "namespaceId": "ender_pearl"
    },
    {
      "id": 369,
      "name": "Blaze Rod",
      "namespaceId": "blaze_rod"
    },
    {
      "id": 370,
      "name": "Ghast Tear",
      "namespaceId": "ghast_tear"
    },
    {
      "id": 371,
      "name": "Gold Nugget",
      "namespaceId": "gold_nugget"
    },
    {
      "id": 372,
      "name": "Nether Wart",
      "namespaceId": "nether_wart"
    },
    {
      "id": 374,
      "name": "Glass Bottle",
      "namespaceId": "glass_bottle"
    },
    {
      "id": 375,
      "name": "Spider Eye",
      "namespaceId": "spider_eye"
    },
    {
      "id": 376,
      "name": "Fermented Spider Eye",
      "namespaceId": "fermented_spider_eye"
    },
    {
      "id": 377,
      "name": "Blaze Powder",
      "namespaceId": "blaze_powder"
    },
    {
      "id": 378,
      "name": "Magma Cream",
      "namespaceId": "magma_cream"
    },
    {
      "id": 379,
      "name": "Brewing Stand",
      "namespaceId": "brewing_stand"
    },
    {
      "id": 380,
      "name": "Cauldron",
      "namespaceId": "cauldron"
    },
    {
      "id": 381,
      "name": "Eye of Ender",
      "namespaceId": "ender_eye"
    },
    {
      "id": 382,
      "name": "Glistering Melon",
      "namespaceId": "glistering_melon_slice"
    },
    {
      "id": 384,
      "name": "Bottle o'Enchanting",
      "namespaceId": "experience_bottle"
    },
    {
      "id": 385,
      "name": "Fire Charge",
      "namespaceId": "fire_charge"
    },
    {
      "id": 385,
      "name": "Fire Charge",
      "namespaceId": "fire_charge"
    },
    {
      "id": 386,
      "name": "Book and Quill",
      "namespaceId": "writable_book"
    },
    {
      "id": 387,
      "name": "Written Book",
      "namespaceId": "written_book"
    },
    {
      "id": 388,
      "name": "Emerald",
      "namespaceId": "emerald"
    },
    {
      "id": 389,
      "name": "Item Frame",
      "namespaceId": "item_frame"
    },
    {
      "id": 390,
      "name": "Flower Pot",
      "namespaceId": "flower_pot"
    },
    {
      "id": 391,
      "name": "Carrot",
      "namespaceId": "carrot"
    },
    {
      "id": 392,
      "name": "Potato",
      "namespaceId": "potato"
    },
    {
      "id": 393,
      "name": "Baked Potato",
      "namespaceId": "baked_potato"
    },
    {
      "id": 394,
      "name": "Poisonous Potato",
      "namespaceId": "poisonous_potato"
    },
    {
      "id": 395,
      "name": "Map",
      "namespaceId": "map"
    },
    {
      "id": 396,
      "name": "Golden Carrot",
      "namespaceId": "golden_carrot"
    },
    {
      "id": 398,
      "name": "Carrot on a Stick",
      "namespaceId": "carrot_on_a_stick"
    },
    {
      "id": 399,
      "name": "Nether Star",
      "namespaceId": "nether_star"
    },
    {
      "id": 400,
      "name": "Pumpkin Pie",
      "namespaceId": "pumpkin_pie"
    },
    {
      "id": 401,
      "name": "Firework Rocket",
      "namespaceId": "firework_rocket"
    },
    {
      "id": 403,
      "name": "Enchanted Book",
      "namespaceId": "enchanted_book"
    },
    {
      "id": 404,
      "name": "Redstone Comparator",
      "namespaceId": "comparator"
    },
    {
      "id": 405,
      "name": "Nether Brick",
      "namespaceId": "nether_brick"
    },
    {
      "id": 406,
      "name": "Nether Quartz",
      "namespaceId": "quartz"
    },
    {
      "id": 407,
      "name": "Minecart with TNT",
      "namespaceId": "tnt_minecart"
    },
    {
      "id": 408,
      "name": "Minecart with Hopper",
      "namespaceId": "hopper_minecart"
    },
    {
      "id": 409,
      "name": "Prismarine Shard",
      "namespaceId": "prismarine_shard"
    },
    {
      "id": 410,
      "name": "Prismarine Crystals",
      "namespaceId": "prismarine_crystals"
    },
    {
      "id": 411,
      "name": "Raw Rabbit",
      "namespaceId": "rabbit"
    },
    {
      "id": 412,
      "name": "Cooked Rabbit",
      "namespaceId": "cooked_rabbit"
    },
    {
      "id": 413,
      "name": "Rabbit Stew",
      "namespaceId": "rabbit_stew"
    },
    {
      "id": 414,
      "name": "Rabbit's Foot",
      "namespaceId": "rabbit_foot"
    },
    {
      "id": 415,
      "name": "Rabbit Hide",
      "namespaceId": "rabbit_hide"
    },
    {
      "id": 416,
      "name": "Armor Stand",
      "namespaceId": "armor_stand"
    },
    {
      "id": 417,
      "name": "Iron Horse Armor",
      "namespaceId": "iron_horse_armor"
    },
    {
      "id": 418,
      "name": "Gold Horse Armor",
      "namespaceId": "golden_horse_armor"
    },
    {
      "id": 419,
      "name": "Diamond Horse Armor",
      "namespaceId": "diamond_horse_armor"
    },
    {
      "id": 420,
      "name": "Lead",
      "namespaceId": "lead"
    },
    {
      "id": 421,
      "name": "Name Tag",
      "namespaceId": "name_tag"
    },
    {
      "id": 422,
      "name": "Minecart with Command Block",
      "namespaceId": "command_block_minecart"
    },
    {
      "id": 423,
      "name": "Raw Mutton",
      "namespaceId": "mutton"
    },
    {
      "id": 424,
      "name": "Cooked Mutton",
      "namespaceId": "cooked_mutton"
    },
    {
      "id": 426,
      "name": "End Crystal",
      "namespaceId": "end_crystal"
    },
    {
      "id": 427,
      "name": "Spruce Door",
      "namespaceId": "spruce_door"
    },
    {
      "id": 428,
      "name": "Birch Door",
      "namespaceId": "birch_door"
    },
    {
      "id": 429,
      "name": "Jungle Door",
      "namespaceId": "jungle_door"
    },
    {
      "id": 430,
      "name": "Acacia Door",
      "namespaceId": "acacia_door"
    },
    {
      "id": 431,
      "name": "Dark Oak Door",
      "namespaceId": "dark_oak_door"
    },
    {
      "id": 432,
      "name": "Chorus Fruit",
      "namespaceId": "chorus_fruit"
    },
    {
      "id": 434,
      "name": "Beetroot",
      "namespaceId": "beetroot"
    },
    {
      "id": 435,
      "name": "Beetroot Seeds",
      "namespaceId": "beetroot_seeds"
    },
    {
      "id": 436,
      "name": "Beetroot Soup",
      "namespaceId": "beetroot_soup"
    },
    {
      "id": 437,
      "name": "Dragon's Breath",
      "namespaceId": "dragon_breath"
    },
    {
      "id": 442,
      "name": "Shield",
      "namespaceId": "shield"
    },
    {
      "id": 443,
      "name": "Elytra",
      "namespaceId": "elytra"
    },
    {
      "id": 444,
      "name": "Spruce Boat",
      "namespaceId": "spruce_boat"
    },
    {
      "id": 445,
      "name": "Birch Boat",
      "namespaceId": "birch_boat"
    },
    {
      "id": 446,
      "name": "Jungle Boat",
      "namespaceId": "jungle_boat"
    },
    {
      "id": 447,
      "name": "Acacia Boat",
      "namespaceId": "acacia_boat"
    },
    {
      "id": 447,
      "name": "Acacia Boat",
      "namespaceId": "acacia_boat"
    },
    {
      "id": 448,
      "name": "Dark Oak Boat",
      "namespaceId": "dark_oak_boat"
    },
    {
      "id": 449,
      "name": "Totem of Undying",
      "namespaceId": "totem_of_undying"
    },
    {
      "id": 450,
      "name": "Shulker Shell",
      "namespaceId": "shulker_shell"
    },
    {
      "id": 452,
      "name": "Iron Nugget",
      "namespaceId": "iron_nugget"
    },
    {
      "id": 466,
      "name": "Enchanted Golden Apple",
      "namespaceId": "enchanted_golden_apple"
    }
  ]
}
