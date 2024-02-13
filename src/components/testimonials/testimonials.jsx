import "./testimonials.scss";
import pentool from "../../images/pentool.png";
import codingicon from "../../images/codingicon.jpeg";
import marketing from "../../images/marketing.png";

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
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
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