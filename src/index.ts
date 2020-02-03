import { config } from 'dotenv';
import { Client, Message } from 'discord.js';
import { prefix } from './config/config.json';
import { MainPipeline } from './pipe/Main.js';
config();

const client: Client = new Client();

const mainPipeline: MainPipeline = new MainPipeline();

client.on('ready', () => {
  console.log('toga is here');
});

client.on('message', async (mesagge: Message) => {
  mainPipeline.executePipeline(mesagge);
})

client.login(process.env.TOGA_TOKEN);