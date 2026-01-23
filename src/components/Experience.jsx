import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
    useScrollAnimation();

    const experiences = [
        {
            img: '/uni_profile_93124.jpg',
            title: 'BSc (Hons) Computer Science',
            role: 'University of Westminster',
            date: '2025 - Present',
            desc: 'Focusing on Algorithms, AI, Web Dev, and OOP.'
        },
        {
            img: '/Uni_emblem.jpg',
            title: 'BSc in Civil Engineering Tech',
            role: 'University of Moratuwa',
            date: '2020 - 2024',
            desc: 'Specialized in construction management.'
        },
        {
            img: '/school.png',
            title: 'G.C.E. Advanced Level',
            role: 'St. Aloysius College',
            date: '2010 - 2023',
            desc: 'Physical Science Stream.'
        }
    ];

    return (
        <section id="experience" className="section">
            <h3 className="section-title fade-up">Education</h3>
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item fade-up">
                        <div className="exp-img-wrapper">
                            <img src={exp.img} alt={exp.role} className="experience-img" />
                        </div>
                        <div className="experience-content">
                            <h4>{exp.title}</h4>
                            <div className="institution">{exp.role}</div>
                            <div className="date">{exp.date}</div>
                            <p>{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
