const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("Ammukutty-2.0.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Ammukutty-2.0 bot created by ᴄʏʙᴇʀ㊌ᴊᴀᴄᴋ*
*Creator number : wa.me/917994922550?text=Hi%20Cyber%20Jack.%20*

*Bot setting video : https://youtu.be/_D4ZYuUSXjs*

*Githublink (Setup)  :    https://github.com/cyberjack17/Ammukutty-2.0*

*Audio commads :   https://github.com/cyberjack17/Ammukutty-2.0/tree/master/uploads*

*Sticker commads : https://github.com/cyberjack17/Ammukutty-2.0/tree/master/uploads*
 

`}) 

}));
