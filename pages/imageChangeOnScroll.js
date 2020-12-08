import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const imageChangeOnScroll = () => {
    return (
        <div>
            {[187, 823, 1124, 1269, 1530, 1725, 2920, 5996, 6548].map(speakerId => {
              return (
                <div key={speakerId}>
                  <ImageToggleOnScroll 
                    primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                    secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                    alt=""
                  />
                </div>
              )
            })}
        </div>
    );
}

export default imageChangeOnScroll;
