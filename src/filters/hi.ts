import { Operation } from '../shared/operation';
import { Command } from '../shared/command';

export class Hi implements Operation {
  operationId = 'hi';

  execute({ message, argumentsList }: Command) {
    const member = message.mentions.members.first()
    if(member) {
      message.channel.send(`Hi ${member}`);
    } else {
      if(argumentsList.length > 0){
        message.channel.send(`Hi ${argumentsList[0]}`);
      }
    }
  }
}