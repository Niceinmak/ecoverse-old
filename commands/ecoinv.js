const { MessageEmbed } = require("discord.js");
const btcValue = require('btc-value');
exports.execute = async (client, message, args) => {
  btcValue().then(value => {
    value=value.toString().slice(0,3);
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(`${message.author.id}11`);
    let userBalanceformat=String(userBalance.amount).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    let userBalanceformat2=String(userBalance.amount*value).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    const embed = new MessageEmbed()
        .setTitle(`**EcoCoin🌿**`)
        .setDescription(`**EcoCoin: \`${userBalanceformat}\`\nPrice: \`${userBalanceformat2}\`**`)
        .addField(`Usage`,`Buy \`${client.prefix} buyeco\` \nSell\`${client.prefix} selleco\``)
        .addField(`\`Note\` **This coin can only be used in-game.**`,`**Cannot be bought and sold in real life**`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
});
}

exports.help = {
    name: "ecoinv",
    aliases: ["ECOINV","ecoinventory"],
    usage: `ecoinv <user>`
}
