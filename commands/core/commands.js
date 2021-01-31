module.exports = {
    name: 'commands',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}commands',

    execute(client, message) {
        message.channel.send(`You can use this commands with prefix !: help, code, debug, ping, clear-queue, filter, loop, nowplaying, pause, queue, resume, shuffle, skip, stop and volume!`);
    },
};