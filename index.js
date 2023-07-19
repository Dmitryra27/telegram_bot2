const TelegramBot = require('node-telegram-bot-api');

const token = prosess.env.TOKEN;
const url = prosess.env.URL;

const bot = new TelegramBot(token, {polling: true});
const app_url = URL
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Для продолжения - нажмите на кнопку - Заполнить форму', {
            reply_markup: {
                "keyboard": [['Заполни форму'],["Start Button", "Second"],   ["Keyboard"], ["I'm robot"]]
            }
        });

        await bot.sendMessage(chatId, 'Для продолжения - нажмите на кнопку - Заполнить форму', {
            reply_markup: {
                "inline_keyboard": [[{text:'Перейти на сайт',web_app:{url:app_url}} ]]
            }
        });
    }

    const hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }
    const bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }


});

bot.onText(/\/help/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });

});



