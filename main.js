camera=document.getElementById("camera").value;

Webcam.set({
width:250,
height:300,
image_format:'png',
image_quality:90
});
Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image_capture" src="' + data_uri +'"</img>';
})
}

classifier = ml5.Imageclassifier("https://teachablemachine.withgoogle.com/models/dV-SRxNGa/",modelLoaded());