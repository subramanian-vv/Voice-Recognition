function listen() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(canvas.width/2 - 100,canvas.height/2 - 100,100,100);

    recognition.onresult = function(event) {
        document.getElementById('transcript').innerText = 'Spoken word: ' + event.results[0][0].transcript;
        if(event.results[0][0].transcript == "move down") {

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(canvas.width/2 - 100,canvas.height/2,100,100);

        } else if(event.results[0][0].transcript == "move up") {
            
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(canvas.width/2 - 100,canvas.height/2 - 200,100,100);

        } else if(event.results[0][0].transcript == "move left") {
            
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(canvas.width/2 - 300,canvas.height/2 - 100,100,100);

        } else if(event.results[0][0].transcript == "move right") {
            
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillRect(canvas.width/2 + 100,canvas.height/2 - 100,100,100);

        } else {
            
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = event.results[0][0].transcript.split(" ").join("");
            ctx.fillRect(canvas.width/2 - 100,canvas.height/2 - 100,100,100);
            
        }
    }

    recognition.start();
}

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(canvas.width/2 - 100,canvas.height/2 - 100,100,100);

//Resize the canvas based on screen resolution
window.addEventListener('resize', function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.fillStyle = 'red';
    ctx.fillRect(canvas.width/2 - 100,canvas.height/2 - 100,100,100);
});