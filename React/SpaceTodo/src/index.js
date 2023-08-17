const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor({position, velocity, radius, color, fades}) {
        this.position = position
        this.velocity = velocity

        this.radius = radius
        this.color = color
        this.opacity = 1
        this.fades = fades
    }

    draw() {
        c.save()
        c.globalAlpha = this.opacity
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
        c.restore()
    }

    movement() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        this.movement();


        if (this.fades) this.opacity -= 0.01
    }
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle({position: {x: Math.random() * canvas.width, y: Math.random() * canvas.height}, velocity: {x: 0, y: 5.3}, radius: Math.random() * 2, color: 'white'}))
}

function runParticles() {
    particles.forEach((particle, i) => {
        // Particle Constraints
        if (particle.position.y - particle.radius >= canvas.height) {
            particle.position.x = Math.random() * canvas.width
            particle.position.y = -particle.radius
        }

        // Destroys particles after their opacity has been lowered to 0
        if (particle.opacity <= 0) {
            setTimeout(() => {
                particles.splice(i, 1)
            }, 0)
        } else {
            particle.update()
        }
    })
}

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    runParticles();
    console.log('test')
}



const interval = setInterval(draw,10)