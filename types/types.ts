export type RootStackParamList = {
  Home: undefined;
  Builds: undefined;
};

export type StarterBuildItems = {
  id: number;
  qty: number;
}

export type GetAllBuildsResponse = {
  id: number;
  owner_id: number;
  username: string;
  build_title: string;
  final_build_comments: string;
  god_id: number;
  god_name: string;
  build_role: string;
  starter_build_comments: string;
  ability_level_order: number[];
  strong_against: number[];
  weak_against: number[];
  starter_build_items: StarterBuildItems[];
  relic1: number;
  relic2: number;
  final_build_items: number[];
  link_hash: string;
  created_at: string;
  edited_at: string;
}

export type AbilitiesItem = {
  description: string;
  value: string;
}



export type Abilities = {
  god_id: number;
  id: number;
  summary: string;
  image: string;
  cooldown: string;
  cost: string;
  ability_description: string;
  menuitems: AbilitiesItem[];
  rankitems: AbilitiesItem[];
}

export type BasicAttacks = {
  god_id: number;
  basic_attack_value: string;
  basic_attack_progression: string;
  basic_attack_scaling: string;
}

export type Skins = {
  god_id: number;
  skin_card: string;
  obtainability: string;
  price_favor: number;
  price_gems: number;
  skin_id1: number;
  skin_id2: number;
  skin_name1: string;
}

export type GetAllGodsResponse = {
  id: number;
  god_name: string;
  ability1: string;
  ability2: string;
  ability3: string;
  ability4: string;
  ability5: string;
  ability1_id: number;
  ability2_id: number;
  ability3_id: number;
  ability4_id: number;
  ability5_id: number;
  atk_spd: number;
  atk_spd_per_lvl: number;
  auto_banned: string;
  cons: string;
  hp5_per_lvl: number;
  health: number;
  health_per_5: number;
  health_per_lvl: number;
  lore: string;
  mp5_per_lvl: number;
  magic_prot: number;
  magic_prot_per_lvl: number;
  magical_power: number;
  magical_power_per_lvl: number;
  mana: number;
  mana_per_5: number;
  mana_per_lvl: number;
  on_free_rotation: string;
  pantheon: string;
  phys_power: number;
  phys_power_per_lvl: number;
  phys_prot: number;
  phys_prot_per_lvl: number;
  pros: string;
  role: string;
  speed: number;
  title: string;
  type: string;
  god_ability1_image: string;
  god_ability2_image: string;
  god_ability3_image: string;
  god_ability4_image: string;
  god_ability5_image: string;
  god_card_image: string;
  god_icon_image: string;
  latest_god: string;
  abilities: Abilities[];
  basic_attacks: BasicAttacks[];
  skins: Skins[];
  role_icon: string;
  panth_icon: string;
}