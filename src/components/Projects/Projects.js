import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'fullstack',
      github: 'https://github.com/MeenaDavin/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      category: 'frontend',
      github: 'https://github.com/MeenaDavin/task-manager',
      live: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      image: 'https://via.placeholder.com/600x400/ffd700/333333?text=Weather+App',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/MeenaDavin/weather-dashboard',
      live: 'https://weather-demo.com'
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'RESTful API for a blogging platform with authentication, CRUD operations, and comment system.',
      image: 'https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Blog+API',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: 'https://github.com/MeenaDavin/blog-api',
      live: 'https://api.blog-demo.com/docs'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      image: 'https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Portfolio',
      technologies: ['React', 'Framer Motion', 'CSS3', 'EmailJS'],
      category: 'frontend',
      github: 'https://github.com/MeenaDavin/portfolio',
      live: 'https://meena-portfolio.com',
      featured: true
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging and group chat features.',
      image: 'https://via.placeholder.com/600x400/95e1d3/ffffff?text=Chat+App',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/MeenaDavin/chat-app',
      live: 'https://chat-demo.com'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="View Code"
                    >
                      <FaCode />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="View Live"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
