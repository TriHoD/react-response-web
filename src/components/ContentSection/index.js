import React from 'react';
import '../../App.css';
import Button from '../Button';
import './ContentSection.css';

function ContentSection() {
    return (
        <div className='hero-container'>
            
            {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>Milky Cats</h1>
            <p>Let's the cats conquer the world!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default ContentSection;
