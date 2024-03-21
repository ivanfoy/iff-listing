import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{ background: "#111" }}>
        <div className="container py-4">
          <div className="row py-5 gy-3">
            <div className="col-md-4 col-sm-12">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/listings/2-0/img/logo-footer.e13c420c.svg"
                  alt=""
                  width="30"
                />
                <span className="text-uppercase text-sm fw-bold text-white ms-2">
                  Listings
                </span>
              </div>
              <p className="text-muted text-sm fw-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mb-0 text-white">
                <li className="list-inline-item">
                  <a className="reset-anchor text-sm" href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="reset-anchor text-sm" href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="reset-anchor text-sm" href="#!">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="reset-anchor text-sm" href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h6 className="pt-2 text-white">Useful links</h6>
              <div className="d-flex flex-wrap">
                <ul className="list-unstyled text-muted mb-0 mb-3 me-4">
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Tools
                    </a>
                  </li>
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Write to us
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled text-muted mb-0">
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a className="reset-anchor text-sm" href="#!">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <h6 className="pt-2 text-white">Newsletter</h6>
              <p className="text-muted text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="">
                <div className="input-group">
                  <input
                    className="form-control bg-none border-dark text-white"
                    type="email"
                    placeholder="Type your email address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-light"
                    id="button-addon2"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyrights py-4" style={{ background: "#0e0e0e" }}>
          <div className="container">
            <div className="row text-center gy-2">
              <div className="col-sm-6 text-lg-start">
                <p className="mb-0 text-muted mb-0 text-sm">
                  &copy; 2021 All rights reserved.
                </p>
              </div>
              <div className="col-sm-6 text-md-end">
                <p className="mb-0 text-muted mb-0 text-sm">
                  Template designed by{" "}
                  <a
                    className="reset-anchor text-primary"
                    href="https://bootstrapious.com/p/listings-bootstrap-directory-theme"
                  >
                    Bootstrapious
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
