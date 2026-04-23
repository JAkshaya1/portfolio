import Section from '../components/Section';

const details = [
  { label: 'Name', value: 'Your Name' },
  { label: 'Phone Number', value: '+91 98765 43210' },
  { label: 'Personal Email', value: 'yourname@gmail.com' },
  { label: 'College Email', value: 'yourname@college.edu' },
];

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Responsive Design'];

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <img
          className="profile-pic"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
          alt="Profile"
        />
        <div>
          <h2>Hello, I am Akshaya</h2>
          <p>I enjoy building web applications and exploring practical AI solutions.</p>
        </div>
      </section>

      <Section title="About Me">
        <p>
          I am passionate about creating user-friendly web experiences and learning modern
          technologies. I like solving real-world problems through clean, maintainable code.
        </p>
      </Section>

      <Section title="Research Interests">
        <ul>
          <li>Human-Computer Interaction</li>
          <li>Applied Machine Learning</li>
          <li>Web Accessibility</li>
          <li>Data-driven Product Design</li>
        </ul>
      </Section>

      <div className="info-grid">
        <Section title="Personal Details">
          <ul className="details-list">
            {details.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
