//https://teachablemachine.withgoogle.com/models/BAFVV4mLk/

function StartClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BAFVV4mLk/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log(results);
    document.getElementById("sound_hear").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("accurate").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2);

    img_1=document.getElementById("green");
    img_2=document.getElementById("blue");
    img_3=document.getElementById("pink");
    img_4=document.getElementById("light");
    if(results[0].label=="Clap"){
        img_1.src='aliens-01.gif';
        img_2.src='aliens-02.png';
        img_3.src='aliens-03.png';
        img_4.src='aliens-04.png';
    }
    if(results[0].label=="Laugh"){
        img_1.src='aliens-01.png';
        img_2.src='aliens-02.gif';
        img_3.src='aliens-03.png';
        img_4.src='aliens-04.png';
    }

    if(results[0].label=="Background Noise"){
        img_1.src='aliens-01.png';
        img_2.src='aliens-02.png';
        img_3.src='aliens-03.gif';
        img_4.src='aliens-04.png';
    }

    if(results[0].label=="Birthday sound"){
        img_1.src='aliens-01.png';
        img_2.src='aliens-02.png';
        img_3.src='aliens-03.png';
        img_4.src='aliens-04.gif';
    }
}


