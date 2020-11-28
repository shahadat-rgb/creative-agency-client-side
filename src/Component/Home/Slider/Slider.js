import React from 'react';
import carusel1 from '../../../images/carousel-1.png'
import carusel2 from '../../../images/carousel-2.png'
import carusel3 from '../../../images/carousel-3.png'
import carusel4 from '../../../images/carousel-4.png'
import carusel5 from '../../../images/carousel-5.png'
import './Slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';

const Slider = () => {
    const allCarouselPic=[carusel1, carusel2, carusel3, carusel4, carusel5]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='slider-container'>
            <Container>
                <div style={{marginBottom:'80px'}}>
                    <h4 style={{color:'white',fontSize:'34px', fontWeight:'600'}} className='text-center'>
                        Here are some of <span style={{color:'green'}}>our works</span>
                    </h4>
                </div>
                
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                    keyBoardControl={true}  dotListClass="custom-dot-list-style" showDots={true}>
                    {
                        allCarouselPic.map(carousel=>{
                            return(
                                <div>
                                    <img className='carousel-image' src={carousel} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>;
            </Container>
        </div>
    );
};

export default Slider;