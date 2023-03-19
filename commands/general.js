/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `JANIYA-MD WHATSAPP BOT
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* https://github.com/Janiyaofficial/JANIYAJK-MD
*Group:* secktorbot.tech/support
*Deploy Your Own:*-
 JaniyaBot.tech/youtube`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Janiya-Repo",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const dbut = [{
                buttonId: `${prefix}help`,
                buttonText: {
                    displayText: "Menu",
                },
                type: 1,
            },

            {
                buttonId: `${prefix}rank`,
                buttonText: {
                    displayText: "Rank",
                },
                type: 1,
            },
        ];
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* The Janiya MD WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*👤Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            buttons: dbut,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
-------//--------------------------------------------------------------------

cmd({

            pattern: "downcmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "⬇️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .song

ℹ️ *Description:-* Song Download From Youtube

🔥 *Help:-* .song ලෙලෙනා

📟 *Command:-* .video

ℹ️ *Description:-* Video Download From Youtube

🔥 *Help:-* .video නේනා

📟 *Command:-* .tgs

ℹ️ *Description:-* Download Telegram Stickers

🔥 *help:-* .tga Enter Telegram Sticker Url 

📟 *Command:-* .ytmp4

ℹ️ *Description:-* Download Video Youtube Link

🔥 *Help:-* .ytmp4 Enter Youtube Video Url

📟 *Command:-* .ytmp3

ℹ️ *Description:-* Download Songs Youtube Link

🔥 *Help:-* .ytmp3 Enter Youtube Video Url

📟 *Command:-* .ytdoc

ℹ️ *Description:-* Song Download Form Youtube Document

🔥 *Help:-* ytdoc Enter Youtube Video Url

📟 *Command:-* .mediafire

ℹ️ *Description:-* Download Content From Mediafire Link

🔥 *Help:-* .mediafire Enter Mediafire Url

📟 *Command:-* .yts

ℹ️ *Description:-* Search Youtube Videos

🔥 *Help:-* .yts ලෙලෙනා

📟 *Command:-* .findvideo

ℹ️ *Description:-* short video mention and get information

🔥*Help:-* .findvideo Mention a short video

📟 *Command:-* .findsong

ℹ️ *Description:-* find song from short song chip

🔥 *Help:-* .findsong tag short song chip

📟 *Command:-* .mp4down

ℹ️ *Description:-* download mp4

🔥 *Help:-* .mp4down give me a video link

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }
    


      ',

    

         

            

                 

             

             

                

        

           

            

         
      
           

 

         

            

                    

                   

                    

                   

                   

               
                  

                    

                    
  

           

                  

           
    


