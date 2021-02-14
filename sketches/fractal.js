const { setupWindow, getBuffer, saveAsPNG } = require("../functions")

const w = 400, h = 400
setupWindow(w, h)

const p5 = require("p5")

module.exports = function () {
  return new Promise(resolve => {
    // Code is from:
    // The Coding Train
    // Fractal Trees (CC14)
    // https://thecodingtrain.com/CodingChallenges/014-fractaltree.html

    new p5((/** @type {p5} */p) => {
      let angle = 0.5
      p.setup = () => {
        p.createCanvas(w, h)
        p.background(51)
        p.stroke(255)
        p.translate(w / 2, h)
        branch(100)
        resolve(getBuffer(p))
        p.remove()
      }

      function branch(len) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);
        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(len * 0.67);
          p.pop();
          p.push();
          p.rotate(-angle);
          branch(len * 0.67);
          p.pop();
        }
      }
    })
  })
}
