"use client";

import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  return (
    <Particles
      id="particles"
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: "#3b82f6",
          },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
}