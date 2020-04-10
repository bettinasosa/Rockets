class Rocket {
    constructor() {
        this.size = 30;
        this.pos = createVector(width / 2, height / 2);
        // this.vel = createVector(1, 1);
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.maxVel = 4;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    checkBoundaries() {
        let tol = 50;
        let f = 0.01;
        if (this.pos.x < tol) this.applyForce(createVector(f, 0));
        if (this.pos.x > width - tol) this.applyForce(createVector(-f, 0));
        if (this.pos.y < tol) this.applyForce(createVector(0, f));
        if (this.pos.y > height - tol) this.applyForce(createVector(0, -f));
        // if (this.pos.x < 0) this.pos.x = width;
        // if (this.pos.x > width) this.pos.x = 0;
        // if (this.pos.y < 0) this.pos.y = height;
        // if (this.pos.y > height) this.pos.y = 0;
    }

    update() {
        this.checkBoundaries();

        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.acc.mult(0);

        this.pos.add(this.vel);
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        // console.log(this.vel.heading());
        rotate(this.vel.heading());
        let imx = 0 - this.size / 2;
        let imy = 0 - this.size / 2;
        image(img, imx, imy, this.size, this.size);
        pop();
    }
}
