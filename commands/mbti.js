const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const mbtiTypes = [];
const mbtiPaths = path.join(__dirname, '../mbtiTypes');
const mbtiFiles = fs.readdirSync(mbtiPaths).filter(file => file.endsWith('.txt'));

for (const file of mbtiFiles) {
	let info = fs.readFileSync(`/app/mbtiTypes/${file}`).toString()
    mbtiTypes.push({
        name: file,
        content: info,
    })
}

//require embed
const {embed} = require("../embed.js")


module.exports = {
	data: new SlashCommandBuilder()
    .setName('mbti')
	.setDescription('MBTI type description')
	.addSubcommand(subcommand =>
		subcommand
			.setName('istj')
			.setDescription('Info about a mbti type'))
	.addSubcommand(subcommand =>
		subcommand
			.setName('isfj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('infj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('intj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('istp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('isfp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('infp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('intp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('estp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('esfp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('enfp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('entp')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('estj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('esfj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('enfj')
			.setDescription('Info about a mbti type'))
    .addSubcommand(subcommand =>
		subcommand
			.setName('entj')
			.setDescription('Info about a mbti type')),
	async execute(interaction) {
        const ennaType = interaction.options._subcommand

        switch(ennaType){
            case "istj": return interaction.reply({embeds: [embed.setTitle('ISTJ (Logistician)').setDescription(mbtiTypes.filter(element => element.name == "ISTJ.txt")[0].content)],});
            case "isfj": return interaction.reply({embeds: [embed.setTitle('ISFJ (Defender)').setDescription(mbtiTypes.filter(element => element.name == "ISFJ.txt")[0].content)],});
            case "infj": return interaction.reply({embeds: [embed.setTitle('INFJ (Advocate)').setDescription(mbtiTypes.filter(element => element.name == "INFJ.txt")[0].content)],});
            case "intj": return interaction.reply({embeds: [embed.setTitle('INTJ (Architect)').setDescription(mbtiTypes.filter(element => element.name == "INTJ.txt")[0].content)],});
            case "istp": return interaction.reply({embeds: [embed.setTitle('ISTP (Virtuoso)').setDescription(mbtiTypes.filter(element => element.name == "ISTP.txt")[0].content)],});
            case "isfp": return interaction.reply({embeds: [embed.setTitle('ISFP (Adventurer)').setDescription(mbtiTypes.filter(element => element.name == "ISFP.txt")[0].content)],});
            case "infp": return interaction.reply({embeds: [embed.setTitle('INFP (Mediator)').setDescription(mbtiTypes.filter(element => element.name == "INFP.txt")[0].content)],});
            case "intp": return interaction.reply({embeds: [embed.setTitle('INTP (Logician)').setDescription(mbtiTypes.filter(element => element.name == "INTP.txt")[0].content)],});
            case "estp": return interaction.reply({embeds: [embed.setTitle('ESTP (Entrepreneur)').setDescription(mbtiTypes.filter(element => element.name == "ESTP.txt")[0].content)],});
            case "esfp": return interaction.reply({embeds: [embed.setTitle('ESFJ (Entertainer)').setDescription(mbtiTypes.filter(element => element.name == "ESFP.txt")[0].content)],});
            case "enfp": return interaction.reply({embeds: [embed.setTitle('ENFP (Campaigner)').setDescription(mbtiTypes.filter(element => element.name == "ENFP.txt")[0].content)],});
            case "entp": return interaction.reply({embeds: [embed.setTitle('ENTP (Debater)').setDescription(mbtiTypes.filter(element => element.name == "ENTP.txt")[0].content)],});
            case "estj": return interaction.reply({embeds: [embed.setTitle('ESTJ (Executive)').setDescription(mbtiTypes.filter(element => element.name == "ESTJ.txt")[0].content)],});
            case "esfj": return interaction.reply({embeds: [embed.setTitle('ESFJ (Consul)').setDescription(mbtiTypes.filter(element => element.name == "ESFJ.txt")[0].content)],});
            case "enfj": return interaction.reply({embeds: [embed.setTitle('ENFJ (Protagonist)').setDescription(mbtiTypes.filter(element => element.name == "ENFJ.txt")[0].content)],});
            case "entj": return interaction.reply({embeds: [embed.setTitle('ENTJ (Commander)').setDescription(mbtiTypes.filter(element => element.name == "ENTJ.txt")[0].content)],});
        }
        
        return interaction.reply('Pong!');
    },
}