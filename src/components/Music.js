import React from 'react';


export const Music = () => {
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
        <section className='music' id='music'>
            <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
                <div className="music-container">
                    <div className="music-text">
                        <h1>My Music</h1>
                        <p>Check out the songs I've produced! Music production is a hobby I really enjoy and have been doing for years. If you like what you hear, feel free to support me on SoundCloud.</p>
                    </div>
                        <iframe width="70%" height="700" scrolling="no" frameborder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/iiissa&amp;{ ADD YOUR PARAMETERS HERE }">
                        </iframe>    
                </div>
            </div>    
        </section>    
    );
}
export default Music;