import React from 'react'
import trend1 from '../images/trend1.webp'
import trend2 from '../images/trend2.webp';
import trend3 from '../images/trend3.webp';
import trend10 from '../images/trend10.webp';
import trend6 from '../images/trend6.jpg';
import trend7 from '../images/trend7.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import trend11 from '../images/trends11.jpg';
import trend12 from '../images/trends12.webp';
import trend13 from '../images/trends13.webp';
import trend14 from '../images/trend14.webp';
import Bestseller from './Bestseller';
import { NavLink } from 'react-router-dom';
import middleimg from '../images/middleimg.webp';
import collab1 from '../images/collab1.jpg';
import collab2 from '../images/collab2.jpg';
import collab3 from '../images/collab3.jpg';
import collab4 from '../images/collab4.jpg';
import collab5 from '../images/collab5.jpg';
import Latest from './Latest';
function Trending() {
    return (
        <>
        <span className='trending'>Trending</span>
            <Carousel className='Main'>
                <Carousel.Item>
            <div className='xyz'>
                <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend14} />
        <Card.Body>
            <Card.Title className='face1' id='face21'>DAILY REMINDER // 0001</Card.Title> 
        <Card.Text className='rs' id="rs21">RS.3,250.00</Card.Text>
            <Button className='' variant="" id="btn21">Add to card</Button>
        </Card.Body>
    
    </Card>

    <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend1} />
        <Card.Body>
            <Card.Title className='face1' id='face22'>PACKAGE PRIME SHORTS //002</Card.Title> 
        <Card.Text className='rs' id="rs22">RS.1,250.00</Card.Text>
            <Button className='' variant="" id="btn22">Add to card</Button>
        </Card.Body>
    
    </Card>
 <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend2} />
        <Card.Body>
            <Card.Title className='face1' id='face23'>DAILY REMINDER TSHIRT//03</Card.Title> 
        <Card.Text className='rs' id="rs23">RS.3,250.00</Card.Text>
            <Button className='' variant="" id="btn23">Add to card</Button>
        </Card.Body>
    
    </Card>
    <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend3} />
        <Card.Body>
            <Card.Title className='face1' id='face24'>LIFE IS BETTER FEEL BETTER //04</Card.Title> 
        <Card.Text className='rs' id="rs24">RS.2,250.00</Card.Text>
            <Button className='' variant="" id="btn24">Add to card</Button>
        </Card.Body>
    
    </Card>
</div>

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>

                <div className='abc'>
                <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend11} />
        <Card.Body>
            <Card.Title className='face1' id='face25'>STICKER URBAN PACKAGES  //05</Card.Title> 
        <Card.Text className='rs' id="rs25">RS.2,250.00</Card.Text>
            <Button className='' variant="" id="btn25">Add to card</Button>
        </Card.Body>
    
    </Card>

    <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend12} />
        <Card.Body>
            <Card.Title className='face1' id='face26'>MEGAPHONES URBAN //06</Card.Title> 
        <Card.Text className='rs' id="rs26">RS.3,250.00</Card.Text>
            <Button className='' variant="" id="btn26">Add to card</Button>
        </Card.Body>
    
    </Card>
    <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend13} />
        <Card.Body>
            <Card.Title className='face1' id='face27'>TOGETHER URBAN PACKAGE //07</Card.Title> 
        <Card.Text className='rs' id="rs27">RS.2,170.00</Card.Text>
            <Button className='' variant="" id="btn27">Add to card</Button>
        </Card.Body>
    
    </Card>
    <Card style={{ width: '18rem'}} className='mx-1'>
        <Card.Img variant="top " src={trend14} />
        <Card.Body>
            <Card.Title className='face1' id='face28'>LIFE IS BETTER URBAN //08</Card.Title> 
        <Card.Text className='rs' id="rs28">RS.3,250.00</Card.Text>
            <Button className='' variant="" id="btn28">Add to card</Button>
        </Card.Body>
    
    </Card>
    </div>

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

<NavLink to="/bestseller"><button className='bestseller'>VIEW ALL</button></NavLink>
<br/>
<div className='middleimg'>
<img  className ='imge'src={middleimg}></img>
<p className='para'>Our aim is to build the biggest self-sustaining community by empowering vari.0s artists and athletes.</p>
</div>
<NavLink to="/knowmore"><button className='bestseller'>KNOW MORE</button></NavLink>
<br/>
<div className='coll'>
<span className='Our-Collabration'>Our Collabration</span>
<div className='maincollab'>
<div><img src={collab1} alt=''></img></div>
<div><img src={collab2} alt=''></img></div>
<div><img src={collab3} alt=''></img></div>
<div><img src={collab4} alt=''></img></div>
<div><img src={collab4} alt=''></img></div>
</div>
</div>

<Latest/>
        </>



    );
}

export default Trending
