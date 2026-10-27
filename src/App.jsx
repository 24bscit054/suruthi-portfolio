import './App.css'

const skills = [
  {
    number: '01',
    name: 'HTML',
    description: 'Creating structured and meaningful web page content.',
  },
  {
    number: '02',
    name: 'CSS',
    description: 'Designing layouts, colors and responsive web pages.',
  },
  {
    number: '03',
    name: 'JavaScript',
    description: 'Learning to make websites interactive and dynamic.',
  },
  {
    number: '04',
    name: 'React.js',
    description: 'Building interfaces with reusable UI components.',
  },
]

const projects = [
  {
    number: '01',
    name: 'Personal Portfolio',
    type: 'PERSONAL PROJECT',
    description:
      'A personal website introducing me, showcasing my skills and projects, and providing ways to contact me.',
    technologies: ['React.js', 'CSS', 'Responsive Design'],
    status: 'Portfolio website',
  },
  {
    number: '02',
    name: 'Weather App',
    type: 'LEARNING PROJECT',
    description:
      'A weather application project to practise React components and learn how to display weather information using a weather API.',
    technologies: ['React.js', 'JavaScript', 'Weather API'],
    status: 'Learning project',
  },
]

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to home">
          SP<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>Hi, I'm <span>Suruthi P.</span></h1>
            <h2>Frontend Developer</h2>

            <p className="hero-description">
              I enjoy creating clean, user-friendly web experiences and
              continuously improving my web development skills.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <p className="hero-note">
              <span className="note-line" />
              B.Sc Information Technology
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-monogram">S<span>.</span></div>

            <div className="floating-card card-top">
              <span className="mini-icon">&lt;/&gt;</span>
              <span>Creative thinking</span>
            </div>

            <div className="floating-card card-bottom">
              <span className="mini-icon">✳</span>
              <span>Always learning</span>
            </div>

            <span className="spark spark-one">✳</span>
            <span className="spark spark-two">+</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Building my path in <span>web development.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Suruthi P, studying B.Sc Information Technology at
                PPG College of Arts and Science. I'm interested in frontend
                development and enjoy learning how websites are designed
                and built.
              </p>
              <p>
                I'm practising HTML, CSS, JavaScript and React.js through
                personal projects. My goal is to improve my technical skills
                and create useful, user-friendly websites.
              </p>
            </div>

            <div className="about-highlight">
              <span className="highlight-symbol">✦</span>
              <p className="highlight-title">MY APPROACH</p>
              <h3>Learn. Build. Improve.</h3>
              <p>Developing my skills through practice, one project at a time.</p>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>Education<span>.</span></h2>
            <p className="section-description">
              My academic background in information technology.
            </p>
          </div>

          <article className="education-card">
            <div className="education-icon">ED</div>
            <div className="education-details">
              <p className="card-label">DEGREE</p>
              <h3>B.Sc Information Technology (IT)</h3>
              <p>PPG College of Arts and Science</p>
            </div>
          </article>
        </section>

        <section className="section certificates-section" id="certificates">
          <div className="section-heading">
            <p className="eyebrow">LEARNING & ACHIEVEMENTS</p>
            <h2>Certificates<span>.</span></h2>
            <p className="section-description">
              Certifications and courses that support my learning journey.
            </p>
          </div>

          <article className="certificate-card">
            <div className="certificate-icon">✦</div>
            <div className="certificate-content">
              <p className="card-label">CERTIFICATION</p>
              <h3>Infosys</h3>
              <p>
                Certification and learning experience through Infosys.
              </p>
              <p className="certificate-note">
                The exact course title and certificate link can be added
                once confirmed.
              </p>
            </div>
          </article>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I'M LEARNING</p>
            <h2>Skills & <span>technologies.</span></h2>
            <p className="section-description">
              Technologies I'm practising to build for the web.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className="skill-number">{skill.number}</span>
                  <span className="skill-arrow">↗</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">MY WORK</p>
            <h2>Selected <span>projects.</span></h2>
            <p className="section-description">
              Personal projects for practising and improving my development skills.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <p className="card-label">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <p className="project-status">{project.status}</p>
                </div>

                <span className="project-decoration" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Let's talk about<br />what comes <span>next.</span></h2>

            <p className="contact-intro">
              I'm interested in connecting with people and exploring
              opportunities to grow in frontend development.
            </p>

            <a
              className="button button-primary email-button"
              href="mailto:suruthiponnusamy20068@gmail.com"
            >
              Email me <span>↗</span>
            </a>

            <div className="contact-details">
              <a href="mailto:suruthiponnusamy20068@gmail.com">
                <span className="contact-label">EMAIL</span>
                <span>suruthiponnusamy20068@gmail.com</span>
              </a>

              <a href="tel:9360527090">
                <span className="contact-label">PHONE</span>
                <span>9360527090</span>
              </a>

              <a
                href="https://www.linkedin.com/in/suruthi-p-076b1b414/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">LINKEDIN</span>
                <span>View my profile ↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">SP<span>.</span></a>
        <p>Designed and built by Suruthi P.</p>
        <p>© {year} Suruthi P.</p>
      </footer>
    </div>
  )
}

export default App