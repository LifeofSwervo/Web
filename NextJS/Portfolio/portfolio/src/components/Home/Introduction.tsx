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
    /**
     * 
     
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
                radius: Math.random() * 5, 
                color: '#D2FDFF',
            }))
        }

        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = '#0C1618'
            c.fillRect(0, 0, canvas.width, canvas.height)
            particles.forEach((particle, index) => {
                // Places particles off element to the beginning of the screen.
                if(particle.position.y - particle.radius >= canvas.height) {
                    particle.position.x = Math.random() * canvas.width
                    particle.position.y = -particle.radius
                } else {
                    particle.update()
                }
            })
        }

        animate();
    })
    */

    return (
        <div style={introStyle}>
            <canvas style={canvasStyle}></canvas>
            <h1 style={headingStyle}>Nameless Dev</h1>
            <p style={textStyle}>I am Nameless Dev, a software engineer. This is my website. I am in college and working full time as a Mainframe Systems Developer currently.</p>
        </div>
    );
}

export default Introduction;