const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const temperaments = [];
const temperamentsPath = path.join(__dirname, '../temperaments');
const temperamentsFiles = fs.readdirSync(temperamentsPath).filter(file => file.endsWith('.txt'));

for (const file of temperamentsFiles) {
	let info = fs.readFileSync(`/app/temperaments/${file}`).toString()
    temperaments.push({
        name: file,
        content: info,
    })
}

//require embed
const {embed} = require("../embed.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temperaments')
		.setDescription('choose temperament')
        .addSubcommand(subcommand =>
            subcommand
                .setName('sanguine')
                .setDescription('Info about sanguine temperament'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('choleric')
                .setDescription('Info about choleric temperament'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('melancholic')
                .setDescription('Info about melancholic temperament'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('phlegmatic')
                .setDescription('Info about phlegmatic temperament')),
	async execute(interaction) {
        const temperament = interaction.options._subcommand

        switch(temperament){
            case "sanguine":
                return interaction.reply({embeds: [embed.setTitle('SANGUINE').setDescription(temperaments.filter(element => element.name == "sanguine.txt")[0].content)],});
            case "choleric":
                return interaction.reply({embeds: [embed.setTitle('CHOLERIC').setDescription(temperaments.filter(element => element.name == "choleric.txt")[0].content)],});
            case "phlegmatic":
                return interaction.reply({embeds: [embed.setTitle('PHLEGMATIC').setDescription(temperaments.filter(element => element.name == "phlegmatic.txt")[0].content)],});
            case "melancholic":
                return interaction.reply({embeds: [embed.setTitle('MELANCHOLIC').setDescription(temperaments.filter(element => element.name == "melancholic.txt")[0].content)],});
        }

		return interaction.reply('Pong!');
	},
};