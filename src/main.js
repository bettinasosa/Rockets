let rocket;
let rocketImage;
let rocketImage2;
let planetImage;
let moonImage;
let stars;
let planet;
let moon;

function preload() {
    rocketImage = loadImage("src/assets/rocket.png");
    rocketImage2 = loadImage("src/assets/rocket2.png");
    planetImage = loadImage("src/assets/planet.png");
    moonImage = loadImage("src/assets/moon.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    // image(img, 0, 0); // check rendering of image works
    rocket = new Rocket();

    stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }

    planet = new Planet();
    moon = new Moon(
        createVector(planet.pos.x, planet.pos.y - 400),
        createVector(1.0, 0)
    );
}

function getGravitationalAttraction(a, b) {
    const G = 500;
    const dir = p5.Vector.sub(a.pos, b.pos).normalize();
    const r = p5.Vector.sub(a.pos, b.pos).mag();
    // console.log(r);
    // console.log(a.mass);
    const force = G / r ** 2;
    const forceVec = dir.mult(force);
    // console.log(force);
    // console.log(forceVec);
    return forceVec;
}

function draw() {
    background(0);
    // background(0, 0, 0, 2);

    for (star of stars) {
        star.render();
    }

    planet.render();

    moon.applyForce(getGravitationalAttraction(planet, moon));
    moon.update();
    moon.render();

    rocket.update();
    rocket.render();
}
