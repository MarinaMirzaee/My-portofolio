import { site } from "../data/content";
import useTyping from "../hooks/useTyping";
import profilePhoto from "../assets/image.png";

export default function Hero() {
  const typedRole = useTyping(site.role);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="tag">HELLO, I'M</p>
        <h1>
          Marina
          <br />
          <span>Mirzaee.</span>
        </h1>

        {/* the full title is announced to screen readers while it is being typed */}
        <h2 className="typing" aria-label={site.role}>
          {typedRole}
        </h2>

        <p className="description">
          I build responsive, modern, and user-friendly websites. I enjoy
          learning new technologies and turning creative ideas into beautiful
          web experiences.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View My Projects ↗
          </a>
          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="profile-card">
        <div className="photo-container">
          <img
            id="profileImage"
            src={profilePhoto}
            alt={`${site.name}, ${site.role}`}
            width="1000"
            height="1000"
            fetchPriority="high"
          />
        </div>

        <p className="availability">
          <span className="dot" /> Open to opportunities
        </p>
      </div>
    </section>
  );
}
