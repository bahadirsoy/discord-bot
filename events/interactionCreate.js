module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an ${interaction.guild} interaction.`);
		console.log(`\nInteraction is created by: ${interaction.user.tag}\nChannel name: ${interaction.channel.name}\nCreated at: ${interaction.createdAt}\n`);
	},
};