import { Operation } from '../shared/operation';
import { Command } from '../shared/command';

export class ClearAllMsg implements Operation {
  operationId = 'clearAllMsg';

  async execute({ message }: Command) {
    try{
      const mesagges = await message.channel.fetchMessages();
      await message.channel.bulkDelete(mesagges);
    }catch(err){
      console.log(err);
      message.reply('You not have permissions for that action')
    }
  }
}