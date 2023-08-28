import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { SlUser } from 'react-icons/sl';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCartSimple } from 'react-icons/pi'
import { NavLink } from 'react-router-dom';
import urbanmonkey from '../images/urbanmonkey.jpg'
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  return (
    <>
      <div className='A'>

        <a className='a1' href='/' ><AiOutlineMail />hello@urbanmonkey.com</a>
        <a className='a2' href='/' >shop new arrivals</a>

      </div>

      <div className='main '>

        <div className='logo'>
          <NavLink to="/home">
            <img src={urbanmonkey} alt='logoimg' />
          </NavLink>
        </div>

        <div class="middle mx-2">
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Accessories</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Apparel</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Eyewear </Dropdown.Item>
                <Dropdown.Item href="#/action-5">FaceMask</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Handbags,Wallets & Cases</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Handwear</Dropdown.Item>
                <Dropdown.Item href="#/action-8">keychains</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

        <div >
          <span className='mx-2'><SlUser /></span>
          <span className='mx-2'><BsHeart /></span>
          <span className='mx-2'><PiShoppingCartSimple /></span>
        </div>

      </div>
      <div >
        <ul className='lists'>
          <NavLink to="/hats&caps" className='li'><li >hats&caps</li></NavLink>
          <NavLink to="/skatboad" className='li'><li>skateboards</li></NavLink>
          <NavLink to="/eyewear" className='li'><li>eyewear</li></NavLink>
          <NavLink to="/apparel" className='li'><li>apparel</li></NavLink>
          <NavLink to="/accessories" className='li'><li>accessories</li></NavLink>
          <NavLink to="/collabrations" className='li'><li>collabrations</li></NavLink>
          <NavLink to="/steals" className='li'><li>um steals</li></NavLink>
          <NavLink to="/about us" className='li'><li>about us</li></NavLink>
        </ul>
      </div>

    </>
  )
}

export default NavBar
