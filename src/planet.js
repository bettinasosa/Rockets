class Moon {
    constructor(pos, vel) {
        this.mass = 1000;
        this.size = 50;
        this.pos = pos;
        this.vel = vel;
        this.acc = createVector(0, 0);
        this.maxVel = 10;
    }

    applyForce(force) {
        // this.acc.add(force / this.mass);
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.acc.mult(0);
        this.pos.add(this.vel);
    }

    render() {
        noStroke();
        fill(255);
        // ellipse(this.pos.x, this.pos.y, this.size, this.size);
        image(moonImage, this.pos.x, this.pos.y, this.size, this.size);
    }
}

class Planet {
    constructor() {
        this.mass = 50000;
        this.size = 230;
        this.pos = createVector(width / 2, height / 2);
        // rotateZ(millis(2) / 1000);
        this.angPos = 0;

        this.minSize = 220;
        this.maxSize = 230;
        this.sizeDelta = -0.05;
    }

    update() {}

    render() {
        this.size += this.sizeDelta;
        if (this.size <= this.minSize || this.size >= this.maxSize) {
            this.sizeDelta = this.sizeDelta * -1;
        }

        this.angPos += 0.0005;
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angPos);

        noStroke(0);
        fill(255);
        let imx = 0 - this.size / 2;
        let imy = 0 - this.size / 2;
        image(planetImage, imx, imy, this.size, this.size);
        //ellipse(this.pos.x, this.pos.y, this.size, this.size);

        pop();
    }
}
