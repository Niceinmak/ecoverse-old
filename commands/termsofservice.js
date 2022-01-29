const { MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons')
exports.execute = async (client, message, args) => {
  let userid=message.author.id
    const embed = new MessageEmbed()
        .setAuthor("Terms Of Use & Privacy Policy")
        .setTitle("EcoVerse Terms Of Use & Privacy Policy")
     //   .setURL("https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ")
        .setDescription(`**EcoVerse Privacy Policy**
**What information is stored?**
If you have any money, your user ID is stored. Your user ID can be stored multiple times for money..
Money data, market data, user id and similar things are stored on our servers.

**Who gets this data?**
Badge data is publically available. All other data is only available to Quacky Administrators.

**Third Party Data Sharing**
Money data is public. All other data is only available to EcoVerse Administrators..

**Questions and Concerns.**
You can come to our discord server to learn more: https://discord.gg/2n9Zg9BGgY

**How to Remove your data.**
If you wish to delete your data, please contact us: https://discord.gg/2n9Zg9BGgY


***Note: We reserve the right to change this without notifying our users.
As soon as you add the bot to the server, you are deemed to have accepted the privacy policy***

\`This policy was last updated January 6th, 2022.
Niceinmak#9634\`

**EcoVerse Terms Of Service**
These terms of service enable the use of the EcoVerse bot and access to its services. Please read these Terms carefully and contact us if you have any questions. By using our services, you agree to these terms and our privacy policy.


**Your Content**
The bot may receive this information, including your EcoVerse profile picture, username, your id and avatar. Everything you post or otherwise make available on our Services (commands) is referred to as "User Content".
You reserve all rights to and are solely responsible for any user content you submit to EcoVerse.
 
 
**How Long Do We Store Your Content?**
We keep all data and information until you come to the help server and ask for your account to be closed. You consent to use your content as long as you use it under normal conditions and to change the amount of money you use in games within the bot and derivative works.

​

**Feedback You Provide**
We value hearing from our users and are always trying to improve our EcoVerse bot. If you choose to post comments, ideas or feedback, you agree that we are free to use them without any restriction or compensation to you.

​

**Security**
We care about the safety of our users. As we work to protect the security of your content and account, EcoVerse cannot guarantee that unauthorized third parties will not be able to defeat our security measures.

​

**Third-party links and services**
EcoVerse does not contain any third party software. All data is stored on its own server.

\`EcoVerse\`
`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
  let buttonagree = new MessageButton()
  .setStyle('1')
  // .setStyle('red')
  // .setStyle('blue')
  .setLabel('I Agree!') 
  .setID('1') 
  .setDisabled(false);
    let buttonurl = new MessageButton()
  .setStyle('url')
    .setURL("https://discord.gg/2n9Zg9BGgY")
  .setLabel('Support Server') 
  .setDisabled(false);
  
 message.channel.send({ buttons: [buttonagree, buttonurl], embed: embed }).then(message => { // Send Embed And Buttons
                const filter = (button) => button.clicker.user.id === userid // To Check If User Who Clicked Button Is Same As Who Used Command
                const collector = message.createButtonCollector(filter, { time: 300000 }) // 30 Seconds To Click
                collector.on('collect', async button => {
                  if(button.id === '1') { // If User Click Yes Button
                   button.reply.defer()
                  buttonagree.setDisabled(true);
                    embed.setAuthor("Thanks")
                  embed.setDescription("**You have accepted the privacy policy!**");
                  message.edit({ buttons: [buttonagree, buttonurl], embed: embed })
                  
                    }
                  
                })
 //collector.on('end', collected => console.log(`Collected ${collected.size} items`));
            })
  /*
    FARKLI KOMUTLAR DİZİNİ


exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    return message.reply(`**${message.author.tag} | ** **${[Math.floor(beg2.amount)]}** Paranı **2'ye** **${amount}** katladın ve **${amount3}** 💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.`);
       let data2= client.eco.removeMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.removeMoney(client.ecoAddUser, parseInt(kullaniciveri));    
       let data2= client.eco.addMoney(message.author.id, parseInt(kullaniciveri));
       let data2= client.eco.addMoney(client.ecoAddUser, parseInt(kullaniciveri));        
       let data2= client.eco.setMoney(message.author.id, parseInt(kullaniciveri));
        let data2= client.eco.setMoney(client.ecoAddUser, parseInt(kullaniciveri));           
---------------------------------------------------------------------------------------*/
}

exports.help = {
    name: "termsofuse",
    aliases: ["TERMSOFUSE"],
    usage: `termsofuse`
}
