import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
    useScrollAnimation();

    const projects = [
        {
            img: '/project-lms.jpg',
            icon: '📚',
            title: 'University LMS',
            stack: ['PHP', 'MySQL', 'JS', 'REACT JS'],
            desc: 'A complete Learning Management System for course content.'
        },
        {
            img: '/project-theatrex.jpg',
            icon: '🏥',
            title: 'TheatreX',
            stack: ['REACT JS', 'NODE JS', 'EXPRESS JS', 'MYSQL'],
            desc: 'Smart operation theatre scheduling system for hospitals.'
        },
        {
            img: '/project-sustainability.jpg',
            icon: '🌱',
            title: 'EcoFuture',
            stack: ['HTML', 'CSS', 'JS', 'MYSQL', 'REACT JS'],
            desc: 'Promoting sustainable development goals and practices.'
        }
    ];

    return (
        <section id="projects" className="section">
            <h3 className="section-title fade-up">Featured Projects</h3>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card fade-up delay-${index * 100}`}
                    >
                        <div className="project-img-wrapper">
                            <div className="img-overlay"></div>
                            <img
                                src={project.img}
                                alt={project.title}
                                className="project-img"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                            <div className="project-icon">{project.icon}</div>
                        </div>
                        <div className="project-content">
                            <h4>{project.title}</h4>
                            <div className="tech-stack">
                                {project.stack.map(tech => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
