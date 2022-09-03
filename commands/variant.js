const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const variants = [];
const variantPaths = path.join(__dirname, '../variants');
const variantFiles = fs.readdirSync(variantPaths).filter(file => file.endsWith('.txt'));

for (const file of variantFiles) {
	let info = fs.readFileSync(`/app/variants/${file}`).toString()
    variants.push({
        name: file,
        content: info,
    })
}

//require embed
const {embed} = require("../embed.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('variant')
		.setDescription('Instinctual variants')
        .addSubcommand(subcommand =>
            subcommand
                .setName("so")
                .setDescription("social")
                .addStringOption(option =>
                    option
                        .setName("enneagram")
                        .setDescription("enneagram")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sx")
                .setDescription("sexual")
                .addStringOption(option =>
                    option
                        .setName("enneagram")
                        .setDescription("enneagram")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sp")
                .setDescription("self-preservation")
                .addStringOption(option =>
                    option
                        .setName("enneagram")
                        .setDescription("enneagram"))),
	async execute(interaction) {
        const variantType = interaction.options._subcommand
        const enneagram = interaction.options._hoistedOptions[0] ? interaction.options._hoistedOptions[0].value.toLowerCase() : null

        switch(variantType){
            case "so":
                if(enneagram == "1") return interaction.reply({embeds: [embed.setTitle('The Social One: "Non-Adaptability"').setDescription(variants.filter(element => element.name == "so1.txt")[0].content)],})
                else if(enneagram == "2") return interaction.reply({embeds: [embed.setTitle('The Social Two -"Ambition"').setDescription(variants.filter(element => element.name == "so2.txt")[0].content)],})
                else if(enneagram == "3") return interaction.reply({embeds: [embed.setTitle('The Social Three: "Prestige"').setDescription(variants.filter(element => element.name == "so3.txt")[0].content)],})
                else if(enneagram == "4") return interaction.reply({embeds: [embed.setTitle('The Social Four: "Shame"').setDescription(variants.filter(element => element.name == "so4.txt")[0].content)],})
                else if(enneagram == "5") return interaction.reply({embeds: [embed.setTitle('The Social Five: "Totem"').setDescription(variants.filter(element => element.name == "so5.txt")[0].content)],})
                else if(enneagram == "6") return interaction.reply({embeds: [embed.setTitle('The Social Six: "Duty"').setDescription(variants.filter(element => element.name == "so6.txt")[0].content)],})
                else if(enneagram == "7") return interaction.reply({embeds: [embed.setTitle('The Social Seven: "Sacrifice"').setDescription(variants.filter(element => element.name == "so7.txt")[0].content)],})
                else if(enneagram == "8") return interaction.reply({embeds: [embed.setTitle('The Social Eight: "Friendship"').setDescription(variants.filter(element => element.name == "so8.txt")[0].content)],})
                else if(enneagram == "9") return interaction.reply({embeds: [embed.setTitle('The Social Nine: "Participation"').setDescription(variants.filter(element => element.name == "so9.txt")[0].content)],})
                else if(!enneagram) return interaction.reply({embeds: [embed.setTitle('Social variant').setDescription(variants.filter(element => element.name == "so.txt")[0].content)],})
                else return interaction.reply("Invalid enneagram")
            case "sp":
                if(enneagram == "1") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation One: "Anxiety"').setDescription(variants.filter(element => element.name == "sp1.txt")[0].content)],})
                else if(enneagram == "2") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Two: "Privilege"').setDescription(variants.filter(element => element.name == "sp2.txt")[0].content)],})
                else if(enneagram == "3") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Three: "Security"').setDescription(variants.filter(element => element.name == "sp3.txt")[0].content)],})
                else if(enneagram == "4") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Four: "Dauntlessness"').setDescription(variants.filter(element => element.name == "sp4.txt")[0].content)],})
                else if(enneagram == "5") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Five: "Home"').setDescription(variants.filter(element => element.name == "sp5.txt")[0].content)],})
                else if(enneagram == "6") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Six: "Warmth"').setDescription(variants.filter(element => element.name == "sp6.txt")[0].content)],})
                else if(enneagram == "7") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Seven: "Family"').setDescription(variants.filter(element => element.name == "sp7.txt")[0].content)],})
                else if(enneagram == "8") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Eight: "Satisfactory"').setDescription(variants.filter(element => element.name == "sp8.txt")[0].content)],})
                else if(enneagram == "9") return interaction.reply({embeds: [embed.setTitle('The Self-Preservation Nine: "Appetite"').setDescription(variants.filter(element => element.name == "sp9.txt")[0].content)],})
                else if(!enneagram) return interaction.reply({embeds: [embed.setTitle('Self-Preservation variant').setDescription(variants.filter(element => element.name == "sp.txt")[0].content)],})
                else return interaction.reply("Invalid enneagram")
            case "sx":
                if(enneagram == "1") return interaction.reply({embeds: [embed.setTitle('The Sexual One: "Jealousy/Zealousness"').setDescription(variants.filter(element => element.name == "sx1.txt")[0].content)],})
                else if(enneagram == "2") return interaction.reply({embeds: [embed.setTitle('The Sexual Two: "Seduction/Aggression"').setDescription(variants.filter(element => element.name == "sx2.txt")[0].content)],})
                else if(enneagram == "3") return interaction.reply({embeds: [embed.setTitle('The Sexual Three: "Femininity/Masculinity"').setDescription(variants.filter(element => element.name == "sx3.txt")[0].content)],})
                else if(enneagram == "4") return interaction.reply({embeds: [embed.setTitle('The Sexual Four: "Competitiveness"').setDescription(variants.filter(element => element.name == "sx4.txt")[0].content)],})
                else if(enneagram == "5") return interaction.reply({embeds: [embed.setTitle('The Sexual Five: "Confidentiality"').setDescription(variants.filter(element => element.name == "sx5.txt")[0].content)],})
                else if(enneagram == "6") return interaction.reply({embeds: [embed.setTitle('The Sexual Six: "Strength or Beauty').setDescription(variants.filter(element => element.name == "sx6.txt")[0].content)],})
                else if(enneagram == "7") return interaction.reply({embeds: [embed.setTitle('The Sexual Seven: "Suggestibility/Fascination').setDescription(variants.filter(element => element.name == "sx7.txt")[0].content)],})
                else if(enneagram == "8") return interaction.reply({embeds: [embed.setTitle('The Sexual Eight: "Possession/Surrender').setDescription(variants.filter(element => element.name == "sx8.txt")[0].content)],})
                else if(enneagram == "9") return interaction.reply({embeds: [embed.setTitle('The Sexual Nine: "Union').setDescription(variants.filter(element => element.name == "sx9.txt")[0].content)],})
                else if(!enneagram) return interaction.reply({embeds: [embed.setTitle('Sexual variant').setDescription(variants.filter(element => element.name == "sx.txt")[0].content)],})
                else return interaction.reply("Invalid enneagram")
        }

		return interaction.reply('Pong!');
	},
};