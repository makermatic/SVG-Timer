//global var
let timer
let timerFont

function preload() {
  timerFont = loadFont("assets/passion.otf")
}

function setup() {
  createCanvas(600, 600)
  textFont(timerFont)
  timer = new Timer(30, 280, "white")
}

function draw() {
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
}

function keyTyped() {
  //empty function that gets called into memory
}