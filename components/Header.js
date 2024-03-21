import Image from "next/image";
import Link from "next/link";
const Header = ({authName,handleLogOff,handleLogued}) => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 py-lg-2">
          <div className="container">
            <Link
              className="navbar-brand py-3 d-flex align-items-center"
              href={"/"} title="Home"
            >
              <Image
                src="/img/logo.svg"
                alt="Logo"
                width={30}
                height={30}
              />
              <span className="text-uppercase text-small fw-bold text-dark ms-2 mb-0">
                Listings
              </span>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" href={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/categories"}>
                    Categories
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="pages"
                    href={"company"}
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Company
                  </Link>
                  <div className="dropdown-menu mt-lg-3 shadow-sm">
                    <Link className="dropdown-item" href={"/about_us"}>
                      About Us.
                    </Link>
                   
                  </div>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" href={"/contact_us"}>
                    Contact us.
                  </Link>
                  
                </li>
               {authName && (
                <>
                <li className="nav-item">
                  <Link className="nav-link" href="/panel" title={`Hola ${authName}`}>
                  {`Hola ${authName}`}
                  </Link></li>
                  
                  <li className="nav-item">
                    <Link
                    href="#"
                    className="nav-link"
                    title="Login Off"
                    onClick={handleLogOff}
                    >
                    <i className="fas fa-sign-out-alt"></i>S
                    </Link>
                  </li>
                 
                </>
               )}
               {!authName && (
                <>
                  <li className="nav-item ms-lg-2 py-2 py-lg-0">
                    <Link className="btn btn-warning"
                    href="/login" title="Login/Sign Up">
                      <i className="fas fa-lock"></i>Login/Sign Up
                    </Link>
                  </li>
                </>
               )}
               
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
