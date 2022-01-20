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
        .setTitle("EcoVerse Bot Commands")
        .setURL("https://discord.com/oauth2/authorize?client_id=924311092468015116&scope=bot&permissions=0")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let economyname=""
  let economyaliases=""
  let utilityname=""
  let onlyadminsname=""
  let gamesname=""
    let gamescommands = [
        "cf",
        "rob",
        "beg",
        "daily",
        "spin",
        "search",
        "slots",
        "weekly",
        "roll"
    ];
  let utilitycommands = [
        "prefix",
        "ping",
        "uptime",
        "privacy",
        "supportserver"
    ];
  let onlyadminscommands = [
        "addmoney",
        "removemoney",
        "setmoney",
        "test"
    ];
  let amount3 = args[0]
 /*   client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Komut: ${cmd.help.aliases.join(", ") || "None"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    }); */
  if(amount3==null)
    {
  client.commands.forEach(cmd => {
     //   embed.addField(`\`${client.prefix}${cmd.help.usage}\``,true);
    let count=0
    for (var i = 0; i < utilitycommands.length; i++) {
     if(cmd.help.name==utilitycommands[i])
      {
        utilityname+=` \`${cmd.help.name}\` ` 
        count++;
      }
    }
    for (var i = 0; i < gamescommands.length; i++) {
     if(cmd.help.name==gamescommands[i])
      {
         gamesname+=` \`${cmd.help.name}\` ` 
        count++;
      }
    }
     for (var i = 0; i < onlyadminscommands.length; i++) {
     if(cmd.help.name==onlyadminscommands[i])
      {
        onlyadminsname+=` \`${cmd.help.name}\` ` 
        count++;
      }
    }
    if(count==0)
      {
       economyname+=` \`${cmd.help.name}\` ` 
      }
  //  economyusage+=` \`${client.prefix}${cmd.help.usage}\` `
    }); 
  embed.setDescription(`Here is the list of commands!\n**For more info on a specific command, use** \`${client.prefix}help <command>\`
  
  **Games**💵\n${gamesname}   
  
  **Economy💰**\n${economyname}
  
  **Only Admins **🚫\n${onlyadminsname}
  
  **Utility**🔧\n${utilityname}`                 
                      );
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
      for (var i = 0; i < client.commands.size; i++) {
        count+=argString[i]
      if(amount3==argString[i])
      {
        counter++
        break;
       } 
        counter2++
        }
      if(counter>0)
        {
          let cmdcounter=0
          client.commands.forEach(cmd => {
            if(counter2==cmdcounter)
              {
                embed.setDescription(`**Usage:**\`${client.prefix}${cmd.help.usage}\`\n**Aliases:**\`${cmd.help.aliases.join(", ") || "None"}\``);
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
    aliases: ["h","HELP"],
    usage: `help`
}
