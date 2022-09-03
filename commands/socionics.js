const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const socionics = [];
const socionicPaths = path.join(__dirname, '../socionicTypes');
const socionicFiles = fs.readdirSync(socionicPaths).filter(file => file.endsWith('.txt'));

for (const file of socionicFiles) {
	let info = fs.readFileSync(`/app/socionicTypes/${file}`).toString()
    socionics.push({
        name: file,
        content: info,
    })
}

//require embed
const {embed} = require("../embed.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("socionics")
        .setDescription("info about socionic type")
        .addSubcommand(subcommand =>
            subcommand
                .setName("ile")
                .setDescription("ENTp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of ILE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sei")
                .setDescription("ISFp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of SEI")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("ese")
                .setDescription("ESFj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of ESE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("lii")
                .setDescription("INTj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of LII")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sle")
                .setDescription("ESTp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of SLE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("iei")
                .setDescription("INFp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of SLE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("eie")
                .setDescription("ENFj")
                .addStringOption(option =>
                    option
                        .setName("subtypes")
                        .setDescription("subtype of EIE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("lsi")
                .setDescription("ISTj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of LSI")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("see")
                .setDescription("ESFp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of SEE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("ili")
                .setDescription("INTp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of ILI")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("lie")
                .setDescription("ENTj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of LIE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("esi")
                .setDescription("ISFj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of ESI")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("iee")
                .setDescription("ENFp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of IEE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("sli")
                .setDescription("ISTp")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of SLI")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("lse")
                .setDescription("ESTj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of LSE")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("eii")
                .setDescription("INFj")
                .addStringOption(option =>
                    option
                        .setName("subtype")
                        .setDescription("subtype of EII"))),
    async execute(interaction) {
        const socionicType = interaction.options._subcommand
        const subtype = interaction.options._hoistedOptions[0] ? interaction.options._hoistedOptions[0].value.toLowerCase() : null

        switch(socionicType){
            case "ile":
                if(subtype == "ti") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILE-Ti').setDescription(socionics.filter(element => element.name == "ILE-Ti.txt")[0].content)],})
                else if(subtype == "ne") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILE-Ne').setDescription(socionics.filter(element => element.name == "ILE-Ne.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILE Profile By Gulenko').setDescription(socionics.filter(element => element.name == "ILE.txt")[0].content)],})
            case "sei":
                if(subtype == "si") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEI-Si').setDescription(socionics.filter(element => element.name == "SEI-Si.txt")[0].content)],})
                else if(subtype == "fe") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEI-Fe').setDescription(socionics.filter(element => element.name == "SEI-Fe.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEI Profile By Gulenko').setDescription(socionics.filter(element => element.name == "SEI.txt")[0].content)],})
            case "ese":
                if(subtype == "fe") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESE-Fe').setDescription(socionics.filter(element => element.name == "ESE-Fe.txt")[0].content)],})
                else if(subtype == "si") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESE-Si').setDescription(socionics.filter(element => element.name == "ESE-Si.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESE Profile By Gulenko').setDescription(socionics.filter(element => element.name == "ESE.txt")[0].content)],})
            case "lii":
                if(subtype == "ti") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LII-Ti').setDescription(socionics.filter(element => element.name == "LII-Ti.txt")[0].content)],})
                else if(subtype == "ne") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LII-Ne').setDescription(socionics.filter(element => element.name == "LII-Ne.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LII Profile By Gulenko').setDescription(socionics.filter(element => element.name == "LII.txt")[0].content)],})
            case "sle":
                if(subtype == "se") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLE-Se').setDescription(socionics.filter(element => element.name == "SLE-Se.txt")[0].content)],})
                else if(subtype == "ti") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLE-Ti').setDescription(socionics.filter(element => element.name == "SLE-Ti.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLE Profile By Gulenko').setDescription(socionics.filter(element => element.name == "SLE.txt")[0].content)],})
            case "iei":
                if(subtype == "ni") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEI-Ni').setDescription(socionics.filter(element => element.name == "IEI-Ni.txt")[0].content)],})
                else if(subtype == "fe") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEI-Fe').setDescription(socionics.filter(element => element.name == "IEI-Fe.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEI Profile By Gulenko').setDescription(socionics.filter(element => element.name == "IEI.txt")[0].content)],})
            case "eie":
                if(subtype == "fe") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EIE-Fe').setDescription(socionics.filter(element => element.name == "EIE-Fe.txt")[0].content)],})
                else if(subtype == "ni") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EIE-Ni').setDescription(socionics.filter(element => element.name == "EIE-Ni.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EIE Profile By Gulenko').setDescription(socionics.filter(element => element.name == "EIE.txt")[0].content)],})
            case "lsi":
                if(subtype == "ti") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSI-Ti').setDescription(socionics.filter(element => element.name == "LSI-Ti.txt")[0].content)],})
                else if(subtype == "se") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSI-Se').setDescription(socionics.filter(element => element.name == "LSI-Se.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSI Profile By Gulenko').setDescription(socionics.filter(element => element.name == "LSI.txt")[0].content)],})
            case "see":
                if(subtype == "se") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEE-Se').setDescription(socionics.filter(element => element.name == "SEE-Se.txt")[0].content)],})
                else if(subtype == "fi") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEE-Fi').setDescription(socionics.filter(element => element.name == "SEE-Fi.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SEE Profile By Gulenko').setDescription(socionics.filter(element => element.name == "SEE.txt")[0].content)],})
            case "ili":
                if(subtype == "ni") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILI-Ni').setDescription(socionics.filter(element => element.name == "ILI-Ni.txt")[0].content)],})
                else if(subtype == "te") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILI-Te').setDescription(socionics.filter(element => element.name == "ILI-Te.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ILI Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "ILI.txt")[0].content)],})
            case "lie":
                if(subtype == "te") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LIE-Te').setDescription(socionics.filter(element => element.name == "LIE-Te")[0].content)],})
                else if(subtype == "ni") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LIE-Ni').setDescription(socionics.filter(element => element.name == "LIE-NNi.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LIE Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "LIE.txt")[0].content)],})
            case "esi":
                if(subtype == "fi") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESI-Fi').setDescription(socionics.filter(element => element.name == "ESI-Fi.txt")[0].content)],})
                else if(subtype == "se") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESI-Se').setDescription(socionics.filter(element => element.name == "ESI-Se.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('ESI Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "ESI.txt")[0].content)],})
            case "iee":
                if(subtype == "ne") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEE-NE').setDescription(socionics.filter(element => element.name == "IEE-Ne.txt")[0].content)],})
                else if(subtype == "fi") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEE-Fi').setDescription(socionics.filter(element => element.name == "IEE-Fi.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('IEE Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "IEE.txt")[0].content)],})
            case "sli":
                if(subtype == "si") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLI-Si').setDescription(socionics.filter(element => element.name == "SLI-Si.txt")[0].content)],})
                else if(subtype == "te") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLI-Te').setDescription(socionics.filter(element => element.name == "SLI-Te.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('SLI Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "SLI.txt")[0].content)],})
            case "lse":
                if(subtype == "te") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSE-Te').setDescription(socionics.filter(element => element.name == "LSE-Te.txt")[0].content)],})
                else if(subtype == "si") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSE-Si').setDescription(socionics.filter(element => element.name == "LSE-Si.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('LSE Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "LSE.txt")[0].content)],})
            case "eii":
                if(subtype == "fi") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EII-Fi').setDescription(socionics.filter(element => element.name == "EII-Fi.txt")[0].content)],})
                else if(subtype == "ne") return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EII-Ne').setDescription(socionics.filter(element => element.name == "EII-Ne.txt")[0].content)],})
                else if(subtype) return interaction.reply('invalid subtype');
                else return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('EII Profile By Gulenko)').setDescription(socionics.filter(element => element.name == "EII.txt")[0].content)],})
        }

        return interaction.reply('Pong!');
    },
}