import '../Navbar/Navbar.css';
import logo from '../Components/Assests/logo.png';
import cart from '../Components/Assests/cart_icon.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    const [menu, setMenu] = useState("");
    return <>
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>Shopping</p>
            </div>
            <ul className="nav-menu">

                <li onClick={() => setMenu("shop")}>
                    <NavLink to='/'>
                        Shop
                    </NavLink>
                    {menu === "shop" ? <hr /> : ""}
                </li>


                <li onClick={() => setMenu("mens")}>
                    <NavLink to='/mens'>
                        Men
                    </NavLink>{menu === "mens" ? <hr /> : ""}
                </li>


                <li onClick={() => setMenu("women")}>
                    <NavLink to="womens">Women</NavLink>{menu === "women" ? <hr /> : ""}</li>


                <li onClick={() => setMenu("kids")}>
                    <NavLink to="/kids">
                        Kids
                    </NavLink>{menu === "kids" ? <hr /> : ""}
                </li>

            </ul>
            <div className="nav-login-cart">
                <button>
                    <NavLink to='/login'>Login</NavLink>
                </button>
                <NavLink to='/cart'>
                    <img src={cart} alt="cart-icon" />
                </NavLink>
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    </>
}