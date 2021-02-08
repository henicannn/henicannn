var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
    createCanvas(w, h, WEBGL);
    c1 = color(200);
    c2 = color(255, 255, 255);

    for (let y = 0; y < height; y++) {
        n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }
}

function draw() {
    background(37, 41, 52);
    rotateY(frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
        push();
        for (let i = 0; i < 80; i++) {
            translate(
                sin(frameCount * 0.001 + j) * 100,
                sin(frameCount * 0.001 + j) * 100,
                i * 0.1
            );
            rotateZ(frameCount * 0.002);
            push();
            sphere(1, 1, 1);
            pop();
            // fill(25, 80, 60, 0.1)
        }
        pop();
    }
}

window.onresize = function() {
    // assigns new values for width and height variables
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.size(w, h);
}