const chalk = require("chalk");
const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
bot.commands = new Discord.Collection();
require("dotenv").config();
const { prefix, statuses } = require("./config.json");
const token = process.env.BOT_TOKEN;


bot.once("reconnecting", () => {
  bot.channels.get("646695061458911243").send("**Reconnecting**");
});

bot.once("disconnect", () => {
  bot.channels.get("646695061458911243").send("**Disconnected**");
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(chalk.redBright("Connecting to server."));
  console.log(chalk.redBright("Setting up bot."));
  console.log(chalk.green("Succsesfully connected!"));

  console.log(chalk.blue(`${bot.user.username} is online!`));

  // Change the bot status
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "PLAYING"
    });
  }, 50000);
});

bot.on("message", async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  let messageArraty = message.content.split(/ +/);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
    

  // Make the arguments lowercase
  let cmd = args.shift().toLowerCase();
  let commandFile;
  
  // Check if the command exists
  if (bot.commands.has(cmd)) {
    commandFile = bot.commands.get(cmd);
  } else {
    return message.channel.send("Command doesn't exist")
  }
  try {
    commandFile.run(bot, message, args);
  } catch (err) {
    console.log(err);
  }
  
});


bot.login(token);
