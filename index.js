"use strict"

import actions from './lib/actions.json' assert { type: "json" };
import backgrounds from './lib/backgrounds.json' assert { type: "json" };
import core_bonuses from './lib/core_bonuses.json' assert { type: "json" };
import environments from './lib/environments.json' assert { type: "json" };
import factions from './lib/factions.json' assert { type: "json" };
import frames from './lib/frames.json' assert { type: "json" };
import glossary from './lib/glossary.json' assert { type: "json" };
import info from './lib/info.json' assert { type: "json" };
import manufacturers from './lib/manufacturers.json' assert { type: "json" };
import mods from './lib/mods.json' assert { type: "json" };
import pilot_gear from './lib/pilot_gear.json' assert { type: "json" };
import reserves from './lib/reserves.json' assert { type: "json" };
import rules from './lib/rules.json' assert { type: "json" };
import sitreps from './lib/sitreps.json' assert { type: "json" };
import skills from './lib/skills.json' assert { type: "json" };
import statuses from './lib/statuses.json' assert { type: "json" };
import systems from './lib/systems.json' assert { type: "json" };
import tables from './lib/tables.json' assert { type: "json" };
import tags from './lib/tags.json' assert { type: "json" };
import talents from './lib/talents.json' assert { type: "json" };
import weapons from './lib/weapons.json' assert { type: "json" };

const npc_classes = [];
const npc_features = [];
const npc_templates = [];

export default {
  actions,
  backgrounds,
  core_bonuses,
  environments,
  factions,
  frames,
  glossary,
  info,
  manufacturers,
  mods,
  npc_classes,
  npc_features,
  npc_templates,
  pilot_gear,
  reserves,
  rules,
  sitreps,
  skills,
  statuses,
  systems,
  tables,
  tags,
  talents,
  weapons,
}