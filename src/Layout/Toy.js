import React, { useState } from 'react';
import { LayoutGrid,LayoutList,House,ChevronRight } from "lucide-react";
function Toy(props) {
    const products = [
    {
      title: "one piece",
      description: "new model",
      price: 100,
      image: "image/Cat6.jpg",
    },
    {
      title: "two piece",
      price: 200,
      description: "new model",
      image: "image/Cat3.jpg",
    },
    {
      title: "one piece",
      price: 100,
      description: "new model",
      image: "image/Cat4.jpg",
    },
    {
      title: "two piece",
      price: 100,
      description: "new model",
      image: "image/Cat5.jpg",
    },
    {
      title: "one piece",
      price: 100,
      description: "new model",
      image: "image/Panda.jpg",
    },
    {
      title: "two piece",
      price: 100,
      description: "new model",
      image: "image/ChingChang.jpg",
    },
  ];
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(90);
  const handleMinChange = (e) => {
    let value = Number(e.target.value);
    if (value > max) value = max;
    if (value < 1) value = 1;
    setMin(value);
  };

  const handleMaxChange = (e) => {
    let value = Number(e.target.value);
    if (value < min) value = min;
    if (value > 100) value = 100;
    setMax(value);
  };
  


    return (
        <div className='mb-2'>
        <div className="container p-2">
        <div className="d-flex align-items-center">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-primary">Toy</span>
        </div>
        </div>
            <div className='toy-header d-flex align-items-center'>
                <div className='container'>
                <h1>Toy</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className='container'>
                <div className='d-flex gap-5'>
                <div className='d-none d-lg-block'>
                <div className='toy-card card p-3 d-flex'>
                    <h4 className='px-1'>Product categories</h4>
                    <ul className='toy-list'>
                        <li>Cat Toy</li>
                        <li>Anime Figurine</li>
                        <li>Gundam Toy</li>
                        <li>Ching Chang Toy</li>
                        <li>Doraemon Toy</li>
                    </ul>
                </div>
                {/* Filter */}
                <div className="card p-3 filter-price">
                <h4 className="mb-3">Filter by Price</h4>

                <div className="mb-3">
                    <label className="form-label">Minimum</label>
                    <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="100"
                    value={min}
                    onChange={handleMinChange}
                    />
                    <div className="d-flex justify-content-between mt-1">
                    <span>$1</span>
                    <input
                        type="number"
                        className="form-control form-control-sm"
                        value={min}
                        onChange={handleMinChange}
                        style={{ width: "60px" }}
                    />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Maximum</label>
                    <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="100"
                    value={max}
                    onChange={handleMaxChange}
                    />
                    <div className="d-flex justify-content-between mt-1">
                    <span>$100</span>
                    <input
                        type="number"
                        className="form-control form-control-sm"
                        value={max}
                        onChange={handleMaxChange}
                        style={{ width: "60px" }}
                    />
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                <button className="btn btn-primary w-50">Apply</button>
                </div>
                </div>
                {/* popular product */}
                <div className='card popular-product p-3'>
                <h4 className='mb-3'>Popular Product</h4> 

                <div className='d-flex flex-column gap-3'>

                    <div className='d-flex align-items-center'>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/image/PopCat1.jpg`}  style={{width:"5rem"}} alt="Product 1"/>
                    </div>
                    <div className='ms-2'>
                        <span>One piece product</span>
                        <div className='d-flex justify-content-between'>
                        <span className='text-danger'>9.99$</span>
                        <a href='#' className='text-primary'>View now -{'>'}</a>
                        </div>
                    </div>
                    </div>

                    <div className='d-flex align-items-center'>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/image/PopCat1.jpg`}  style={{width:"5rem"}} alt="Product 2"/>
                    </div>
                    <div className='ms-2'>
                        <span>One piece product</span>
                        <div className='d-flex justify-content-between'>
                        <span className='text-danger'>9.99$</span>
                        <a href='#' className='text-primary'>View now -{'>'}</a>
                        </div>
                    </div>
                    </div>

                    <div className='d-flex align-items-center'>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/image/PopCat1.jpg`}  style={{width:"5rem"}} alt="Product 3"/>
                    </div>
                    <div className='ms-2'>
                        <span>One piece product</span>
                        <div className='d-flex justify-content-between'>
                        <span className='text-danger'>9.99$</span>
                        <a href='#' className='text-primary'>View now -{'>'}</a>
                        </div>
                    </div>
                    </div>

                    <div className='d-flex align-items-center'>
                    <div>
                        <img src={process.env.PUBLIC_URL + `/image/PopCat1.jpg`}  style={{width:"5rem"}} alt="Product 4"/>
                    </div>
                    <div className='ms-2'>
                        <span>One piece product</span>
                        <div className='d-flex justify-content-between'>
                        <span className='text-danger'>9.99$</span>
                        <a href='#' className='text-primary'>View now -{'>'}</a>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                </div>
                    {/* Content start*/}
                <div>
                    <div className='container'>
                        <h4 className='mt-3 mb-3'>Anime Figurine</h4>
                        <div className='d-flex justify-content-between align-items-center mb-3 flex-wrap'>
                            <div className='d-flex align-items-center gap-3'>
                                <span className='text-primary'><LayoutGrid/></span>
                                <span><LayoutList/></span>
                                <select className='border-0'><option>Default setting</option></select>
                            </div>
                            <div>
                                <span>Showing result 1-9 of 24 results</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="d-flex flex-wrap">
                        {products.map((product, index) => (
                        <div key={index} className="card shadow-sm img-hover" style={{ width: "14rem", margin: "0.75rem" }}>
                            <img
                            className="card-img-top" src={process.env.PUBLIC_URL + `/${product.image}`} alt={product.title} style={{ height: "200px", objectFit: "cover" }}/>
                            <div className="card-body d-flex flex-column">
                            <h6 className="card-title mb-2">{product.title}</h6>
                            <p className="text-muted mb-3">{product.price || "$29.99"}$</p>
                            
                            {/* Order Button */}
                            <button className="btn btn-dark" onClick={()=>props.addToCart(product)}>
                                Order Now
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                </div>
                {/* End of container fluid */}
                </div>
            </div>
                        
        </div>
    );
}

export default Toy;