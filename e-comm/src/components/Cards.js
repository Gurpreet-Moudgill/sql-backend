import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cap1 from '../images/cap1.webp'
import cap2 from '../images/cap2.webp'
import cap3 from '../images/cap3.webp'
import cap4 from '../images/cap4.webp'
import axios from 'axios';


function Cards() {
    const [data, setData] = useState([]);

    const product = async()=>{
       const resp =  await axios.get('http://localhost:8081/product/get')
        console.log(resp.data.products);
        setData(resp.data.products)
    }

    useEffect(()=>{
        product();
    }, [])

    return (
        <>
    <span className='newdrop'>new drops</span>
    
    
            <div className='first-row-card container '>
                {
                    
                data.map((item, index)=>(index<4 && <Card key={index} style={{ width: '18rem'}} className='mx-1'>
                    <Card.Img variant="top " src={item.imageUrl} />
                    <Card.Body>
                        <Card.Title className='face' id='face1'>{ item.description}</Card.Title>

                    
                    <Card.Text className='rs' id="rs1">RS.{item.price}.00</Card.Text>
                        <Button className='' variant="" id="btn1">Add to card</Button>
                    </Card.Body>
                
                </Card>
                ))}

                {/* <Card style={{ width: '18rem' }} className='mx-1'>
                    <Card.Img variant="top "  src={cap2} />
                    <Card.Body>
                        <Card.Title className='face' id='face2'> THE CARGO CORDUROY CAP </Card.Title>
                        <Card.Text className='rs' id="rs2">RS.1,350.00</Card.Text>
                        <Button className='' variant="" id='btn2'>Add to cart</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='mx-1'>
                    <Card.Img variant="top"  src={cap3} />
                    <Card.Body>
                        <Card.Title className='face' id='face3'> THE EARTH'S ENERGY  BE </Card.Title>
                        <Card.Text className='rs' id="rs3">RS.1,350.00</Card.Text>
                        <Button  className='' variant="" id='btn3'>Add to cart</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-1'>
                    <Card.Img variant="top"  src={cap4} />
                    <Card.Body>
                        <Card.Title className='face' id='face4'>DON'T WORRY BE HAPPY </Card.Title>
                        <Card.Text className='rs' id="rs4">RS.1,350.00</Card.Text>
                        <Button className='' variant="" id='btn4'>Add to cart</Button>
                    </Card.Body>
                </Card> */}

            </div>
        </>
    )
}

export default Cards
