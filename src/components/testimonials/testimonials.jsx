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

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = colorful;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    };

    img.onerror = function () {
      console.error("Error loading image");
    };

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left; 
      const y = event.clientY - rect.top; 
    
      ctx.globalCompositeOperation = "destination-out"; 

      const stampSize = 4; 
      const maxDistance = 250; 
      for (let i = 0; i < maxDistance; i++) {
        const density = (maxDistance - i) / maxDistance; 
        const densityFactor = Math.floor(density * 3); 
        for (let j = 0; j < densityFactor; j++) {
          const angle = (Math.random() * Math.PI * 2); 
          const offsetX = Math.cos(angle) * i; 
          const offsetY = Math.sin(angle) * i; 
          const stampX = x + offsetX; 
          const stampY = y + offsetY; 
    
          ctx.fillRect(stampX, stampY, stampSize, stampSize);
        }
      }
    }

    function handleResize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      ctx.fillStyle = "white"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height); 
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function handleClick() {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height); 
    
      ctx.globalCompositeOperation = 'source-over'; 
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
    canvas.addEventListener('click', handleClick); 
    canvas.addEventListener("mousemove", handleMouseMove); 
    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="testimonials" id="testimonials">
      <canvas ref={canvasRef} className="canvas-background"></canvas>
      <div className="container">
        {data.map((d) => (
          <div
            className={d.featured ? "card featured" : "card"}
            style={{ backgroundColor: "white" }}
            key={d.id}
          >
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            <div className="center">{d.desc}</div>
            <div className="bottom">
            </div>
            <div className="top">
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
