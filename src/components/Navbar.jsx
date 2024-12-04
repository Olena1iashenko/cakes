import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav id="header" className="w-full z-50 top-0 py-1 stick">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex md:flex-col text-base text-left  text-gray-700 pt-4 md:pt-0">
              {location.pathname === "/cart" ? (
                <li>
                  <NavLink
                    className="inline-block no-underline hover:text-black py-2 px-4"
                    to="/"
                  >
                    Магазин
                  </NavLink>
                </li>
              ) : (
                <li>
                  <a
                    className="inline-block no-underline hover:text-black px-4 "
                    href="#about"
                  >
                    Про нас
                  </a>
                </li>
              )}
              {location.pathname !== "/cart" ? (
                <li>
                  <a
                    className="inline-block no-underline hover:text-black px-4 "
                    href="#about"
                  >
                    Контакти
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
        <div className="order-1 md:order-2">
          <a
            className="flex gap-1 items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl hover:fill-current"
            href="/"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="hover:inherit"
            >
              <path
                fill="black hover:orange"
                d="M19 5h-6V2h-2v3H5C3.346 5 2 6.346 2 8v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.654-1.346-3-3-3M5 7h14a1 1 0 0 1 1 1l.001 3.12c-.896.228-1.469.734-1.916 1.132c-.507.45-.842.748-1.588.748c-.745 0-1.08-.298-1.587-.747c-.595-.529-1.409-1.253-2.915-1.253c-1.505 0-2.319.724-2.914 1.253c-.507.45-.841.747-1.586.747c-.743 0-1.077-.297-1.582-.747c-.447-.398-1.018-.905-1.913-1.133V8a1 1 0 0 1 1-1M4 18v-4.714c.191.123.374.274.583.461C5.178 14.276 5.991 15 7.495 15c1.505 0 2.319-.724 2.914-1.253c.507-.45.841-.747 1.586-.747s1.08.298 1.587.747c.595.529 1.409 1.253 2.915 1.253s2.321-.724 2.916-1.253c.211-.188.395-.34.588-.464L20.002 18z"
              />
            </svg>
            Смаколики
          </a>
        </div>
        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <NavLink
            className="pl-3 inline-block no-underline hover:text-black hover:scale-125 transition-transform transform"
            to="/cart"
          >
            <svg
              className="fill-current hover:text-black "
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
