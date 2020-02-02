import { config } from 'dotenv';
config();
import { Client } from 'discord.js';

const client: Client = new Client();

client.on('ready', () => {
  console.log('toga is here');
});

client.login(process.env.TOGA_TOKEN);