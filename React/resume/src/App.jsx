import './App.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons

function App() {
  return (
    <div className="app-container">
      <div className="resume-container">
        
        {/* Personal Info Section */}
        <section className="personal-info">
          <div className="personal-info-header">
            <img
              className="profile-picture"
              src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder image, replace with your own
              alt="Deepak Sharma"
            />
            <div className="personal-details">
              <h2>Deepak Sharma (Roll No: 523110009)</h2>
              <h3>Master of Computer Application</h3>
              <p>Innovative web developer with a passion for building responsive and interactive web applications using modern technologies.</p>
            </div>
          </div>

          <div className="personal-contact">
            <p><FaPhoneAlt /> Phone : (+91) 7056921549</p>
            <p><FaEnvelope /> Email : 523110009@nitkkr.ac.in</p>
            <p><FaMapMarkerAlt /> Location : Kurukshetra, Haryana, India</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Master of Computer Application</h4>
            <p>National Institute of Technology, Kurukshetra (2023 - Present)</p>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>Guru Jambheswar University of Science & Technology, Hisar, Haryana (2019 - 2022)</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>
            <li>Github</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Firebase</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="work-experience">
          <h3>Work Experience</h3>
          <div className="work-item">
            <h4>Frontend Developer - Tech Company</h4>
            <p>2020 - Present</p>
            <p>
              Developed and maintained the company website using React and other frontend technologies.
            </p>
          </div>
          <div className="work-item">
            <h4>Junior Web Developer - Startup Co.</h4>
            <p>2018 - 2020</p>
            <p>
              Assisted in building web applications and websites, focusing on frontend tasks using JavaScript and React.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-details">
          <h3>Contact Details</h3>
          <p>Feel free to reach out to me for any collaborations or opportunities.</p>
          <div className="contact-info">
            <p><FaEnvelope /> <strong>Email:</strong> 523110009@nitkkr.ac.in</p>
            <p><FaPhoneAlt /> <strong>Phone:</strong> (+91) 7056921549</p>
            <p><FaLinkedin /> <strong>LinkedIn:</strong> linkedin.com/in/deepak-sharma</p>
            <p><FaGithub /> <strong>GitHub:</strong> github.com/deepak-sharma</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
