import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../src/hooks/useGlobalContext";

function Navbar() {
  const { totalAmount } = useGlobalContext();

  return (
    <header className="bg-base-200">
      <div className="navbar w-full">
        <div className="navbar-start"></div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/basket">
            <div className="indicator">
              {totalAmount > 0 && (
                <span className="indicator-item badge badge-secondary h-[20px] w-[20px] flex items-center justify-center">
                  {totalAmount}
                </span>
              )}
              <button className="btn btn-ghost w-[50px] h-[20px]">
                <FaShoppingCart size={25} />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
