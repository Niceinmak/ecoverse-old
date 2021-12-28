const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1)
    return message.channel.send("Looks like you are poor.");
  let item = args[0];
  if (!item) return message.channel.send("What are you trying to buy?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.reply("That item doesnt exists lol");
  let isBalanceEnough = userBalance.amount >= hasItem.cost;
  if (!isBalanceEnough)
    return message.reply(
      "Your balance is insufficient. You need :dollar: " +
        hasItem.cost +
        " to buy this item."
    );
  let sell = client.eco.addMoney(message.author.id, hasItem.cost);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
  const result = Object.keys(arrayToObject).map(k =>
                                                
      message.channel.send(
    `You sell **${item}** for **:dollar: ${arrayToObject[k]}**.`
  )
  );
  //--------------------------------------------------
   
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell <item>`
};
