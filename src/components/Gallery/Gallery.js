import React, { useState } from 'react';
import './styles/Gallery.css';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";


export default function Gallery({ listPhotos, setIsGalleryOpen, setgalleryTab }) {
    const [prevIndex, setPrevIndex] = useState(3);
    const [mainIndex, setMainIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const arrowTopValue = 200;
    const arrowLeftValue = '75%';
    const arrowRightValue = '0%';
    

    const [mouseRightPosition, setMouseRightPosition] = useState({ x: arrowRightValue, y: arrowTopValue });
    const [arrowRightPosition, setArrowRightPosition] = useState('absolute');
    const [mouseLeftPosition, setMouseLeftPosition] = useState({ x: arrowLeftValue, y: arrowTopValue });
    const [arrowLeftPosition, setArrowLeftPosition] = useState('absolute');

    return(
        <React.Fragment>
            <div className='gallery-bgd gallery-bdg-appearence'>


                <button 
                    type='button' 
                    className='prev-btn arrow-left-openning'
                    onMouseMove={(event) => {
                        const { clientX, clientY } = event;
                        /*setMouseLeftPosition({ x: clientX, y: clientY });*/
                        setMouseLeftPosition({ x: `${clientX}px`, y: `${clientY}px` });
                    }}
                    onMouseLeave={() => {
                        setArrowLeftPosition('absolute')
                        setMouseLeftPosition({ x: arrowLeftValue, y: arrowTopValue });
                    }}
                    onMouseEnter={() => {
                        setArrowLeftPosition('fixed');
                    }}
                    onClick={() => {
                        if(prevIndex !== listPhotos.length-1) {
                            setPrevIndex(prevIndex+1);
                        } else{
                            setPrevIndex(0);
                        }
                        if(mainIndex !== listPhotos.length-1) {
                            setMainIndex(mainIndex+1);
                        } else{
                            setMainIndex(0);
                        }
                        if(nextIndex !== listPhotos.length-1) {
                            setNextIndex(nextIndex+1);
                        } else{
                            setNextIndex(0);
                        }
                        //setAnimationNextMainPhoto('animation-next-main-photo');
                    }}
                >
                    <IoIosArrowBack
                        className='arrows'
                        style={{ 
                            position: arrowLeftPosition,
                            /*left: `${mouseLeftPosition.x}px`, 
                            top: `${mouseLeftPosition.y}px`*/
                            left: mouseLeftPosition.x, 
                            top: mouseLeftPosition.y
                        }}
                    />
                    <div className='gallery-prev-photo-container'>
                        <img 
                            src={listPhotos[prevIndex].photo} 
                            alt={listPhotos[prevIndex].name} 
                            className='gallery-prev-photo' 
                        />
                    </div>
                </button>




                <div className='gallery-main-photo-openning '>
                    <img 
                        src={listPhotos[mainIndex].photo} 
                        alt={listPhotos[mainIndex].name} 
                        className='gallery-main-photo'
                    />

                    <button 
                        type='button' 
                        className='close-btn' 
                        onClick={() => {
                            setIsGalleryOpen(false);
                            setgalleryTab(null);
                        }}
                    >
                        <IoIosClose 
                            className='close-symbole'
                        />
                    </button>
                </div>







                <button 
                    type='button' 
                    className='next-btn arrow-right-openning'
                    onMouseMove={(event) => {
                        const { clientX, clientY } = event;
                        /*setMouseRightPosition({ x: clientX, y: clientY });*/
                        setMouseRightPosition({ x: `${clientX}px`, y: `${clientY}px` });
                    }}
                    onMouseLeave={() => {
                        setArrowRightPosition('absolute')
                        setMouseRightPosition({ x: arrowRightValue, y: arrowTopValue });
                    }}
                    onMouseEnter={() => {
                        setArrowRightPosition('fixed');
                    }}
                    onClick={() => {
                        if(prevIndex !== 0) {
                            setPrevIndex(prevIndex-1);
                        } else{
                            setPrevIndex(listPhotos.length-1);
                        }
                        if(mainIndex !== 0) {
                            setMainIndex(mainIndex-1);
                        } else{
                            setMainIndex(listPhotos.length-1);
                        }
                        if(nextIndex !== 0) {
                            setNextIndex(nextIndex-1);
                        } else{
                            setNextIndex(listPhotos.length-1);
                        }
                    }}
                >
                    <IoIosArrowForward 
                        className='arrows'
                        style={{ 
                            position: arrowRightPosition,
                            left: mouseRightPosition.x, 
                            top: mouseRightPosition.y 
                        }}
                    />
                    <div className='gallery-next-photo-container'>
                        <img 
                            src={listPhotos[nextIndex].photo} 
                            alt={listPhotos[nextIndex].name} 
                            className='gallery-next-photo'
                        />
                    </div>
                </button>



            </div>
        </React.Fragment>
    )
}