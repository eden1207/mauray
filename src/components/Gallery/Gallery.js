import React, { useState } from 'react';
import './styles/Gallery.css';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";


export default function Gallery({ listPhotos, setgalleryTab, isGalleryOpen, setIsGalleryOpen }) {

    const [prevIndex, setPrevIndex] = useState(listPhotos.length-1);
    const [mainIndex, setMainIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const arrowTopValue = 200;
    const arrowLeftValue = '75%';
    const arrowRightValue = '0%';
    

    const [mouseRightPosition, setMouseRightPosition] = useState({ x: arrowRightValue, y: arrowTopValue });
    const [arrowRightPosition, setArrowRightPosition] = useState('absolute');
    const [mouseLeftPosition, setMouseLeftPosition] = useState({ x: arrowLeftValue, y: arrowTopValue });
    const [arrowLeftPosition, setArrowLeftPosition] = useState('absolute');

    const [prevPhotoAnimationLeft, setPrevPhotoAnimationLeft] = useState('');
    const [nextPhotoAnimationLeft, setNextPhotoAnimationLeft] = useState('');
    const [mainPhotoAnimationLeft, setMainPhotoAnimationLeft] = useState('');

    const [prevPhotoAnimationRight, setPrevPhotoAnimationRight] = useState('');
    const [nextPhotoAnimationRight, setNextPhotoAnimationRight] = useState('');
    const [mainPhotoAnimationRight, setMainPhotoAnimationRight] = useState('');

    const [mainPhotoNeighborAnimationRight, setMainPhotoNeighborAnimationRight] = useState('');
    const [mainPhotoNeighborAnimationLeft, setMainPhotoNeighborAnimationLeft] = useState('');

    const [animationGalleryOpening, setAnimationGalleryOpening] = useState('animation-gallery-opening');
    const [animationMainPhotoOpening, setAnimationMainPhotoOpening] = useState('animation-main-photo-opening');

    const [arrowLeftOpenning, setArrowLeftOpenning] = useState('arrow-left-openning');
    const [arrowRightOpenning, setArrowRightOpenning] = useState('arrow-right-openning');


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function openGalleryAnimation() {
        if(isGalleryOpen) {
            await delay(2000);
            setAnimationGalleryOpening('');
            setAnimationMainPhotoOpening('');
            setArrowLeftOpenning('');
            setArrowRightOpenning('');
        }
    }
    openGalleryAnimation();
    
    async function transitionLeft() {
        await delay(500);
        setPrevPhotoAnimationLeft('');
        setNextPhotoAnimationLeft('');
        setMainPhotoAnimationLeft('');
        setMainPhotoNeighborAnimationRight('');
    }

    async function transitionRight() {
        await delay(500);
        setPrevPhotoAnimationRight('');
        setNextPhotoAnimationRight('');
        setMainPhotoAnimationRight('');
        setMainPhotoNeighborAnimationLeft('');
    }

    return(
        <React.Fragment>
            <div className='gallery-bgd gallery-bdg-appearence'>


                <button 
                    type='button' 
                    className={'desktop-prev-btn ' + arrowLeftOpenning}
                    onMouseMove={(event) => {
                        const { clientX, clientY } = event;
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
                        setPrevPhotoAnimationLeft('prev-photo-animation-left ');
                        setNextPhotoAnimationLeft('next-photo-animation-left ');
                        setMainPhotoAnimationLeft('main-photo-animation-left ');
                        transitionLeft();
                    }}
                >
                    <IoIosArrowBack
                        className='arrows'
                        style={{ 
                            position: arrowLeftPosition,
                            left: mouseLeftPosition.x, 
                            top: mouseLeftPosition.y
                        }}
                    />
                    <div className={'gallery-prev-photo-container ' + prevPhotoAnimationLeft + prevPhotoAnimationRight}>
                        <img 
                            src={listPhotos[prevIndex].photo} 
                            alt={listPhotos[prevIndex].name} 
                            className='gallery-prev-photo' 
                        />
                    </div>
                </button>




                <div className={'gallery-main-photo-openning ' + animationGalleryOpening}>

                    <img 
                        src={listPhotos[prevIndex].photo} 
                        alt={listPhotos[prevIndex].name} 
                        className={'main-photo-neighbor ' + mainPhotoNeighborAnimationLeft}
                    />

                    <img 
                        src={listPhotos[mainIndex].photo} 
                        alt={listPhotos[mainIndex].name} 
                        className={'gallery-main-photo ' + animationMainPhotoOpening + mainPhotoAnimationLeft + mainPhotoAnimationRight}
                    />

                    <img 
                        src={listPhotos[nextIndex].photo} 
                        alt={listPhotos[nextIndex].name} 
                        className={'main-photo-neighbor ' + mainPhotoNeighborAnimationRight}
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

                    <div className='buttons-container'>
                        <button 
                            type='button' 
                            className={'prev-btn ' + arrowRightOpenning}
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
                                setPrevPhotoAnimationLeft('prev-photo-animation-left ');
                                setNextPhotoAnimationLeft('next-photo-animation-left ');
                                setMainPhotoAnimationLeft('main-photo-animation-left ');
                                setMainPhotoNeighborAnimationRight('main-photo-neighbor-animation-right');
                                transitionLeft();
                            }}
                        >
                            <IoIosArrowBack
                                className='arrows'
                            />
                        </button>
                        <button 
                            type='button' 
                            className={'next-btn ' + arrowRightOpenning}
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
                                setPrevPhotoAnimationRight('prev-photo-animation-right ');
                                setNextPhotoAnimationRight('next-photo-animation-right ');
                                setMainPhotoAnimationRight('main-photo-animation-right ');
                                setMainPhotoNeighborAnimationLeft('main-photo-neighbor-animation-left');
                                transitionRight();
                            }}
                        >
                            <IoIosArrowForward 
                                className='arrows'
                            />
                        </button>
                    </div>
                </div>







                <button 
                    type='button' 
                    className={'desktop-next-btn ' + arrowRightOpenning}
                    onMouseMove={(event) => {
                        const { clientX, clientY } = event;
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
                        setPrevPhotoAnimationRight('prev-photo-animation-right ');
                        setNextPhotoAnimationRight('next-photo-animation-right ');
                        setMainPhotoAnimationRight('main-photo-animation-right ');
                        transitionRight();
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
                    <div className={'gallery-next-photo-container ' + nextPhotoAnimationLeft + nextPhotoAnimationRight}>
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