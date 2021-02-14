const Discord = require("discord.js")
require('dotenv').config()
const client = new Discord.Client()

const text = require("./sketches/text")
const fractal = require("./sketches/fractal")

const prefix = "!p5"
client.on("message", async message => {
  if (message.author.id == client.user.id) return
  const tokens = message.content.split(/\s+/)
  if (tokens[0] !== prefix) return
  const command = tokens[1]
  const args = tokens.slice(2)
  try {
    switch (command) {
      case "text": {
        const buffer = await text(args[0])
        message.channel.send(new Discord.MessageAttachment(buffer))
        break
      }
      case "fractal": {
        const buffer = await fractal()
        message.channel.send(new Discord.MessageAttachment(buffer))
      }
    }
  } catch { console.log("EROR") }
})

client.login(process.env.BOT_TOKEN)