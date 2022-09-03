const { SlashCommandBuilder } = require('discord.js');

//get help description
var fs = require('fs')

//require embed
const {embed} = require("../embed.js")


const embed = new EmbedBuilder()
	.setColor("#f0f018")
	.setTitle('Typology Bot Commands')
	//.setURL('https://www.linkedin.com/in/bahadır-ustabaşı-693550165/')
	.setAuthor({ name: 'Typology Bot', /*iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org'*/ })
	.setDescription(description)
	//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	/*.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)*/
	//.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	//.setImage('https://i.imgur.com/AfFp7pu.png')
	//.setTimestamp()
	.setFooter({ text: 'This bot is made by Bahadır Ustabaşı', /*iconURL: 'https://i.imgur.com/AfFp7pu.png'*/ });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Typology Bot Guide'),
	async execute(interaction) {
		return interaction.reply({embeds: [embed],})
	},
};
