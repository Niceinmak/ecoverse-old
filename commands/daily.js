module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(message.author.id, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`Bu gün**${addMoney.amount}** 💸topladın.Toplam paran **${addMoney.after}** 💸oldu!`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
