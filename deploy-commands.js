//require dotenv
require('dotenv').config()

//set dotenv variables
const token = process.env.TOKEN
const clientId = process.env.CLIENTID
const guildId = process.env.GUILDID

const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);