import React from "react";
import { useEffect } from "react";

const introStyle: React.CSSProperties = {
    backgroundColor: '#0C1618',
    padding: "0% 10%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    height: "100vh",
    fontFamily: 'Poppins, ui-sans-serif',
}
const headingStyle: React.CSSProperties = {
    fontSize: "3em",
    marginBottom: "0.5em",
    color: "white",
    zIndex: 2,
}

const canvasStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
}

const textStyle: React.CSSProperties = {
   zIndex: 2, 
}

const Introduction = () => {
    useEffect(() => {
        const canvas : HTMLCanvasElement = document.querySelector('canvas')!;
        let c: CanvasRenderingContext2D = canvas.getContext('2d')!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        type ParticleProps = {
            position: { x: number, y: number },
            velocity: { x: number, y: number },
            radius: number,
            color: string,
        };

        class Particle {
            position: {x: number, y: number};
            velocity: {x: number, y: number};
            radius: number;
            color: string;
            opacity: number;

            constructor({ position, velocity, radius, color,}: ParticleProps) {
                this.position = position;
                this.velocity = velocity;
                this.radius = radius;
                this.color = color;
                this.opacity = 1;
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
            }
        }

        

        const particles: Particle[] = [];

        // Stars on Screen
        for (let i = 0; i < 100; i++) { // Creates 100 particles                                                                                                                                                                                  // Color or Invader hex color        
            particles.push(new Particle({ 
                position: {x: Math.random() * canvas.width, y: Math.random() * canvas.height},
                velocity: {x: 0, y: 0.3}, 
                radius: Math.random() * 2, 
                color: 'white',
            }))
        }

        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
            particles.forEach((particle, index) => {
                if (particle.position.y > canvas.height) {
                    particles.splice(index, 1)
                } else {
                    particle.update()
                }
            })
        }

        animate();
    })




    return (
        <div style={introStyle}>
            <canvas style={canvasStyle}></canvas>
            <h1 style={headingStyle}>Aspiring Software Engineer</h1>
            <p style={textStyle}>This is my website. I am an aspiring software engineer currently in college and working full time.</p>
        </div>
    );
}

export default Introduction;