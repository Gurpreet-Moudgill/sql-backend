import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CarouselItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Latestblock from './Latestblock';
import Spotted from './Spotted';




function Latest() {
    return (



        <>
            <div><span className='latest'>Latest from the blog</span>  </div>

            <div class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div className='cardone'>
                            <div className='video1'>
                                <iframe width="300" height="255" src="https://www.youtube.com/embed/hgjmg6m0Ctw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                                <p className='cawin'>CAWIN'S JOURNEY AS AN AUTHENTIC RAPPER: UNRESTRICTED PASSION</p>
                                <p>Cawin, who has a deep love for rap music since childhood. Cawin's passion for music led him to start writing and singing during his teenage years.</p></div>

                            <div className='video2'>
                                <iframe width="300" height="255" src="https://www.youtube.com/embed/K-QYO6zbzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                                <p className='cawin'>THE MUSICAL JOURNEY OF ARTIST JAY KAY: REPRESENTING FARIDABAD THROUGH HIP HOP</p>
                                <p>Jay Kay is a rising artist who started his musical journey at the age of 13. Initially, he wrote Punjabi commercial lyrics inspired by the music. </p></div>


                            <div className='video3'>
                                <iframe width="300" height="255" src="https://www.youtube.com/embed/yKvu7dMtuO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                                <p className='cawin'>DHRUVMARKK: AN UP-AND-COMING HIP HOP ARTIST FROM GHAZIABAD</p>
                                <p>Dhruv Sharma, also known as dhruvmarkk, is from Ghaziabad's UP-14 neighbourhood. He first became interested in hip hop in the seventh grade .</p></div>

                        </div>
                    </div>


                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>


            </div>
            <div>

            </div>


            <NavLink to="/latestblock"><button className='viewall'>VIEW ALL</button></NavLink>
        
        <Spotted/>
        </>
    




    )
}

export default Latest
