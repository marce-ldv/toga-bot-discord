"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config/config.json");
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log('toga is here');
});
client.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(msg);
    if (msg.content.startsWith(config_json_1.prefix)) {
        // msg.channel.send(`❄️ Watashi wa kita`);
        // msg.reply(`Your the best`);
    }
    if (msg.content.startsWith(`${config_json_1.prefix}hi`)) {
        const member = msg.mentions.members.first();
        console.log(member);
        if (member) {
            msg.channel.send(`Hi ${member}`);
        }
    }
    if (msg.content.startsWith(`${config_json_1.prefix}kick`)) {
        const member = msg.mentions.members.first();
        if (member && msg.member.hasPermission(['KICK_MEMBERS'])) {
            const removedMember = yield msg.member.kick();
            const { username } = removedMember.user;
            msg.reply(`${username} has been removed from this channel`);
        }
        return msg.reply('You not have permissions for that action');
    }
    if (msg.content.startsWith(`${config_json_1.prefix}cleanAll`)) {
        try {
            const mesagges = yield msg.channel.fetchMessages();
            yield msg.channel.bulkDelete(mesagges);
        }
        catch (err) {
            console.log(err);
            msg.reply('You not have permissions for that action');
        }
    }
}));
client.login(process.env.TOGA_TOKEN);
