import ProfilePic from '../assets/img/profilepicture.jpeg'
import React from 'react';

export const Banner = () => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      const currentRef = domRef.current; // Create a variable and assign it the value of domRef.current
      observer.observe(currentRef);
      return () => observer.unobserve(currentRef); // Use the variable in the cleanup function
    }, []);
    return (
        <section className='banner' id='home'>
            <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
                <div className="banner-container">
                    <div className="banner-text">
                        <center>
                        <h1>Hi, My Name is Amer 👋</h1><br/>
                        <p>I am an aspiring software engineer and current Computer Science student based in New York City. I enjoy developing a variety of projects which include web applications, video games, and fullstack development. Besides programming, I love fashion, art, and music production.</p>
                        </center>
                    </div>
                    <div className='picture-border'>
                        <img className="pfp" src={ProfilePic} alt='PictureOfMe'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;
