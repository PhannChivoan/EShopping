import React from 'react';

function Cart(props) {
    const { cart, increateQty, decreateqty, removeFromCart, clearCart } = props;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className='mb-2'>
        <div className="container p-2">
        <div className="d-flex align-items-center">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-primary">Cart</span>
        </div>
        </div>
            <div className='toy-header d-flex align-items-center'>
                <div className='container'>
                <h1>Cart</h1>
                </div>
            </div>
        {/*Cart Content  */}
        <div className='mt-5 container'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-8'>
            <div className="table-responsive">
                <table className='table cart-table'>
                    <thead>
                        <tr>
                            <th scope='col' className='px-4'>Product</th>
                            <th scope='col' className="text-center">Price</th>
                            <th scope='col' className="text-center">Quantity</th>
                            <th scope='col' className="text-center">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className="align-middle py-3">
                                    <div className='d-flex align-items-start'>
                                        <img src={process.env.PUBLIC_URL + `/${item.img}`} style={{width:"6rem",height:"6rem",objectFit:"cover"}}/>
                                        <div className='ms-2'>
                                            <span>Code</span>
                                            <div style={{maxWidth:"150px",overflowWrap:"break-word",wordBreak:"break-word"}}>
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">{item.price}$</td>
                                <td className="align-middle text-center">
                                    <input type="text" value={item.quantity} className='w-50'/>
                                </td>
                                <td className="align-middle text-center">{item.price*item.quantity}$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

            {/* Payment */}
                <div className="col-12 col-sm-12 col-md-4">
                <div className="card p-4 cart-card">
                    <h4 className="border-bottom pb-2 mb-4">Cart Total</h4>

                    <div className="mb-4">
                    <p className="fw-semibold mb-3">Delivery / Pickup</p>

                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="pickupCheck"/>
                        <label className="form-check-label" htmlFor="pickupCheck">
                        Pickup
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="deliveryCheck"/>
                        <label className="form-check-label" htmlFor="deliveryCheck">
                        Delivery
                        </label>
                    </div>
                    </div>

                    <div className="border-bottom pb-4 mb-4">
                    <p className="fw-semibold mb-3">Delivery to</p>
                    <div className="d-flex flex-column gap-3">
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="custom-input"
                        />
                        <input
                        type="text"
                        placeholder="Address"
                        className="custom-input"
                        />
                        <select className="custom-input">
                        <option>Phnom Penh</option>
                        <option>Siem Reap</option>
                        <option>Kampot</option>
                        </select>
                    </div>
                    </div>

                    {/* Cart Bottom */}
                    <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="m-0">Total</h5>
                        <span className="fw-bold">{total}$</span>
                    </div>
                    <button className="btn btn-secondary w-100">Check out</button>
                    </div>
                </div>
                </div>
        </div>
        </div>
        {/* end of cart content */}

           
                        
        </div>
    );
}

export default Cart;