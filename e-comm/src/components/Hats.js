import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';


function Hats() {
  const [data, setData] = useState([]);

  const product = async () => {
    const resp = await axios.get("http://localhost:8081/product/get");
    console.log(resp.data.products);
    setData(resp.data.products);
  };

  useEffect(() => {
    product();
  }, []);
  return (
    <>
      <p> THIS IS HAT COMPONENTS</p>
      <div className="first-row-card container ">
        {data
          .filter((item) => item.category === "Cap")
          .map((item, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title className="face1" id="face11">
                  {item.description}
                </Card.Title>
                <Card.Text className="rs" id="rs11">
                  RS.{item.price}.
                </Card.Text>
                <Button className="" variant="" id="btn11">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Hats
