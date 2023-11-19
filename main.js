x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "apple.png";
speak_data = "";
draw_apple = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {

  apple = loadImage("apple.png") 

  to_number = Number(content);
  if(Number.isInteger(to_number));

  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(10000, 50000);
  canvas.center();
}
