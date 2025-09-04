import React, { useState } from 'react';
import { Phone,ShoppingCart,Menu,X } from "lucide-react";
import { Link } from 'react-router-dom';
function Header(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>
            <div className=' topbar-container'>
                <div className='container d-flex justify-content-between align-items-center p-2'>
                <div className='text-muted topbar'>
                <p className='mb-0'>ALL OF OUR PRODUCT ARE ORIGINAL AND AUTHENTIC. WE PROVIDE VARIETY OF YOUR FAVORITE ANIME FIGURINES.</p>
                </div>
                <div className='header-nav gap-3 d-flex'>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">CONTACT US</a>
                </div>
                </div>
            </div>
            
            {/* Header */}
            <div className='d-flex justify-content-around align-items-center border-bottom'>
                <div>
                    <Menu onClick={props.openSidebar}  size={32} className='d-none bar-icon'/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/image/onepiece.jpg'} className='image-fluid rounded-circle logo-icon' style={{"width":"125px"}}/>
                </div>
              <div className='search-bar' style={{
                display: 'flex',
                border: '2px solid #1b0978ff',
                borderRadius: '3px',
                maxWidth : '600px',
                width: '100%',
                height: '50px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#fff',
                alignItems: 'center'
                }}>
                {/* Dropdown */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <select 
                    style={{ 
                        border: 'none',
                        color:'gray',
                        fontSize:'14px',
                        padding: '0 25px 0 5px', 
                        outline: 'none',
                        flex: '0 0 150px',
                        height: '100%',
                        borderRadius: '5px 0 0 5px',
                        appearance: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                    }}
                    >
                    <option>All items</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </select>

                    {/* Custom arrow */}
                    <div style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '5px solid #000',
                    pointerEvents: 'none'
                    }}></div>
                </div>

                {/* Vertical separator */}
                <div style={{
                    width: '1px',
                    height: '60%',
                    backgroundColor: '#ccc'
                }}></div>

                {/* Input */}
                <input 
                    type='text' 
                    placeholder='Search...' 
                    style={{
                    fontSize:'14px',
                    border: 'none',
                    flex: 1,
                    padding: '0 5px',
                    outline: 'none',
                    height: '100%',
                    borderRadius: '0 5px 5px 0'
                    }}
                />
                </div>


                <div className='d-flex align-items-center'>
                <div className="d-flex align-items-center border-end pe-3 me-3 ">
                <Phone size={32} className="me-2 search-bar" />   
                <div className='search-bar'>
                    <div>Call Us :</div>
                    <span>016654546</span>
                </div>
                </div>

               <div className='ps-3 d-flex align-items-center gap-4'>
                <div className='d-none d-sm-flex flex-column align-items-center '>
                    <i className="fa-brands fa-telegram" style={{ fontSize: "32px" }}></i>
                    <span>Telegram</span>
                </div>

                <div className='d-flex flex-column align-items-center position-relative'>
                    <a href='/cart' className='position-relative'>
                    <ShoppingCart size={32} />
                    {props.cart && props.cart.length > 0 && (
                        <sup 
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: '0.6rem' }}
                        >
                        {props.cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </sup>
                    )}
                    </a>
                    <span>Cart</span>
                </div>
                </div>

                </div>
            </div>
            {/* Navigation */}
            <div className='navbar-container row border-bottom pb-1'>
            <nav>
                <div className='d-flex justify-content-evenly navbar'>
                    {/* <a href='/' className='btn btn-outline-secondary'>Home</a>
                    <a href='/toy' className='btn btn-outline-secondary'>Toy</a>
                    <a href='/card' className='btn btn-outline-secondary'>Card</a>
                    <a href='/accessories' className='btn btn-outline-secondary'>Accessories</a>
                    <a href='/trending' className='btn btn-outline-secondary'>Trending</a>
                    <a href='#' className='btn btn-outline-secondary'>Other</a> */}
                    <Link to='/' className='btn btn-outline-secondary'>Home</Link>
                    <Link to='/toy' className='btn btn-outline-secondary'>Toy</Link>
                    <Link to='/card' className='btn btn-outline-secondary'>Card</Link>
                    <Link to='/accessories' className='btn btn-outline-secondary'>Accessories</Link>
                    <Link to='/trending' className='btn btn-outline-secondary'>Trending</Link>
                    <Link to='#' className='btn btn-outline-secondary'>Other</Link>
                </div>
            </nav>
            </div>

        </div>
    );
}

export default Header;