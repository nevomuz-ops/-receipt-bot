import telebot
import requests
import os

TOKEN = "8833780565:AAGsEeHf9f0OSrdaRE8OMUInd0qA-AiJTAw"

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, "Chek rasmini yuboring")

@bot.message_handler(content_types=['photo'])
def photo(message):
    bot.reply_to(message, "Rasm keldi")

bot.infinity_polling()