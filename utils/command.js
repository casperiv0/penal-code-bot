const fs = require("fs");

module.exports = (bot) => {
  const commands = fs.readdirSync("./commands");

  for (const file of commands) {
    const cmd = require(`../commands/${file}`);

    bot.commands.set(cmd.name, cmd);
  }
};
