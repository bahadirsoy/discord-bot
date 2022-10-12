module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity(`/help in ${client.guilds.cache.size} servers`);
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};