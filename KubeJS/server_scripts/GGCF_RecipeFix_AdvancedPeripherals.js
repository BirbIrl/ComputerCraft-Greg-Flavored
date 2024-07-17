//this removes the ability to craft turtles. comment me out if you wanna keep turtles. If so, make sure you have the "CCGFRemoveTurtlesJEI.js" script in client_scripts too!
ServerEvents.recipes(event => {
  event.remove({output: 'advancedperipherals:computer_tool'})
  event.remove({output: 'advancedperipherals:chunk_controller'})
  event.remove({output: 'advancedperipherals:colony_integrator'})
  event.remove({output: 'advancedperipherals:rs_bridge'})
  event.remove({output: 'advancedperipherals:energy_detector'})
  event.remove({output: 'advancedperipherals:block_reader'})
  event.remove({output: 'advancedperipherals:geo_scanner'})
  event.remove({output: 'advancedperipherals:peripheral_casing'})
  event.remove({output: 'advancedperipherals:husbandry_automata_core'})
  event.remove({output: 'advancedperipherals:end_automata_core'})
  event.remove({output: 'advancedperipherals:weak_automata_core'})
  event.remove({output: 'advancedperipherals:overpowered_husbandry_automata_core'})
  event.remove({output: 'advancedperipherals:overpowered_end_automata_core'})
  event.remove({output: 'advancedperipherals:overpowered_weak_automata_core'})
})

if(Platform.mods.advancedperipherals) {
//And here's the greggy recipies for all the computercraft components:
ServerEvents.recipes(event => {

  event.remove({ id: "advancedperipherals:environment_detector" });
  event.shaped("advancedperipherals:environment_detector", ["SDS", "CHC", "WCW"], {
	C: "#gtceu:circuits/mv",
	W: "computercraft:cable",
	H: "gtceu:mv_machine_hull",
  S: "gtceu:mv_sensor",
  D: "minecraft:daylight_detector"
  });

  event.remove({ id: "advancedperipherals:chat_box" });
  event.shaped("advancedperipherals:chat_box", ["EPS", "CHC", "WPW"], {
	C: "#gtceu:circuits/mv",
	W: "computercraft:cable",
	H: "gtceu:mv_machine_hull",
  S: "gtceu:mv_sensor",
  E: "gtceu:mv_emitter",
  P: "minecraft:paper"
  });

  event.remove({ id: "advancedperipherals:player_detector" });
  event.shaped("advancedperipherals:player_detector", ["BCB", "CHC", "WSW"], {
	C: "#gtceu:circuits/mv",
	W: "computercraft:cable",
	H: "gtceu:mv_machine_hull",
  S: "gtceu:mv_sensor",
  B: "minecraft:stone_button"
  });

  event.remove({ id: "advancedperipherals:redstone_integrator" });
  event.shaped("advancedperipherals:redstone_integrator", ["CRC", "RHR", "WrW"], {
	C: "#gtceu:circuits/mv",
	W: "computercraft:cable",
	H: "gtceu:mv_machine_hull",
  R: "minecraft:redstone",
  r: "minecraft:redstone_block"
  });

  event.remove({ id: "advancedperipherals:nbt_storage" });
  event.shapeless("advancedperipherals:nbt_storage", [
    "gtceu:mv_machine_hull",
    Item.of("computercraft:disk").withNBT({
      Color: NBT.intTag(1118481)
    }).weakNBT()
  ])

  event.remove({ id: "advancedperipherals:memory_card" });
  event.shaped("advancedperipherals:memory_card", ["RCR", "RER", "W W"], {
  C: "#gtceu:circuits/hv",
	R: "gtceu:ram_chip",
	W: "computercraft:cable",
  E: "gtceu:quantum_eye",
  });

  event.remove({ id: "advancedperipherals:inventory_manager" });
  event.shaped("advancedperipherals:inventory_manager", ["CEC", "EHE", "WCW"], {
	C: "#gtceu:circuits/hv",
	W: "computercraft:cable",
	H: "gtceu:hv_machine_hull",
  E: "gtceu:quantum_eye",
  });

  if(Platform.mods.ae2) {
  event.remove({ id: "advancedperipherals:me_bridge" });
  event.shaped("advancedperipherals:me_bridge", ["CDC", "DHD", "WAW"], {
	C: "#gtceu:circuits/hv",
	W: "computercraft:cable",
	H: "gtceu:hv_machine_hull",
  D: "ae2:fluix_glass_cable",
  A: "gtceu:hv_robot_arm"
  });
  }
});
}