import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
        particles: {
            number: {
                value: 28,
                density: {
                    enable: true,
                    value_area: 392,
                },
            },
            color: {
                value: "#f7d002",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#D2FDFF",
                },
                polygon: {
                    nbSides: 5,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#4B244A",
                opacity: 1,
                width: 5,
            },
            links: {
                enable: true,
                distance: 300,
                color: "#4B244A",
                opacity: 0.9,
                width: 1,
              },
            move: {
                enable: true,
                direction: "none",
                random: true,
                speed: 3,
                straight: false,
                outMode: "out",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                }
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opactiy: 8,
                    speed: 3
                },
                repulse: {
                    distance: 75,
                    duration: 0.4,
                },
                push: {
                    quantity: 2,
                },
                remove: {
                    particles_nb: 2,
                }
            },
        },
        detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;