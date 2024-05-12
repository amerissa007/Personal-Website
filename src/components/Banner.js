import ProfilePic from '../assets/img/profilepicture.jpeg'
import React, { useRef } from 'react';

export const Banner = () => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <section className='banner' id='home'>
            <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
                <div className="banner-container">
                    <div className="banner-text">
                        <center>
                        <h1>Hi, My Name is Amer 👋</h1><br/>
                        <p>I am an aspiring software engineer and current Computer Science student based in New York City. I enjoy developing a variety of projects which include web applications, video games, and fullstack development. Besides programming, I love fashion, art, and producing music.</p>
                        </center>
                    </div>
                    <div className='picture-border'>
                        <img className="pfp" src={ProfilePic} alt='Profile Picture'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;