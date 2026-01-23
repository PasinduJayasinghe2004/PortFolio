import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
    useScrollAnimation();

    return (
        <section id="contact" className="section contact-section">
            <h3 className="section-title fade-up">Let's Connect</h3>
            <p className="fade-up">Ready to start your next project?</p>
            <div className="contact-links fade-up">
                <a href="mailto:madubashap98@gmail.com" className="contact-pill">
                    <span>📧</span> email me
                </a>
                <a href="https://linkedin.com/in/pasindu-jayasinghe-376209353" target="_blank" rel="noopener noreferrer" className="contact-pill">
                    <span>💼</span> linkedin
                </a>
                <a href="https://github.com/pasindujayasinghe2004" target="_blank" rel="noopener noreferrer" className="contact-pill">
                    <span>💻</span> github
                </a>
            </div>
        </section>
    );
};

export default Contact;
