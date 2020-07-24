const { Client, Collection } = require("discord.js");
const bot = new Client({ disableEveryone: true });
const fs = require("fs");
bot.commands = new Collection();
const { prefix, statuses, token } = require("./config.json");


fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  // Change the bot status
  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "PLAYING"
    });
  }, 50000);
});

bot.on("message", async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);


  // Make the arguments lowercase
  const cmd = args.shift().toLowerCase();
  let command;

  // Check if the command exists
  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else {
    return message.channel.send("Command doesn't exist");
  }
  try {
    command.run(bot, message, args);
  } catch (err) {
    console.log(err);
  }

});


bot.login(token);
