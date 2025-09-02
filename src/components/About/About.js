import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <FaPalette />,
      title: 'Creative Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Building fast and optimized applications'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Always learning and implementing new technologies'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Hi, I'm Meena Davin</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              With expertise in both front-end and back-end development, I create seamless digital experiences 
              that combine beautiful design with robust functionality.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work on the internet, 
              and it has evolved into a career where I get to build amazing products that make a difference. 
              I believe in continuous learning and staying updated with the latest technologies and trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community. I'm always excited about new challenges 
              and opportunities to grow both personally and professionally.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Meena Davin</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">meena.davin@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">San Francisco, CA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available:</span>
                <span className="info-value">Freelance & Full-time</span>
              </div>
            </div>

            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-features"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
