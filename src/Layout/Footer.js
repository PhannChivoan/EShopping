import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="footer-container position-relative w-100 d-flex flex-column flex-md-row align-items-center">

        {/* QR Code on the left */}
        <div className="shadow p-3 bg-white rounded mb-4 mb-md-0 mx-md-5" style={{ maxWidth: '200px', width: '100%' }}>
          <img
            src={process.env.PUBLIC_URL + `/image/QR.png`}
            alt="QR Code"
            className="img-fluid d-block mx-auto mb-2"
            style={{ maxWidth: '150px' }}
          />
          <span className="d-block text-center">Join US</span>
        </div>

        {/* Contact US centered */}
        <div className="d-none d-md-flex position-absolute start-50 translate-middle-x">
          <div style={{ maxWidth: '400px', width: '100%' }} className="text-center">
            <h5>Contact US</h5>
            <p>Address: #123, Street 123, Sangkat BKK1, Toul Sleng</p>
            <p>Email: example@gmail.com</p>
            <p>Phone: 016654546</p>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>

        {/* Contact US stacked on small screens */}
        <div className="d-flex d-md-none justify-content-center w-100">
          <div style={{ maxWidth: '400px', width: '100%' }} className="text-center">
            <h5>Contact US</h5>
            <p>Address: #123, Street 123, Sangkat BKK1, Toul Sleng</p>
            <p>Email: example@gmail.com</p>
            <p>Phone: 0912838</p>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>

      </div>

      <hr className="my-4" />
      <div className="text-center">
        <p className="mb-0">This project is distributed by @Phann Chivoan.</p>
      </div>
    </footer>
  );
}

export default Footer;
