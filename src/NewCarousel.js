import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function NewCarousel() {
   

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [

    <div className="item bg-c1sm md:bg-c1lg lg:bg-c1lg h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center" data-value="1"></div>,
    <div className="item bg-c2sm md:bg-c2lg lg:bg-c2lg h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center" data-value="2"></div>,
    <div className="item bg-c3sm md:bg-c3lg lg:bg-c3lg h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center" data-value="3"></div>,
    <div className="item bg-c4sm md:bg-c4lg lg:bg-c4lg h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center" data-value="4"></div>,
    <div className="item bg-c5sm md:bg-c5lg lg:bg-c5lg h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center" data-value="5"></div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite='true'
    />
);
return(
    <div className="h-auto">
        <Carousel />
    </div>

);
}

export default NewCarousel ;
