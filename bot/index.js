require('dotenv').config();
const { Client, GatewayIntentBits, Partials} = require('discord.js');
const { exec } = require('child_process');
const fs = require('fs');

const client = new Client({
    intents: [ GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent ],
    partials: [ Partials.Channel ]
});

client.on("messageCreate", (message) => {
    var content = `${message.author.username}:\n${message.content}`;
    fs.writeFileSync(process.env.MESSAGE_PATH, content);
    exec(`pixlet render ../pixlet/main.star && pixlet push --installation-id message ${process.env.DEVICE_ID}  ../pixlet/main.webp`);
    message.react('✅');
});

client.login(process.env.TOKEN);