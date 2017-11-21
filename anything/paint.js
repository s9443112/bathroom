const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(128, 64)
const ctx = canvas.getContext('2d')
var fs = require('fs');

// Write "Awesome!"
ctx.fillStyle = '#000'    
ctx.fillRect(0, 0,128,5);
ctx.fillRect(0, 0,5,64);
ctx.fillRect(0, 59,128,5);
ctx.fillRect(123, 0,5,64);
ctx.save();    
 

 
//畫文字
/*
ctx.fillStyle = "#000";
ctx.font = "14px Arial";
ctx.fillText("Hello World", 20, 20);

console.log(canvas.toBuffer())
*/



/*
fs.writeFile("writefile1.c", canvas.toBuffer(), function(err) {
  if(err) {
      console.log(err);
  } else {
      console.log("The file was saved!");
  }
});
*/
var out = fs.createWriteStream(__dirname + '/image.bmp')
, stream = canvas.createPNGStream();

stream.on('data', function(chunk){
    out.write(chunk);
  });