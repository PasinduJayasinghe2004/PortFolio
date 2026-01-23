import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
    useScrollAnimation();

    const skills = [
        { icon: '💻', title: 'Frontend', desc: 'HTML, CSS, JS, React, JAVA' },
        { icon: '⚙️', title: 'Backend', desc: 'Node.js, Python, SQL, Mongo, APIs' },
        { icon: '🛠️', title: 'Tools', desc: 'Git, Docker, AWS, CI/CD, Agile' },
        { icon: '🤝', title: 'Soft Skills', desc: 'Leadership, Communication, Problem Solving' }
    ];

    return (
        <section id="skills" className="section">
            <h3 className="section-title fade-up">Skills & Expertise</h3>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill-card fade-up delay-${(index + 1) * 100}`}
                    >
                        <div className="skill-icon">{skill.icon}</div>
                        <h4>{skill.title}</h4>
                        <p>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
