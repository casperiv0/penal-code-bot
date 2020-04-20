const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    if (!args)
      return message.channel.send("Please provide a valid title, **1 -> 12**");
    else if (args == "1") {
      let embed1 = new Discord.RichEmbed()
        .setTitle("**Title 1.** Crimes Against The Person (PC 1-01 to PC 1-13)")
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(1)01.Intimidation, (1)02.Assault, (1)03.Assault-On-A-Peace-Officer, (1)04.Assault-With-A-Deadly-Weapon, (1)05.Mutual-Combat, (1)06.Battery, (1)07.Aggravated-Battery, (1)08.Attempted-Murder, (1)09.Manslaughter, (1)10.Murder, (1)11.False-Imprisonment, (1)12.Kidnapping,(1)13.Mayhem, (1)14.Vehicular-Murder, (1)15. Racketeering```"
        );
      message.channel.send(embed1);
    } else if (args == "2") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 2.**  Crimes Against Property And Criminal Profiteering (PC 2-01 to PC 2-17)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(2)01.Arson, (2)02.Trespassing, (2)03.Trespassing-within-a-Restricted-Zone, (2)04.Burglary, (2)05.Possession-Of-Burglary-Tools, (2)06.Robbery, (2)07.Armed-Robbery, (2)08.Petty-Theft, (2)09.Theft, (2)10.Grand-Theft, (2)11.Grand-Theft-Auto, (2)12.Grand-Theft-Of-A-Firearm, (2)13.Receiving-Stolen-Property, (2)14.Extortion, (2)15.Forgery, (2)16.Fraud, (2)17.Vandalism```"
        );
      message.channel.send(embed1);
    } else if (args == "3") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 3.** Crimes Against Public Decency (PC 3-01 to PC 3-10)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(3)01.Lewd-Or-Dissolute-Conduct-In-Public, (3)02.Indecent-Exposure, (3)03.Prostitution, (3)04.Solicitation-of-Prostitution, (3)05.Pandering-Pimping, (3)06.Sexual-Assault, (3)07.Sexual-Battery, (3)08.Rape, (3)09.Statutory-Rape, (3)10.Stalking```"
        );
      message.channel.send(embed1);
    } else if (args == "4") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 4.** Crimes Against Public Justice (PC 4-01 to PC 4-24)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(4)01.Bribery, (4)02.Failure-To-Pay-A-Fine, (4)03.Contempt-of-Court, (4)04.Subpoena-Violation, (4)05.Dissuading-A-Witness-Or-Victim, (4)06.False-Information-To-A-Government-Employee, (4)07.Filing-A-False-Complaint, (4)08.Perjury, (4)09.Failure-To-Identify-To-A-Peace-Officer, (4)10.Impersonation-Of-A-Government-Employee, (4)11.Impersonation-of-an-Individual, (4)12.Obstruction-Of-A-Government-Employee, (4)13.Resisting-A-Peace-Officer, (4)14.Escape-From-Custody, (4)15.Escape, (4)16.Prisoner-Breakout, (4)17.Human-Trafficking, (4)18.Misuse-Of-A-Government-Hotline, (4)19.Tampering-With-Evidence, (4)20.Introduction-Of-Contraband, (4)21.Violation-Of-Parole-Or-Probation, (4)22.Voter-Fraud-Voter-Pandering, (4)23.Corruption-Of-Public-Duty, (4)24.Corruption-Of-Public-Office, (4)25.Contempt-of-Senate ```"
        );
      message.channel.send(embed1);
    } else if (args == "5") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 5.** Crimes Against Public Peace (PC 5-01 to PC 5-06) "
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(5)01.Disturbing-The-Peace, (5)02.Unlawful-Assembly, (5)03.Incitement-To-Riot, (5)04.Vigilantism, (5)05.Terrorism```"
        );
      message.channel.send(embed1);
    } else if (args == "6") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 6.** Of Crimes Against Public Health And Safety (PC 6-01 to PC 6-11) "
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(6)01.Possession-Of-A-Controlled-Substance, (6)02.Possession-Of-A-Controlled-Substance-With-Intent-To-Sell, (6)03.Possession-Of-Drug-Paraphernalia, (6)04.Maintaining-A-Place-For-The-Purpose-Of-Distribution, (6)05.Manufacture-Of-A-Controlled-Substance, (6)06.Sale-Of-A-Controlled-Substance, (6)07.Possession-Of-An-Open-Container, (6)08.Public-Intoxication, (6)09.Under-The-Influence-Of-A-Controlled-Substance, (6)10.Facial-Obstruction-While-Committing-A-Crime, (6)11.Possession-of-Marijuana```"
        );
      message.channel.send(embed1);
    } else if (args == "7") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 7.** Crimes Against State Dependents (PC 7-01 to PC 7-05)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(7)01.Animal-Abuse-Cruelty, (7)02.Child-Abuse, (7)03.Sale-of-Alcohol-To-A-Minor, (7)04.Minor-Alcohol-Violation, (7)05.Possession-Of-Child-Pornography```"
        );
      message.channel.send(embed1);
    } else if (args == "8") {
      let embed1 = new Discord.RichEmbed()
        .setTitle("**Title 8.** Vehicular Offenses (PC 8-00 to PC 8-09)")
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(8)00.Limitations, (8)01.-Driving-With-A-Suspended-License, (8)02.Driving-Without-A-License, (8)02.Evading-A-Peace-Officer, (8)03.Evading-A-Peace-Officer-High-Performance-Vehicle, (8)04.Evading-A-Peace-Officer-Oversized-Vehicle, (8)05.Evading-A-Peace-Officer-Naval-Vessel, (8)06.Evading-A-Peace-Officer-Aircraft, (8)07.Flying-Without-A-Pilot's-License, (8)08.Hit-And-Run, (8)09.Hit-And-Run-Involving-Property-Damage```"
        );
      message.channel.send(embed1);
    } else if (args == "9") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 9.** Control Of Deadly Weapons And Equipment  (PC 9-01 to PC 9-13)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(9)01.Possession-Of-An-Illegal-Blade, (9)02.Possession-Of-An-Unlicensed-Firearm, (9)03.Possession-Of-An-Illegal-Firearm, (9)04.Possession-Of-An-Assault-Weapon, (9)05.Unlicensed-Distribution-Of-A-Weapon, (9)06.Possession-Of-An-Explosive-Device, (9)07.Manufacture-or-Possession-of-an-Improvised-Device, (9)08.Possession-of-Weapons-With-Intent-To-Sell, (9)09.Possession-Of-Explosive-Devices-With-Intent-To-Sell, (9)10.Brandishing-A-Firearm, (9)11.Weapons-Discharge-Violation, (9)12.Drive-By-Shooting, (9)13.CCW-PF-Violation```"
        );
      message.channel.send(embed1);
    } else if (args == "10") {
      let embed1 = new Discord.RichEmbed()
        .setTitle(
          "**Title 10.** Sentencing Enhancements (PC 10-00 to PC 10-07)"
        )
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(10)00.Exception, (10)01.Attempt, (10)02.Conspiracy, (10)03.Soliciting, (10)04.Government-Worker-Clause, (10)05.Plea-Bargaining-Police-Compliance-Clause, (10)06.Three-strikes-Vehicle-Policy, (10)07.Criminal-Accomplice-Clause```"
        );
      message.channel.send(embed1);
    } else if (args == "11") {
      let embed1 = new Discord.RichEmbed()
        .setTitle("**Title 11.** Road Law (PC 11-00 to PC 11-23)")
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(11)00.Limitations, (11)01.Speeding-Violation, (11)02.Failure-To-Abide-To-A-Traffic-Control-Device, (11)03.Yield-Violation, (11)04.Parking-Violation, (11)05.Reckless-Driving, (11)06.Vehicular-Endangerment, (11)07.Vehicular-Noise-Violation, (11)08.Illegal-Nitrous-Oxide-Possession, (11)09.Illegal-Usage-Of-Hydraulics, (11)10.Driving-While-Impaired-(DWI), (11)11.Driving-Under-The-Influence-(DUI), (11)12.Registration-Violation, (11)13.Unsafe-Usage-Of-A-Bicycle, (11)14.Street-Racing, (11)15.Driving-without-a-Valid-License, (11)16.Jaywalking, (11)17.Illegal-Parking-Of-An-Aircraft, (11)18.Tinted-Windows, (11)19.Illegal-Color-of-Underglow, (11)20.Unlawful-Transport-of-Persons-in-a-Cargo-Area, (11)21.Fire-Hydrant-Parking-Restriction, (11)22.Broken-Headlights-Tail-lights, (11)23.Unregistered-Vehicle```"
        );
      message.channel.send(embed1);
    } else if (args == "12") {
      let embed1 = new Discord.RichEmbed()
        .setTitle("**Title 12.** Code Policy (PC 12-01 to PC 12-18)")
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "```(12)01.Mistake-of-Fact, (12)02.Involuntary-Intoxication, (12)03.Private-Defense-Self-Defense-Castle-Doctrine-And-Defense-Of-Others, (12)04.Necessity, (12)06.Duress, (12)07.Parole-Exclusions, (12)08.Suspicion-Policy, (12)09.Officer-Discretion, (12)10.Good-Samaritan-Clause, (12)11.Imprisonment-Punishment-Criteria, (12)12.Maximum-Imprisonment, (12)13.Wiretapping-CCTV-Videotaping-Policy, (12)14.Police-Exigency-Hot-Pursuit-Policy, (12)15.Probable-Cause-Plain-View-Policy, (12)16.Criminal-Fines, (12)17.Repeat-Offender-Clause, (12)18.Immunity```"
        );
      message.channel.send(embed1);
    } else if (args == "(11)01.") {
      let embed1 = new Discord.RichEmbed()
        .setTitle("**(11)01. Speeding Violation**")
        .setColor("0000FF")
        .setTimestamp()
        .setDescription(
          "**1)** Speeding (Stopped in The Roadway) \n**2)** Speeding 15-25 kmh slower than the posted speed limit. \n **3)** Speeding 10-15 kmh over the posted/known speed limit.\n**4)** Speeding 20-25 kmh faster than the posted/known speed limit\n**5)** Speed 25-30 kmh faster than the posted/known speed limit\n **6)** Speed 25-40 kmh faster than the posted/known speed limit\n **7)** Speed 40+ kmh faster than the posted/known speed limit\n **8)** Speeding double or 100+ the posted/known speed limit. Whichever comes first.\n\n - Road Law (11)01 I. is an infraction punishable by a $65 fine.\n- Road Law (11)01 II.  is an infraction punishable by a $65 fine.\n - Road Law (11)01 III.  is an infraction punishable by a $170 fine.\n- Road Law (11)01 IV.  is an infraction punishable by a $234 fine.\n - Road Law (11)01 V.  is an infraction punishable by a $350 fine.\n - Road Law (11)01 VI is an infraction punishable by a $475 fine.\n - Road Law (11)01 VII. is an infraction punishable by a $550 fine.\n- Road Law (11)01 VIII is a felony punishable by a $1000 fine, imprisonment of no less than 25 minutes and no more than 40 minutes, as well as revoking of license for 3 months."
        );
      message.channel.send(embed1);
    } else {
      message.channel.send("Please Provide a valid title, **1 -> 12**");
    }
  } catch (err) {
    message.channel.send("Sorry, Something went wrong!");

  }
};
module.exports.help = {
  name: "title"
  //   aliases: ["title", "tit"]
};
