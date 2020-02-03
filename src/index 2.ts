import { config } from 'dotenv';
import { Client, Message } from 'discord.js';
import { prefix } from './config/config.json';
config();

const client: Client = new Client();

client.on('ready', () => {
  console.log('toga is here');
});

client.on('message', async (msg: Message) => {
  // console.log(msg);

  if(msg.content.startsWith(prefix)){
    
    if(msg.content.startsWith(`${prefix}hi`)){
      const member = msg.mentions.members.first();
      console.log(member);
      if(member){
        msg.channel.send(`Hi ${member}`)
      }
    }

    if(msg.content.startsWith(`${prefix}kick`)){
      const member = msg.mentions.members.first();

      try{
        if(member && msg.member.hasPermission(['KICK_MEMBERS'])){
          msg.channel.send(`Are you sure to want remove ${msg.member.user.username}`)
          
          const removedMember = await msg.member.kick();
          const { username } = removedMember.user;
          msg.reply(`${username} has been removed from this channel`);
        }
      }catch(err){
        return msg.reply('You not have permissions for that action');
      }
      
    }

    if(msg.content.startsWith(`${prefix}cleanAll`)){
      try{
        const mesagges = await msg.channel.fetchMessages();
        await msg.channel.bulkDelete(mesagges);
      }catch(err){
        console.log(err);
        msg.reply('You not have permissions for that action')
      }
      
    }
  }
})

client.login(process.env.TOGA_TOKEN);