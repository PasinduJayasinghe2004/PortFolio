import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
    const greetingText = (() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'Good Morning, I\'m';
        if (hour >= 12 && hour < 18) return 'Good Afternoon, I\'m';
        return 'Good Evening, I\'m';
    })();

    const typeWriterText = useTypewriter(['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="profile-wrapper fade-in">
                    <img src="/pasindu.jpg" alt="Profile Photo" className="profile-img" id="profileImg" />
                </div>
                <div className="text-wrapper fade-up">
                    <div id="greeting" className="greeting">{greetingText}</div>
                    <h2 className="name">Pasindu Jayasinghe</h2>
                    <div className="typewriter-container">
                        <span className="typewriter-text">{typeWriterText}</span><span className="cursor">|</span>
                    </div>
                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="/Pasindu Jayasinghe CV.pdf" className="btn btn-secondary" download>Download CV</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
