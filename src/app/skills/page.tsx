import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "JavaScript", icon: <FaJsSquare className="icon js" /> },
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "Next.js", icon: <SiNextdotjs className="icon next" /> },
    { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  ];

  return (
    <section className="fade-in">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((s, i) => (
          <div key={s.name} className={`skill-item scale-in delay-${i + 1}`}>
            {s.icon}
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
