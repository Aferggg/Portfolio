import React, { useEffect, useRef } from "react";
import "./testimonials.scss";
import pentool from "../../images/pentool.png";
import codingicon from "../../images/codingicon.jpeg";
import marketing from "../../images/marketing.png";
import colorful from "../../images/colorful.jpeg";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Graphic Design",
      img: pentool,
      desc:
        "With over 15 years of extensive experience in graphic design and UX/UI, I am deeply passionate about creating impactful and intuitive designs.",
    },
    {
      id: 2,
      name: "Software Development",
      img: codingicon,
      desc:
        "My drive for creative problem-solving, coupled with my background in design and marketing, enables me to approach challenges from an alternative and innovative standpoint yielding cohesive strategies that facilitate cross-team collaboration and alignment across projects and frameworks.",
      featured: true,
    },
    {
      id: 3,
      name: "Strategic Marketing",
      img: marketing,
      desc:
        "I specialize in crafting unique solutions by distilling projects to their core, allowing for intentional design that maximizes impact.",
    },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set initial state: fill canvas with white color
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = colorful;

    img.onload = function () {
      // Draw the image initially
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    };

    img.onerror = function () {
      console.error("Error loading image");
    };

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect(); // Get the position of the canvas
      const x = event.clientX - rect.left; // Calculate the x-coordinate of the cursor relative to the canvas
      const y = event.clientY - rect.top; // Calculate the y-coordinate of the cursor relative to the canvas
    
      ctx.globalCompositeOperation = "destination-out"; // Set the operation to reveal the image
    
      // Stamp parameters
      const stampSize = 4; // Size of each pixel stamp
      const maxDistance = 250; // Maximum distance from center for full stamp density
    
      // Draw pixels in a circular pattern around the cursor position
      for (let i = 0; i < maxDistance; i++) {
        const density = (maxDistance - i) / maxDistance; // Calculate density based on distance from center
        const densityFactor = Math.floor(density * 3); // Scale density to adjust pixel density
        for (let j = 0; j < densityFactor; j++) {
          const angle = (Math.random() * Math.PI * 2); // Random angle for each pixel
          const offsetX = Math.cos(angle) * i; // Calculate x offset
          const offsetY = Math.sin(angle) * i; // Calculate y offset
          const stampX = x + offsetX; // Calculate pixel x-coordinate
          const stampY = y + offsetY; // Calculate pixel y-coordinate
    
          // Draw a stamp pixel
          ctx.fillRect(stampX, stampY, stampSize, stampSize);
        }
      }
    }
    
    

    function handleResize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      ctx.fillStyle = "white"; // Set canvas to white on resize
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the resized canvas with white color
    }

    function handleClick() {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Set fill color to transparent
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas
    
      ctx.globalCompositeOperation = 'source-over'; // Set the operation to draw the image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image
    }
    
    canvas.addEventListener('click', handleClick); // Add click event listener
    canvas.addEventListener("mousemove", handleMouseMove); // Use canvas instead of window for mousemove event
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize

    // Clean up event listeners on unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="testimonials" id="testimonials">
      <canvas ref={canvasRef} className="canvas-background"></canvas>
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div
            className={d.featured ? "card featured" : "card"}
            style={{ backgroundColor: "white" }}
            key={d.id}
          >
            <div className="top">
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
