import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Autoplay, Pagination,Grid } from "swiper/modules";
import { MoveRight } from "lucide-react";
import { Link } from 'react-router-dom';

function Content(props) {
  const products = [
    {
      id : 1,
      title: "one piece",
      description: "new model",
      price: 100,
      stock : 50,
      image: "image/Cat6.jpg",
    },
    {
      id : 2,
      title: "two piece",
      price: 200,
      stock:10,
      description: "new model",
      image: "image/Cat3.jpg",
    },
    {
      id : 3,
      stock : 10,
      title: "one piece",
      price: 100,
      description: "new model",
      image: "image/Cat4.jpg",
    },
    {
      id : 4,
      stock : 10,
      title: "two piece",
      price: 100,
      description: "new model",
      image: "image/Cat5.jpg",
    },
    {
      id : 5,
      stock : 10,
      title: "one piece",
      price: 100,
      description: "new model",
      image: "image/Panda.jpg",
    },
    {
      id : 6,
      stock : 10,
      title: "two piece",
      price: 100,
      description: "new model",
      image: "image/ChingChang.jpg",
    },
  ];
  const Card = [
    {
      id : 1,
      stock : 10,
      title: "Card 1",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card1.jpg"
    },
    {
      id : 2,
      stock : 10,
      title: "Card 2",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card2.jpg"
    },
    {
      id : 3,
      stock : 10,
      title: "Card 3",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card3.jpg"
    },
    {
      id : 4,
      stock : 10,
      title: "Card 4",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card4.jpg"
    },
    {
      id : 5,
      stock : 10,
      title: "Card 5",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card5.jpg"
    },
    {
      id : 6,
      stock : 10,
      title: "Card 6",
      price : 2.5,
      description : "One piece Card",
      image: "image/Card6.jpg"
    }
  ];

  const accessories = [
    {
      id : 1,
      stock : 10,
      title: "Accessories 1",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories1.jpg"
    },
    {
      id : 2,
      stock : 10,
      title: "Accessories 2",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories2.jpg"
    },
    {
      id : 3,
      stock : 10,
      title: "Accessories 3",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories3.jpg"
    },
    {
      id : 4,
      stock : 10,
      title: "Accessories 4",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories4.jpg"
    },
    {
      id : 5,
      stock : 10,
      title: "Accessories 5",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories5.jpg"
    },
    {
      id : 6,
      stock : 10,
      title: "Accessories 6",
      price : 2.5,
      description : "Bleach Key Chain",
      image: "image/Accessories6.jpg"
    },
  ];

  const productGroups = [
    { name: "New Arrival", products: products.slice(0, 4) },
    { name: "Best Seller", products: Card.slice(0, 4) },
    { name: "Promotion", products: accessories.slice(0, 4) },
    { name: "Featured", products: products.slice(4, 8) },
  ];

  const [activeFilter, setActiveFilter] = useState(0);
  // Ref to control swiper
  const swiperRef = useRef(null); 

  const handleButtonClick = (index) => {
    setActiveFilter(index);
    if (swiperRef.current && swiperRef.current.swiper) {
       // Slide to selected index
      swiperRef.current.swiper.slideTo(index,600);
    }
  };
  
  return (
    <div className="mb-5" style={{ width: "100%" }}>
      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        slidesPerView={1}
        spaceBetween={30}
        style={{ width: "100%", height: "600px" }}
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/image/Cat1.jpg'}
            alt="Slide 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/image/Cat2.jpg'}
            alt="Slide 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/image/ChingChang2.jpg'}
            alt="Slide 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Popular Selections */}
    <div className="container mt-5 text-center">
      <div className="d-flex flex-wrap justify-content-center gap-2 w-50 mx-auto mb-4">
        {productGroups.map((filter, index) => (
          <button
            key={filter.name}
            className={`btn flex-shrink-0 ${
              activeFilter === index ? "btn-secondary" : "btn-outline-secondary"
            }`}
            style={{ width: "120px" }}
            onClick={() => handleButtonClick(index)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <Swiper
        ref={swiperRef} 
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveFilter(swiper.activeIndex)} 
        slidesPerView={1}
        spaceBetween={16}
        style={{ paddingBottom: "30px" }}
      >
        {productGroups.map((filter) => (
          <SwiperSlide key={filter.name}>
            <div className="d-flex flex-wrap mt-2 justify-content-center">
              {filter.products.map((product) => (
                <div
                  key={product.id}
                  className="card shadow-sm img-hover"
                  style={{ width: "14rem", margin: "0.75rem" }}
                >
                  <img
                    className="card-img-top"
                    src={process.env.PUBLIC_URL + `/${product.image}`}
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mb-2">{product.title}</h6>
                    <p className="text-muted mb-3">{product.price}$</p>
                    <button
                      className="btn btn-dark w-100 mt-auto"
                      onClick={() => props.addToCart(product)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 
{/* -------------------------------------------------------------------------------------- */}
      {/* Toy Section */}
    <div className="container mt-5">
      <div className="d-flex  justify-content-between border-bottom pb-2 mb-3">
        <h3>Toy</h3>
        <div>
          <Link to="/toy">More Products <MoveRight /></Link>
        </div>
      </div>

      <div className="product-landscape">
      <div className="toy-header-img" style={{ flex: "0 0 auto", marginRight: "16px" }}>
        <img src={process.env.PUBLIC_URL + `image/PinkBear.jpg`} className="toy-img"/>
      </div>
        <div className="d-md-block d-lg-none card-space mt-3 mt-sm-0" style={{ flex: 1,height:"200px", minWidth: "0" }}>
              <Swiper
              modules={[Pagination, Grid]}
              slidesPerView={2}
              slidesPerGroup={2}            
              grid={{ rows: 2, fill: 'row' }}
              className="swiper-medium-landscape"
              spaceBetween={16}
              pagination={{ clickable: true }}
              style={{ width: '100%', minHeight: '400px' }}
            >
            {products.map((product, index) => (
              <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                <div className="card" style={{ width: "160px" }}>
                  <img
                    className="card-img-top"
                   src={process.env.PUBLIC_URL + `/${product.image}`}
                    alt={product.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between p-2">
                    <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                      {product.title}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: "14px" }}>{product.price}$</span>
                      <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Large screen grid */}
        <div className="row g-3 d-none d-lg-flex" style={{ flex: 1 }}>
          {products.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 img-hover">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + `/${product.image}`}
                  alt={product.title}
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <div className="card-body p-2 d-flex flex-column justify-content-between">
                  <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                    {product.title}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "14px" }}>{product.price}$</span>
                    <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>

      {/* Card Section */}
      <div className="container mt-5">
      <div className="d-flex  justify-content-between border-bottom pb-2 mb-3">
        <h3>Card</h3>
        <div>
          <Link to='/card'>More Products <MoveRight /></Link>
        </div>
      </div>

      <div className="product-landscape">
      <div className="toy-header-img" style={{ flex: "0 0 auto", marginRight: "16px" }}>
         <img src={process.env.PUBLIC_URL + `image/Yugioh.jpg`} className="toy-img"/>
      </div>
        <div className="d-md-block d-lg-none card-space mt-3 mt-sm-0" style={{ flex: 1,height:"200px", minWidth: "0" }}>
              <Swiper
              modules={[Pagination, Grid]}
              slidesPerView={2}
              slidesPerGroup={2}            
              grid={{ rows: 2, fill: 'row' }}
              className="swiper-medium-landscape"
              spaceBetween={16}
              pagination={{ clickable: true }}
              style={{ width: '100%', minHeight: '400px' }}
            >
            {Card.map((product, index) => (
              <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                <div className="card" style={{ width: "160px" }}>
                  <img
                    className="card-img-top"
                    src={process.env.PUBLIC_URL + `/${product.image}`}
                    alt={product.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between p-2">
                    <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                      {product.title}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: "14px" }}>{product.price}$</span>
                      <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Large screen grid */}
        <div className="row g-3 d-none d-lg-flex" style={{ flex: 1 }}>
          {Card.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 img-hover">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + `/${product.image}`}
                  alt={product.title}
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <div className="card-body p-2 d-flex flex-column justify-content-between">
                  <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                    {product.title}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "14px" }}>{product.price}$</span>
                    <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>


      {/* Accessories Section */}
      <div className="container mt-5">
      <div className="d-flex  justify-content-between border-bottom pb-2 mb-3">
        <h3>Accessories</h3>
        <div>
          <Link to='/toy'>More Products <MoveRight /></Link>
        </div>
      </div>

      <div className="product-landscape">
      <div className="toy-header-img" style={{ flex: "0 0 auto", marginRight: "16px" }}>
         <img src={process.env.PUBLIC_URL + `image/AnimeAccessories.jpg`} className="toy-img"/>
      </div>
        <div className="d-md-block d-lg-none card-space mt-3 mt-sm-0" style={{ flex: 1,height:"200px", minWidth: "0" }}>
              <Swiper
              modules={[Pagination, Grid]}
              slidesPerView={2}
              slidesPerGroup={2}            
              grid={{ rows: 2, fill: 'row' }}
              className="swiper-medium-landscape"
              spaceBetween={16}
              pagination={{ clickable: true }}
              style={{ width: '100%', minHeight: '400px' }}
            >
            {accessories.map((product, index) => (
              <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                <div className="card" style={{ width: "160px" }}>
                  <img
                    className="card-img-top"
                    src={process.env.PUBLIC_URL + `/${product.image}`}
                    alt={product.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between p-2">
                    <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                      {product.title}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: "14px" }}>{product.price}$</span>
                      <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Large screen grid */}
        <div className="row g-3 d-none d-lg-flex" style={{ flex: 1 }}>
          {accessories.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 img-hover">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + `/${product.image}`}
                  alt={product.title}
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <div className="card-body p-2 d-flex flex-column justify-content-between">
                  <p className="card-text text-center mb-2" style={{ fontSize: "14px" }}>
                    {product.title}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "14px" }}>{product.price}$</span>
                    <button className="btn btn-dark btn-sm" onClick={()=>props.addToCart(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>

    </div>
  );
}

export default Content;
