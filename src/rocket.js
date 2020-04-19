class FireParticle {
    constructor(pos, vel) {
        this.size = 5;
        this.pos = pos;
        this.vel = vel;
        this.life = 255;
        this.colour = color(255, 0, 0, this.life);
    }
    done() {
        return this.life <= 0;
    }
    update() {
        this.life -= 15;
        this.colour.setGreen(255 - this.life);
        this.colour.setAlpha(this.life);
        this.pos.add(this.vel);
    }
    render() {
        noStroke();

        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}

class Rocket {
    constructor() {
        // this.size = 30;
        this.size = 50;
        this.pos = createVector(width / 4, height / 4);
        // this.vel = createVector(1, 1);
        this.vel = p5.Vector.random2D().normalize().mult(4);
        // this.vel.mult(0);
        this.acc = createVector(0, 0);
        this.maxVel = 8;

        this.flameXOffset = -0.37;
        this.flameYOffset = 0.07;
        this.fireParticles = [];
    }

    applyForce(force) {
        this.acc.add(force);
    }

    checkBoundaries() {
        let tol = 50;
        let f = 0.1;
        if (this.pos.x < tol) this.applyForce(createVector(f, 0));
        if (this.pos.x > width - tol) this.applyForce(createVector(-f, 0));
        if (this.pos.y < tol) this.applyForce(createVector(0, f));
        if (this.pos.y > height - tol) this.applyForce(createVector(0, -f));
        // if (this.pos.x < 0) this.pos.x = width;
        // if (this.pos.x > width) this.pos.x = 0;
        // if (this.pos.y < 0) this.pos.y = height;
        // if (this.pos.y > height) this.pos.y = 0;
    }

    addFire() {
        const yPos = this.flameYOffset * this.size;
        const numberOfParticles = 5;
        for (let i = 0; i < numberOfParticles; i++) {
            this.fireParticles.push(
                new FireParticle(
                    createVector(
                        this.flameXOffset * this.size,
                        random(-yPos, yPos)
                    ),
                    createVector(random(-5, -2), 0)
                )
            );
        }
    }

    update() {
        this.checkBoundaries();

        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.acc.mult(0);

        this.pos.add(this.vel);
        this.addFire();
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        // console.log(this.vel.heading());
        rotate(this.vel.heading());
        let imx = 0 - this.size / 2;
        let imy = 0 - this.size / 2;
        image(rocketImage2, imx, imy, this.size, this.size);

        // noStroke();
        // fill(255);
        // ellipse(
        //     this.flameXOffset * this.size,
        //     this.flameYOffset * this.size,
        //     10,
        //     10
        // );

        for (var i = this.fireParticles.length - 1; i >= 0; i--) {
            this.fireParticles[i].update();
            this.fireParticles[i].render();
            if (this.fireParticles[i].done()) {
                this.fireParticles.splice(i, 1);
            }
        }

        pop();
    }
}
