function preload() {
    img=loadImage('https://image.pexels.com/photos/128756/pexels-photo-128756.jpeg?autp=compress&cs=tinysrgb&dpr=1&w=500')
}

canvas = createCanvas(300, 300);

function draw() {
circle(30, 30, 20);
ellipse(56, 46, 55, 55);
rect(30, 20, 55, 55);
  }
  

function takeSnapshot() {
    save("myFilterImage.png");
  }

