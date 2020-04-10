class Star {
    constructor() {
        this.pos = createVector(random(0, width), random(0, height));
        this.size = random(0, 3);
        this.colour = random(0, 255);
        this.rate = random(0.1, 1);
    }

    render() {
        if (this.rate > 0) {
            this.colour += this.rate;
            if (this.colour > 255) this.rate = -this.rate;
            this.colour = constrain(this.colour, 0, 255);
        } else {
            this.colour += this.rate;
            if (this.colour < 0) this.rate = -this.rate;
            this.colour = constrain(this.colour, 0, 255);
        }

        fill(this.colour);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}
