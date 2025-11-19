import React from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { useCallback } from 'react';

export default function StarfieldBackground() {
  const particlesInit = useCallback(async (engine) => {
    // Load the stars preset for tsparticles
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'stars',
        background: {
          color: {
            value: "#0b0d17", // Match your galaxy background
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 0, // So it appears behind content but above page background
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#bfcfff" },
          opacity: {
            value: 0.5,
            random: { enable: true, minimumValue: 0.1 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: { enable: true, minimumValue: 0.5 },
          },
          move: {
            enable: false, // Stars gently twinkle but do not move
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.02,
              opacity: 1,
            },
            lines: {
              enable: false,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        // Add shooting stars effect
        emitters: [
          {
            direction: "top-right",
            spawnColor: {
              value: "#ffffff",
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
            },
            rate: {
              quantity: 1,
              delay: 7, // one shooting star every ~7 seconds
            },
            size: {
              width: 0,
              height: 0,
            },
            life: {
              count: 1,
              duration: 2,
              delay: 3,
            },
            position: {
              x: 0,
              y: 100,
            },
            particles: {
              shape: "line",
              size: {
                value: 150,
                animation: {
                  enable: true,
                  speed: 220,
                  minimumValue: 50,
                  sync: true,
                  startValue: "max",
                  destroy: "min",
                },
              },
              move: {
                direction: "top-right",
                speed: 400,
                straight: true,
                outModes: {
                  default: "destroy",
                },
              },
              trail: {
                enable: true,
                length: 60,
                fillColor: "#0b0d17",
              },
            },
          },
        ],
      }}
    />
  );
}
