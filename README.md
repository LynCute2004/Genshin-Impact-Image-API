# INFO
- A simple API Discord get image Genshin Impact. 
- Author: LynCute2004
- API is updating (current version API is basic). Contact me if you want contribute to my API. My server: [Click Here!](https://discord.gg/6TZVye2G3E)
- Made with ❤️ GI.
- Thanks for using my API >3

# GET API

API website: https://api-genshin.tk/

# USAGE

- You can use `node-fetch` or `axios` package to fetch URL image. Ex for `node-fetch`
``` js
        const res = await fetch('https://api-genshin.tk/gi-image');
        const img = (await res.json()).url;

        const embed = new MessageEmbed()
          .setTitle("Genshin Impact)
          .setImage(img)
          .setTimestamp()
          .setColor("RANDOM")
          message.reply({embeds: [embed]});
    }
}
```
# PREVIEW
![image](https://user-images.githubusercontent.com/52123370/154835816-9ea1c409-ca89-4d05-b967-1d3fa86b8230.png)



