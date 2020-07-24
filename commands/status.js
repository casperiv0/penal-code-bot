const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  try {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle("10 Codes, Status")
      .addField(
        "**Service Status**",
        `
      **10-5:** Meal Break
      **10-7:** Out of Service,
      **10-8:** In service			  		
**10-12:** Active ride along
**10-23:** Arrived on scene
**10-41:** beginning tour of duty
**10-42:** Ending tour of duty
**10-65:** Escorting Prisoner
**10-93:** Removed from game
**10-97:** In route			 		
**Code 0:** Game crash
**Code 1:** No Lights nor sirens	 		
**Code 2:** Lights, no sirens
**Code 3:** Lights and Sirens
**Signal 11:** Running Radar	 		
**Signal 41:** 10-41 | 10-8 
`
      )
      .addField(
        "**Scenes:**",
        `
    **10-10:** Fights in Progress
    **10-11:** Traffic Stop		
    **10-13:** Shots Fired				
    **10-16:** Stolen Vehicle
    **10-17:** Suspicious Vehic
    **10-25:** Domestic Dispute	
    **10-49:** Homicide			
    **10-50:** Vehicle Acciden
    **10-62:** kidnapping 			
    **10-64:** Sexual assault
    **10-66:** Reckless Driver				
    **10-67:** Fire	
    **10-68:** Armed Robbery				
    **10-70:** Foot Pursuit		
    **10-80:** Vehicle Pursuit 				
    **10-99:** Officer in distre
    **Code 5:** Felony Stop				
    **Signal 60:** Drugs
                    `
      )
      .addField(
        "**Radio Comms:**",
        `
**10-1:** Frequency Change
**10-2:** Radio Check
**10-3:** Stop Transmitting 
**10-4:** Affirmative
**10-6:** busy
**10-9:** Repeat	
**10-20:** Location
**10-22:** Disregard
**10-26:** ETA
**10-35:** Wrap up the scene
**10-43:** Information
**10-73:** Advise Status 
**10-90:** In game warning
**Code 4:** Under control 
**Signal 37:** Meet at Location
**Signal 100:** Emergency traffic`
      )
      .addField(
        "**Requests:**",
        `
    **10-27:** Drivers License Check 
    **10-28:** Plate Check
    **10-29:** Warrant Check
    **10-32:** Requesting Backup
    **10-51:** Towing Service
    **10-52:** EMS service
    **10-53:** Fire Dept. Service
    **10-71:** Supervisor needed`
      )
      .addField(
        "**Subject Status:**",
        `
**10-0:** Disappeared
**10-30:** Wanted Person
**10-55:** Intoxicated Driver
**10-60:** Armed With a Gun
**10-44:** Person Deceased
**10-15:** Subject in Custody
**10-31:** Not wanted, No warrants		
**10-56:** Intoxicated Pedestrian
**10-61:** Armed with a knife `
      )
      .setColor("0000FF")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    message.channel.send(embed);
  } catch (err) {
    message.channel.send("Sorry, Something went wrong!");

  }
};

module.exports.help = {
  name: "status-codes"
};
