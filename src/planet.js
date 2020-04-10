class Planet {
    constructor() {
        this.size = 80;
        this.pos = createVector(width / 3, height / 2);
    }

    render() {
        stroke(0);
        fill(0, 255, 0);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}
