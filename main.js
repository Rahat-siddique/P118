function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j1QhA2yva//model.json',modelLoaded) 
}

function modelLoaded() {
    console.log('Model Loaded');
}

function draw() {
    any(video, 0, 0, 300, 300);
    classifier.classify(video, getResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log (results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.tofixed(3);
    }
}