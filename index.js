const { Client, Collection } = require("discord.js");
const bot = new Client({ disableEveryone: true });
const { prefix, statuses, token } = require("./config.json");

// Commands
bot.commands = new Collection();
require("./utils/command")(bot);

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  // Change the bot status
  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "PLAYING",
    });
  }, 50000);
});

bot.on("message", async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  let command;

  // Check if the command exists
  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else {
    return console.log("cmd not found");
  }
  try {
    command.run(bot, message, args);
  } catch (err) {
    console.log(err);
  }
});

bot.login(token);
