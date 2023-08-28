import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bag1 from "../images/bag1.webp";
import bag2 from "../images/bag2.webp";
import bag3 from "../images/bag3.webp";
import bag4 from "../images/bag4.webp";
import { NavLink } from "react-router-dom";
import UMSTEALS1 from "../images/UMSTEALS1.webp";
import TOPSELLERS2 from "../images/TOPSELLERS2.webp";
import NEWARRIVALS3 from "../images/NEWARRIVALS3.webp";
import Trending from "./Trending";
import axios from "axios";

function Cards1() {
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
      <div className="second-row-card container ">
        {data
          .filter((item) => item.category === "Bags")
          .map((item, index) => (index < 4  &&
            <Card key={index} style={{ width: "18rem" }} className="mx-1">
              <Card.Img variant="top " src={item.imageUrl} />
              <Card.Body>
                <Card.Title className="face1" id="face11">
                  {item.description}
                </Card.Title>
                <Card.Text className="rs" id="rs11">
                  RS.{item.price}.00
                </Card.Text>
                <Button className="" variant="" id="btn11">
                  Add to card
                </Button>
              </Card.Body>
            </Card>
          ))}

        {/* <Card style={{ width: '18rem' }} className='mx-1'>
        <Card.Img variant="top "  src={bag2} />
        <Card.Body>
            <Card.Title className='face1' id='face12'> CITY RUCKSACK //BLACK</Card.Title>
            <Card.Text className='rs' id="rs12">RS.2,350.00</Card.Text>
            <Button className='' variant="" id='btn12'>Add to cart</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mx-1'>
        <Card.Img variant="top"  src={bag3} />
        <Card.Body>
            <Card.Title className='face1' id='face13'> CITY RUSKSACK // RED </Card.Title>
            <Card.Text className='rs' id="rs13">RS.2,950.00</Card.Text>
            <Button  className='' variant="" id='btn13'>Add to cart</Button>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='mx-1'>
        <Card.Img variant="top"  src={bag4} />
        <Card.Body>
            <Card.Title className='face1' id='face14'>CITY RUSKSACK //BLUE</Card.Title>
            <Card.Text className='rs' id="rs14">RS.2,350.00</Card.Text>
            <Button className='' variant="" id='btn14'>Add to cart</Button>
        </Card.Body>
    </Card> */}
      </div>
      <NavLink to="/viewall">
        <button className="viewallbtn">View All</button>
      </NavLink>

      <div className="umsteal1-topsell-newarrivals">
        <div>
          <NavLink to="/UMSTEALS1">
            <img src={UMSTEALS1} alt="umsteals1" />
          </NavLink>
        </div>

        <div>
          <NavLink to="/TOPSELLERS2">
            <img src={TOPSELLERS2} alt="topseller" />
          </NavLink>
        </div>

        <div>
          <NavLink to="/NEWARRIVALS3">
            <img src={NEWARRIVALS3} alt="newarrival" />
          </NavLink>
        </div>
      </div>
      <Trending />
    </>
  );
}

export default Cards1;
