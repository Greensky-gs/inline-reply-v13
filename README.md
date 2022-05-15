# inline-reply-v13
Create an easier inline reply with discord.js v13

## Usage
To use the inline reply, use it like this :
```js
const { reply } = require('./functions.js');

client.on('messageCreate', message => {
  if (message.content.toLowerCase() == "hello") reply(message, `Hello <@${message.author.id}>`);
});
```

## Errors
If you encounter any error, please contact me on [this discord server](https://discord.gg/fHyN5w84g6)
