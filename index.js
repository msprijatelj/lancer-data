"use strict"

import * as actions from './lib/actions.json' assert { type: "json" };
import * as backgrounds from './lib/backgrounds.json' assert { type: "json" };
import * as core_bonuses from './lib/core_bonuses.json' assert { type: "json" };
import * as environments from './lib/environments.json' assert { type: "json" };
import * as factions from './lib/factions.json' assert { type: "json" };
import * as frames from './lib/frames.json' assert { type: "json" };
import * as glossary from './lib/glossary.json' assert { type: "json" };
import * as info from './lib/info.json' assert { type: "json" };
import * as manufacturers from './lib/manufacturers.json' assert { type: "json" };
import * as mods from './lib/mods.json' assert { type: "json" };
import * as pilot_gear from './lib/pilot_gear.json' assert { type: "json" };
import * as reserves from './lib/reserves.json' assert { type: "json" };
import * as rules from './lib/rules.json' assert { type: "json" };
import * as sitreps from './lib/sitreps.json' assert { type: "json" };
import * as skills from './lib/skills.json' assert { type: "json" };
import * as statuses from './lib/statuses.json' assert { type: "json" };
import * as systems from './lib/systems.json' assert { type: "json" };
import * as tables from './lib/tables.json' assert { type: "json" };
import * as tags from './lib/tags.json' assert { type: "json" };
import * as talents from './lib/talents.json' assert { type: "json" };
import * as weapons from './lib/weapons.json' assert { type: "json" };

const data = {
  actions: actions,
  backgrounds: backgrounds,
  core_bonuses: core_bonuses,
  environments: environments,
  factions: factions,
  frames: frames,
  glossary: glossary,
  info: info,
  manufacturers: manufacturers,
  mods: mods,
  npc_classes: [],
  npc_features: [],
  npc_templates: [],
  pilot_gear: pilot_gear,
  reserves: reserves,
  rules: rules,
  sitreps: sitreps,
  skills: skills,
  statuses: statuses,
  systems: systems,
  tables: tables,
  tags: tags,
  talents: talents,
  weapons: weapons,
}

export default data