const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
 /*   const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Sofait Bot Commands")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed); */
  
  //------------------------------------------------------------------------------------------------------------
      const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Sofait Bot Commands")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let economyname=""
  let economyaliases=""
  let economyusage=""
  let economyfull=""
  let amount3 = args[0]
 /*   client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Komut: ${cmd.help.aliases.join(", ") || "None"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    }); */
  if(amount3==null)
    {
  client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyname+=` \`${cmd.help.name}\` `
  //  economyusage+=` \`${client.prefix}${cmd.help.usage}\` `
    }); 
  embed.setDescription(`**For more information about commands** \`${client.prefix} help <command>\`\n\n**Economy💰**\n${economyname}`);
    return message.channel.send(embed);
    }
  else
    {

        client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    economyname+=` ${cmd.help.name}`
    }); 
  var argString = economyname.substring(1).split(' ');
      let counter=0
      let counter2=0
      let count=""
      for (var i = 0; i <= client.commands.size; i++) {
        count+=argString[i]
      if(amount3==argString[i])
      {
        counter++
       } 
        counter2++
        }
      if(counter>0)
        {
          let cmdcounter=0
          client.commands.forEach(cmd => {
            if(counter2-10==cmdcounter)
              {
                embed.setDescription(`\`${client.prefix}${cmd.help.usage}${counter2}\``);
              }
        cmdcounter++
    });
        }
      else
        {
          embed.setDescription(`The command you were looking for was not found`);
        }
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
      
      return message.channel.send(embed);
    }
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
