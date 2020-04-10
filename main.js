let rocket;
let img;
let stars;
let planet;

function preload() {
    img = loadImage("./rocket.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // image(img, 0, 0); // check rendering of image works
    rocket = new Rocket();

    stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }

    planet = new Planet();
}

function draw() {
    background(0);
    rocket.update();
    rocket.render();
    for (star of stars) {
        star.render();
    }
    planet.render();
}
