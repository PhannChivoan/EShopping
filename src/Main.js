import React, { useEffect, useState } from 'react';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import { HashRouter, Routes,Route } from 'react-router-dom';
import Toy from './Layout/Toy';
import Card from './Layout/Card';
import Accessories from './Layout/Accessories';
import Trending from './Layout/Trending';
import Cart from './Layout/Cart';
import Notification from './Layout/Notification';
import Sidebar from './Layout/Sidebar';

function Main(props) {
    const [cart,setCart] = useState([]);
    const [notification,Setnotification] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    //   useEffect(() => {
    //     localStorage.removeItem("cart"); 
    //     setCart([]); 
    // }, []);
    function showNotification(message){
        Setnotification(message);
        setTimeout(()=>{
            Setnotification(null);
        },3000);
    }
    function addToCart(product){
    setCart(function (prevCart){
        const existingItem = prevCart.find(function (item){
            return item.id === product.id;
        });
        let updatedCart;

        if(existingItem){
            if(existingItem.quantity >= product.stock){
                alert("Out of stock!");
                return prevCart;
            }
            updatedCart = prevCart.map(function(item){
                if(item.id === product.id){
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
        } else {
            updatedCart = prevCart.concat({
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.image,
                stock: product.stock,
                quantity: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        showNotification(`${product.title} added to cart`)
        return updatedCart;
            });
        }

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if(savedCart.length) setCart(savedCart);
    }, []);

    function increateQty(id){
        setCart(function (prevCart){
            return prevCart.map(function (item){
                if(item.id === id){
                    if(item.quantity < item.stock){
                        return {...item,quantity:item.quantity + 1 };
                    }else{
                        alert("No more stock!");
                    }
                }
                return item;
            });
        });
    }
    function decreateqty(id){
        setCart(function (prevCart){
            return prevCart.map(function(item){
                if(item.id === id){
                    if(item.quantity > 1){
                        return {...item,quantity:item.quantity-1};
                    }
                }
                return item;
            });
        });
    }
    function removeFromCart(id){
        setCart(function (prevCart){
            return prevCart.filter(function(item){
                return item.id !== id;
            });
        });
    }
    function clearCart(){
        setCart([]);
    }
    return (
        <div>
            
            <HashRouter>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            {/* Wrapper for push effect */}
                <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <Header cart={cart} openSidebar={() => setIsSidebarOpen(true)}/>
            <Routes>
                <Route index element={<Content addToCart={addToCart}  />}></Route>
                <Route path="/toy" element={<Toy addToCart={addToCart}/>}></Route>
                <Route path="/card" element={<Card addToCart={addToCart}/>}></Route>
                <Route path="/accessories" element={<Accessories addToCart={addToCart}/>}></Route>
                <Route path="/trending" element={<Trending addToCart={addToCart}/>}></Route>
                <Route path="/cart" element={<Cart cart={cart} increateQty={increateQty} decreateqty={decreateqty} clearCart={clearCart} removeFromCart={removeFromCart}/>}></Route>
            </Routes>
            {notification && <Notification message={notification}/>}
            </div>
            </HashRouter>
            <Footer/>
            
        </div>
    );
}

export default Main;