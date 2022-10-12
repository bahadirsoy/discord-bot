module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity(`/help`);
		console.log(`Ready! Logged in as ${client.user.tag}, Server count = ${client.guilds.cache.size}`);
	},
};