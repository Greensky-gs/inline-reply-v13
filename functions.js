const { Message, MessageEmbed, MessageActionRow } = require('discord.js');

module.exports = {
  /**
    * @param {Message} message
    * @param {String | MessageEmbed} content
    * @param {MessageActionRow} row
    */
  reply: async(message, content, row) => {
    let data = { reply: { messageReference: message }};
    
    if (typeof content == "string") data.content = content;
    else data.embeds = [ content ];
    
    if (row !== undefined) data.components = [ row ];
    
    return await message.channel.send(data).catch(() => {}); 
  }
};
