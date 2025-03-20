import React, { useState, useEffect } from 'react';
import './HeroBanner.css';
import Heroimage1 from '../../assets/heroImage1.png';
import Heroimage2 from '../../assets/heroImage2.png';
import Heroimage3 from '../../assets/heroImage3.png';
import Heroimage4 from '../../assets/heroImage4.png';

const HeroBanner = ({
    buttonText = "Book an Appointment",
    stats = [
        { number: "24/7", label: "Online Support" },
        { number: "100+", label: "Web Developed & Application" },
        { number: "5+", label: "Year Experience" },
    ],
}) => {
    const images = [Heroimage1, Heroimage2, Heroimage3, Heroimage4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState('fade-in'); // State for fade effect

    const nextImage = () => {
        setFade('fade-out'); // Start fade out
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade('fade-in'); // Start fade in
        }, 800); // Match transition duration (0.5s)
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-banner">
            <div className="content-container">
                <div className="left-section">
                    <div className="text-content">
                        <h1>
                            <span className="gradient-text">Let's innovation</span> meets your excellence
                        </h1>
                        <p className="gradient-subtitle">
                            Excellence refined, innovation ignited, the future <br /> starts here
                        </p>
                    </div>
                    <button className="appointment-btn">{buttonText}</button>
                </div>

                <div className="right-section">
                    <img
                        src={images[currentImageIndex]}
                        alt="SEO"
                        className={`hero-image ${fade}`} // Apply fade class
                    />
                </div>
            </div>

            <div className="stats-container">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="stat-group">
                            <h2>{stat.number}</h2>
                            <p>{stat.label}</p>
                        </div>
                        {index < stats.length - 1 && <div className="divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;