const TelegramBot = require("node-telegram-bot-api");

const token = "8785505793:AAEBbWlToT6o6KRh-fhr2QJ63mSexM5vS9g";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.photo) {
    bot.sendMessage(chatId, "📄 Chek qabul qilindi. Hozircha test ishlayapti.");
  }

  if (msg.text === "/start") {
    bot.sendMessage(chatId, "👋 Bot ishladi. Chek rasmini yuboring.");
  }
});