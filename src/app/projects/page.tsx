export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Website pribadi menggunakan Next.js" },
    { title: "Todo App", desc: "Aplikasi manajemen tugas dengan React" },
    { title: "E-Commerce UI", desc: "Desain UI modern untuk toko online" },
  ];

  return (
    <section>
      <h2 className="fade-in">Projects</h2>
      <div className="projects">
        {projects.map((p, i) => (
          <div key={p.title} className={`card scale-in delay-${i + 1}`}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
