//global vars
let socket

let timer
let tFont
let seconds = 30
let fps = 60

function preload() {
  tFont = loadFont("assets/passion.otf")
}

function setup() {
  createCanvas(600, 600)
  textFont(tFont)
  timer = new Timer(seconds, 500, "white")

  socket = socket.io.connect("https://svgtimer.netlify.app/")
  socket.on('keyCode', newDrawing)
}

function draw() {
  var data = {
    thing: keyCode,
  }

  socket.emit (keyCode)
  
  clear() //<-- transparent bg

  //background/square setup 
  fill ("#9400FF")
  stroke ("white")
  strokeWeight(3)
  rect (0, 0, width, height)


  timer.display()
  
  //C key toggles timer
  if (keyTyped && keyCode === 67) {
    timer.go()
  //Any other key stops timer
  } else if (keyTyped) {
    timer.stop()
  }

  if (keyTyped && keyCode === 32) {
    timer.reset()
  }
}

function keyTyped() {
  //empty function that gets called into memory
}