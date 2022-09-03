const { SlashCommandBuilder } = require('discord.js');

//get help description
var fs = require('fs')

//require embed
const {embed} = require("../embed.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Typology Bot Guide'),
	async execute(interaction) {
		return interaction.reply({embeds: [embed],})
	},
};
