const { setupWindow, getBuffer, saveAsPNG } = require("../functions")

const w = 400, h = 400
setupWindow(w, h)

const p5 = require("p5")

// Shows Text on the screen
module.exports = function (name = "Sample Text") {
  return new Promise(resolve => {
    new p5(p => {
      p.setup = () => {
        p.createCanvas(w, h)
        p.background(0)
        p.fill(255)
        p.textAlign(p.CENTER, p.CENTER)
        p.textSize(40)
        p.text(name, w / 2, h / 2)
        resolve(getBuffer(p))
        p.remove()
      }
    })
  })
}

