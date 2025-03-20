import React, { useRef, useState } from 'react';
import './Unique.css';

const items = [
  {
    icon: '📄',
    title: 'Holistic Solutions',
    desc: 'We provide end-to-end services that address all aspects of your needs, ensuring seamless integration and effective results.',
  },
  {
    icon: '👤',
    title: 'Client-Centric Approach',
    desc: 'Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations.',
  },
  {
    icon: '💡',
    title: 'Innovative Thinking',
    desc: 'Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing quality, innovative solutions, and outstanding results in every project we undertake.',
  },
  {
    icon: '🧑‍💼',
    title: 'Expert Team',
    desc: 'Our team consists of highly skilled professionals with diverse expertise, dedicated to delivering the highest quality of work and consistently exceeding expectations.',
  },
  {
    icon: '💻',
    title: 'Cutting-Edge Technology',
    desc: 'We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions.',
  },
  {
    icon: '🏆',
    title: 'Commitment to Excellence',
    desc: 'Our dedication to quality and continuous improvement ensures outstanding results and long-term client satisfaction.',
  },
  {
    icon: '🛠️',
    title: 'Customized Strategies',
    desc: 'We understand that every client is unique, so we design personalized strategies to meet specific goals and challenges.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Practices',
    desc: 'We prioritize solutions that are not only effective but also environmentally and socially responsible.',
  },
];

export const Unique = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollTop(scrollContainerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walkY = (y - startY) * 1;
    scrollContainerRef.current.scrollTop = scrollTop - walkY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="container-unique">
      <div className="content-wrapper">
      <div className="content-unique">
        <p
          style={{
            fontFamily: "'Poppins', Helvetica",
            color: 'transparent',
            textShadow: '0px 5px 5px #6c5fd4',
            WebkitTextStroke: '3px #6c5fd4',
            opacity: 0.5,
            fontSize: '3rem',
            lineHeight: '58px',
          }}
        >
          What makes
          <span>
            <br />
          </span>{' '}
          Us Unique?
        </p>
        <p className="unique-content">
          At Phanom Professionals, we don’t just offer services; we innovate, create, and lead with excellence. Our unique and forward-thinking approach sets us apart in the highly competitive world of marketing and IT services. As a leading digital marketing agency in India, we are committed to delivering transformative solutions that drive growth, inspire engagement, and establish lasting success for our clients.
        </p>

        <button className="bg-[#6C5FD4] text-white rounded-3xl px-5.5 py-4 w-fit h-fit">
          Book an Appointment
        </button>
      </div>        
       <div
          ref={scrollContainerRef}
          className="scroll-unique manual-scroll"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="scroll-item"
              style={{ display: index < 2 ? 'block' : 'block' }} // Display all items, but adjust height in CSS
            >
              <div className="item-icon">{item.icon}</div>
              <div className="item-content">
                <p className="item-title">{item.title}</p>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};