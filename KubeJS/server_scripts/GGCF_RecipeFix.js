//this removes the ability to craft turtles. comment me out if you wanna remove turtles. If you wanna keep this, make sure you have the "CCGFRemoveTurtlesJEI.js" script in client_scripts too!
ServerEvents.recipes(event => {
  event.remove({output: 'computercraft:turtle_advanced'})
  event.remove({output: 'computercraft:turtle_normal'})
})


//And here's the greggy recipies for all the computercraft components:
ServerEvents.recipes(event => {

 event.remove({ id: "computercraft:computer_normal" });
  event.shaped("computercraft:computer_normal", ["CMC", "WHW", "CWC"], {
	C: "#gtceu:circuits/mv",
	W: "gtceu:copper_single_cable",
	M: "gtceu:computer_monitor_cover",
	H: "gtceu:mv_machine_hull",

  });

 event.remove({output: ('computercraft:computer_advanced')}) 
  event.shaped("computercraft:computer_advanced", [" h ", "ckc", " b "], {
	C: "#gtceu:circuits/hv",
	W: "gtceu:gold_single_cable",
	M: "gtceu:digital_interface_cover",
	H: "gtceu:hv_machine_hull",

  });


 event.remove({ id: "computercraft:monitor_normal" });
  event.shaped("computercraft:monitor_normal", ["WMW", "GHG", "WMW"], {
	G: "#forge:glass",
	W: "gtceu:copper_single_cable",
	M: "gtceu:computer_monitor_cover",
	H: "gtceu:mv_machine_hull",
  });

 event.remove({ id: "computercraft:monitor_advanced" });
  event.shaped("computercraft:monitor_advanced", ["WMW", "GHG", "WMW"], {
	G: "#forge:glass",
	W: "gtceu:gold_single_cable",
	M: "gtceu:digital_interface_cover",
	H: "gtceu:hv_machine_hull",
  });
 event.remove({ id: "computercraft:pocket_computer_normal" });
  event.shaped("computercraft:pocket_computer_normal", [" h ", "CKC", " B "], {
	h: "#forge:tools/hammers",
	C: "#gtceu:circuits/mv",
	K: "computercraft:computer_normal",
	B: "#gtceu:batteries/mv",
  });


 event.remove({output: ('computercraft:pocket_computer_advanced')}) 
  event.shaped("computercraft:pocket_computer_advanced", [" h ", "CKC", " B "], {
	h: "#forge:tools/hammers",
	C: "#gtceu:circuits/hv",
	K: "computercraft:computer_advanced",
	B: "#gtceu:batteries/hv",
  });

	event.remove({id: ('computercraft:speaker')}) 
  event.shaped("computercraft:speaker", ["WEW", "CHC", "WIW"], {
	W: "gtceu:copper_single_cable",
	E: "gtceu:mv_electric_motor",
	C: "#gtceu:circuits/mv",
	H: "gtceu:mv_machine_hull",
	I: "gtceu:mv_emitter",
  });
	event.remove({id: ('computercraft:disk_drive')}) 
  event.shaped("computercraft:disk_drive", ["SES", "CHC", "WVW"], {
	S: "gtceu:magnetic_steel_rod", 
	W: "gtceu:copper_single_cable",
	E: "gtceu:mv_electric_motor",
	C: "#gtceu:circuits/mv",
	H: "gtceu:mv_machine_hull",
	V: "gtceu:mv_voltage_coil",
  });

	event.remove({id: ('computercraft:printer')}) 
  event.shaped("computercraft:printer", ["EAE", "CHC", "WBW"], {
	W: "gtceu:gold_single_cable",
	E: "gtceu:hv_electric_motor",
	C: "#gtceu:circuits/hv",
	H: "gtceu:hv_machine_hull",
	A: "gtceu:hv_robot_arm",
	B: "gtceu:hv_conveyor_module"
  });

	event.remove({id: ('computercraft:wired_modem')}) 
  event.shaped('computercraft:wired_modem', [" h ", "ABC", "   "], {
	h: "#forge:tools/hammers",
	A: "#gtceu:circuits/mv",
	B: "computercraft:cable",
	C: "gtceu:aluminium_plate",
  });
event.remove({id: ('computercraft:wireless_modem_normal')}) 
  event.shaped('computercraft:wireless_modem_normal', [" w ", "ETS", "WCW"], {
	w: "#forge:tools/wire_cutters",
	E: "gtceu:hv_emitter",
	T: "computercraft:wired_modem",
	C: "#gtceu:circuits/hv",
	S: "gtceu:hv_sensor",
	W: "gtceu:gold_single_cable",
  });

event.remove({id: ('computercraft:wireless_modem_advanced')}) 
  event.shaped('computercraft:wireless_modem_advanced', ["DwD", "ETS", "WCW"], {
	w: "#forge:tools/wire_cutters",
	D: "gtceu:ender_pearl_dust",
	E: "gtceu:ev_emitter",
	T: "computercraft:wired_modem",
	C: "#gtceu:circuits/ev",
	S: "gtceu:ev_sensor",
	W: "gtceu:aluminium_single_cable",
  });


event.remove({id: ('computercraft:cable')}) 
  event.shaped('computercraft:cable', [" W ", "WwW", " W "], {
	w: "#forge:tools/wire_cutters",
	W: "gtceu:copper_single_cable",
  });

event.remove({output: ('computercraft:disk')}) 
  event.shaped(Item.of("computercraft:disk").withNBT({
      Color: 1118481,
    }), [" w ", "PIP", "   "], {
	w: "#forge:tools/wire_cutters",
	P: "gtceu:polyethylene_plate",
	I: "gtceu:invar_plate",
  });







});
