const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const enneagrams = [];
const enneagramPaths = path.join(__dirname, '../enneagramInfos');
const enneagramFiles = fs.readdirSync(enneagramPaths).filter(file => file.endsWith('.txt'));

for (const file of enneagramFiles) {
	let info = fs.readFileSync(`/app/enneagramInfos/${file}`).toString()
    enneagrams.push({
        name: file,
        content: info,
    })
}

/* Embed template */
const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
	.setColor("#f0f018")
	.setTitle('1w2 (The Advocate)')
	.setURL('https://www.linkedin.com/in/bahadır-ustabaşı-693550165/')
	//.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	//.setDescription(enneagrams.filter(element => element.name == "1w2.txt")[0].content)
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
        .setName("enneagram")
        .setDescription("info about enna")
        .addSubcommand(subcommand =>
            subcommand
                .setName("1")
                .setDescription("enna 1")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("2")
                .setDescription("enna 2")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("3")
                .setDescription("enna 3")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("4")
                .setDescription("enna 4")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("5")
                .setDescription("enna 5")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("6")
                .setDescription("enna 6")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("7")
                .setDescription("enna 7")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("8")
                .setDescription("enna 8")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("9")
                .setDescription("enna 9")
                .addStringOption(option =>
                    option
                        .setName("wing")
                        .setDescription("wing of the enna"))),
	async execute(interaction) {
        
        const ennaType = interaction.options._subcommand
        const wing = interaction.options._hoistedOptions[0] ? interaction.options._hoistedOptions[0].value : null
        
        switch(ennaType){
            case "1":
                if(wing === "9") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('1w9 (The Idealist)').setDescription(enneagrams.filter(element => element.name == "1w9.txt")[0].content)],});
                else if(wing === "2") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('1w2 (The Advocate)').setDescription(enneagrams.filter(element => element.name == "1w2.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 1 (The Reformer)').setDescription(enneagrams.filter(element => element.name == "1.txt")[0].content)],});
            case "2":
                if(wing === "1") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('2w1 (The Servant)').setDescription(enneagrams.filter(element => element.name == "2w1.txt")[0].content)],});
                else if(wing === "3") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('2w3 (The Host/Hostess)').setDescription(enneagrams.filter(element => element.name == "2w3.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 2 (The Helper)').setDescription(enneagrams.filter(element => element.name == "2.txt")[0].content)],});
            case "3":
                if(wing === "2") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('3w2 (The Charmer)').setDescription(enneagrams.filter(element => element.name == "3w2.txt")[0].content)],});
                else if(wing === "4") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('3w4 (The Professional)').setDescription(enneagrams.filter(element => element.name == "3w4.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 3 (The Achiever)').setDescription(enneagrams.filter(element => element.name == "3.txt")[0].content)],});
            case "4":
                if(wing === "3") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('4w3 (The Aristocrat)').setDescription(enneagrams.filter(element => element.name == "4w3.txt")[0].content)],});
                else if(wing === "5") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('4w5 (The Bohemian)').setDescription(enneagrams.filter(element => element.name == "4w5.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 4 (The Individualis)').setDescription(enneagrams.filter(element => element.name == "4.txt")[0].content)],});
            case "5":
                if(wing === "4") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('5w4 (The Iconoclast)').setDescription(enneagrams.filter(element => element.name == "5w4.txt")[0].content)],});
                else if(wing === "6") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('5w6 (The Problem-Solver)').setDescription(enneagrams.filter(element => element.name == "5w6.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 5 (The Observer)').setDescription(enneagrams.filter(element => element.name == "5.txt")[0].content)],});
            case "6":
                if(wing === "5") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('6w5 (The Defender)').setDescription(enneagrams.filter(element => element.name == "6w5.txt")[0].content)],});
                else if(wing === "7") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('6w7 (The Buddy)').setDescription(enneagrams.filter(element => element.name == "6w7.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 6 (The Loyalist)').setDescription(enneagrams.filter(element => element.name == "6.txt")[0].content)],});
            case "7":
                if(wing === "6") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('7w6 (The Entertainer)').setDescription(enneagrams.filter(element => element.name == "7w6.txt")[0].content)],});
                else if(wing === "8") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('7w8 (The Realist)').setDescription(enneagrams.filter(element => element.name == "7w8.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 7 (The Enthusiast)').setDescription(enneagrams.filter(element => element.name == "7.txt")[0].content)],});
            case "8":
                if(wing === "7") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('8w7 (The Independent)').setDescription(enneagrams.filter(element => element.name == "8w7.txt")[0].content)],});
                else if(wing === "9") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('8w9 (The Bear)').setDescription(enneagrams.filter(element => element.name == "8w9.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 8 (The Challenger)').setDescription(enneagrams.filter(element => element.name == "8.txt")[0].content)],});
            case "9":
                if(wing === "8") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('9w8 (The Referee)').setDescription(enneagrams.filter(element => element.name == "9w8.txt")[0].content)],});
                else if(wing === "1") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('9w1 (The Dreamer)').setDescription(enneagrams.filter(element => element.name == "9w1.txt")[0].content)],});
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('Type 9 (The Peacemaker)').setDescription(enneagrams.filter(element => element.name == "9.txt")[0].content)],});
            default:
                return interaction.reply('no enneagram');
        }

	},
}