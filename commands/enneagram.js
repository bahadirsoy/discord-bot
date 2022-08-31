const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, '../enneagramInfos');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.txt'));

for (const file of commandFiles) {
	let info = fs.readFileSync(`C:/Users/oxika/Desktop/discordBot/enneagramInfos/${file}`).toString()
    commands.push({
        name: file,
        content: info,
    })
}

//console.log(commands.filter(element => element.name == "2w1.txt")[0].content)

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
                if(wing === "2") return interaction.reply('1w2');
                else if(wing === "9") return interaction.reply('1w9');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('1');
            case "2":
                if(wing === "1") return interaction.reply(commands.filter(element => element.name == "2w1.txt")[0].content);
                else if(wing === "3") return interaction.reply('2w3');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('2');
            case "3":
                if(wing === "2") return interaction.reply('3w2');
                else if(wing === "4") return interaction.reply('3w4');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('3');
            case "4":
                if(wing === "3") return interaction.reply('4w3');
                else if(wing === "5") return interaction.reply('4w5');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('4');
            case "5":
                if(wing === "4") return interaction.reply('5w4');
                else if(wing === "6") return interaction.reply('5w6');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('5');
            case "6":
                if(wing === "5") return interaction.reply('6w5');
                else if(wing === "7") return interaction.reply('6w7');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('6');
            case "7":
                if(wing === "6") return interaction.reply('7w6');
                else if(wing === "8") return interaction.reply('7w8');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('7');
            case "8":
                if(wing === "7") return interaction.reply('8w7');
                else if(wing === "9") return interaction.reply('8w9');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('8');
            case "9":
                if(wing === "8") return interaction.reply('9w8');
                else if(wing === "1") return interaction.reply('9w1');
                else if(wing) return interaction.reply('no wing');
                else return interaction.reply('9');
            default:
                return interaction.reply('no enneagram');
        }

	},
}