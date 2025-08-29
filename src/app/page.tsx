import Image from "next/image";

export default function Home() {
  return (
    <section className="home fade-in">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className="profile-img scale-in"
      />
      <h1 className="slide-left delay-1">Muhammad Nadhif Pradita</h1>
      <p className="slide-right delay-2">Web Developer | UI/UX Enthusiast</p>
    </section>
  );
}
