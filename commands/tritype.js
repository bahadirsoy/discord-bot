const { SlashCommandBuilder } = require('discord.js');

const fs  = require("fs");
const path = require('node:path');

const tritypes = [];
const tritypePaths = path.join(__dirname, '../tritypes');
const tritypeFiles = fs.readdirSync(tritypePaths).filter(file => file.endsWith('.txt'));

for (const file of tritypeFiles) {
	let info = fs.readFileSync(`/app/tritypes/${file}`).toString()
    tritypes.push({
        name: file,
        content: info,
    })
}

//require embed
const {embed} = require("../embed.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('tritype')
		.setDescription('Tritype description')
        .addSubcommand(subcommand =>
            subcommand
                .setName('125')
                .setDescription('125, 152, 215, 251, 512, 521'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('126')
                .setDescription('126, 162, 216, 261, 612, 621'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('127')
                .setDescription('127, 172, 217, 271, 712, 721'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('135')
                .setDescription('135, 153, 315, 351, 513, 531'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('136')
                .setDescription('136, 163, 316, 361, 613, 631'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('137')
                .setDescription('137, 173, 317, 371, 713, 731'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('145')
                .setDescription('145, 154, 415, 451, 514, 541'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('146')
                .setDescription('146, 164, 416, 461, 614, 641'))
        /*.addSubcommand(subcommand =>
            subcommand
                .setName('147')
                .setDescription('147, 174,  417, 471, 714, 741'))*/
        /*.addSubcommand(subcommand =>
            subcommand
                .setName('258')
                .setDescription('258, 285, 528, 582, 825, 852'))*/
        .addSubcommand(subcommand =>
            subcommand
                .setName('259')
                .setDescription('259, 295, 529, 592, 925, 952'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('268')
                .setDescription('268, 286, 628, 682, 826, 862'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('269')
                .setDescription('269, 296, 629, 692, 926, 962'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('278')
                .setDescription('278, 287, 728, 782, 827, 872'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('279')
                .setDescription('279, 297, 729, 792, 927, 972'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('358')
                .setDescription('358, 385, 538, 583, 835, 853'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('359')
                .setDescription('359, 395, 539, 593, 935, 953'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('368')
                .setDescription('368, 386, 638, 683, 836, 863'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('369')
                .setDescription('369, 396, 639, 693, 936, 963'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('378')
                .setDescription('378, 387, 738, 783, 837, 873'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('379')
                .setDescription('379, 397, 739, 793, 937, 973'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('458')
                .setDescription('458, 485, 548, 584, 845, 854'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('459')
                .setDescription('459, 495, 549, 594, 945, 954'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('468')
                .setDescription('468, 486, 648, 684, 846, 864'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('469')
                .setDescription('469, 496, 649, 694, 946, 964'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('478')
                .setDescription('478, 487, 748, 784, 847, 874'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('479')
                .setDescription('479, 497, 749, 794, 947, 974')),
	async execute(interaction) {
        const tritype = interaction.options._subcommand

        switch(tritype){
            case "125": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('125, 152, 215, 251, 512, 521- The Mentor').setDescription(tritypes.filter(element => element.name == "125.txt")[0].content)],});
            case "126": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('126, 162, 216, 261, 612, 621- The Supporter').setDescription(tritypes.filter(element => element.name == "126.txt")[0].content)],});
            case "127": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('127, 172, 217, 271, 712, 721- The Teacher').setDescription(tritypes.filter(element => element.name == "127.txt")[0].content)],});
            case "135": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('135, 153, 315, 351, 513, 531- The Technical Expert').setDescription(tritypes.filter(element => element.name == "135.txt")[0].content)],});
            case "136": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('136, 163, 316, 361, 613, 631- The Taskmaster').setDescription(tritypes.filter(element => element.name == "136.txt")[0].content)],});
            case "137": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('137, 173, 317, 371, 713, 731- The Systems Builder').setDescription(tritypes.filter(element => element.name == "137.txt")[0].content)],});
            case "145": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('145, 154, 415, 451, 514, 541- The Researcher').setDescription(tritypes.filter(element => element.name == "145.txt")[0].content)],});
            case "146": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('146, 164, 416, 461, 614, 641- The Philosopher').setDescription(tritypes.filter(element => element.name == "146.txt")[0].content)],});
            //case "147": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('125, 152, 215, 251, 512, 521- The Mentor').setDescription(tritypes.filter(element => element.name == "147.txt")[0].content)],});
            //case "258": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('125, 152, 215, 251, 512, 521- The Mentor').setDescription(tritypes.filter(element => element.name == "258.txt")[0].content)],});
            case "259": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('259, 295, 529, 592, 925, 952- The Problem Solver').setDescription(tritypes.filter(element => element.name == "259.txt")[0].content)],});
            case "268": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('268, 286, 628, 682, 826, 862- The Rescuer').setDescription(tritypes.filter(element => element.name == "268.txt")[0].content)],});
            case "269": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('269, 296, 629, 692, 926, 962- The Good Samaritan').setDescription(tritypes.filter(element => element.name == "269.txt")[0].content)],});
            case "278": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('278, 287, 728, 782, 827, 872- The Free Spirit').setDescription(tritypes.filter(element => element.name == "278.txt")[0].content)],});
            case "279": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('279, 297, 729, 792, 927, 972- The Peacemaker').setDescription(tritypes.filter(element => element.name == "279.txt")[0].content)],});
            case "358": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('358, 385, 538, 583, 835, 853- The Solution Master').setDescription(tritypes.filter(element => element.name == "358.txt")[0].content)],});
            case "359": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('359, 395, 539, 593, 935, 953- The Thinker').setDescription(tritypes.filter(element => element.name == "359.txt")[0].content)],});
            case "368": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('368, 386, 638, 683, 836, 863- The Justice Fighter').setDescription(tritypes.filter(element => element.name == "368.txt")[0].content)],});
            case "369": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('369, 396, 639, 693, 936, 963- The Mediator').setDescription(tritypes.filter(element => element.name == "369.txt")[0].content)],});
            case "378": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('378, 387, 738, 783, 837, 873- The Mover Shaker').setDescription(tritypes.filter(element => element.name == "378.txt")[0].content)],});
            case "379": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('379, 397, 739, 793, 937, 973- The Ambassador').setDescription(tritypes.filter(element => element.name == "379.txt")[0].content)],});
            case "458": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('458, 485, 548, 584, 845, 854- The Scholar').setDescription(tritypes.filter(element => element.name == "458.txt")[0].content)],});
            case "459": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('459, 495, 549, 594, 945, 954- The Contemplative').setDescription(tritypes.filter(element => element.name == "459.txt")[0].content)],});
            case "468": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('468, 486, 648, 684, 846, 864- The Truth Teller').setDescription(tritypes.filter(element => element.name == "468.txt")[0].content)],});
            case "469": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('469, 496, 649, 694, 946, 964- The Seeker').setDescription(tritypes.filter(element => element.name == "469.txt")[0].content)],});
            case "478": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('478, 487, 748, 784, 847, 874- The Messenger').setDescription(tritypes.filter(element => element.name == "478.txt")[0].content)],});
            case "479": return interaction.reply({embeds: [EmbedBuilder.from(embed).setTitle('479, 497, 749, 794, 947, 974- The Gentle Spirit').setDescription(tritypes.filter(element => element.name == "479.txt")[0].content)],});
        }
	},
};