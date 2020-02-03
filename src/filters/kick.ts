import { Operation } from '../shared/operation';
import { Command } from '../shared/command';

export class Kick implements Operation {
  operationId = 'kick';

  async execute({ message }: Command) {
    const member = message.mentions.members.first()

    try{
      if(member && message.member.hasPermission(['KICK_MEMBERS'])){
        message.channel.send(`Are you sure to want remove ${message.member.user.username}`)
        
        const removedMember = await member.kick();
        const { username } = removedMember.user;
        message.channel.send(username)
        message.reply(`${username} has been removed from this channel`);
      }
    }catch(err){
      return message.reply('You not have permissions for that action');
    }
    
  }
}