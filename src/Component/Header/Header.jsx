import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import classes from "./Header.module.css"
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
        <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* Search Section  */}
        <div className={classes.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" />
            <IoIosSearch />
        </div>
        {/* Order Section  */}

        <div className={classes.order__container}>
            <a href="" className={classes.language}>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <select name="" >
                    <option value="">EN</option>
                </select>
            </a>
            <a href="/auth">
            <p>Sign In</p>
             <span>Account & Lists</span>
            </a>
            <a href="/orders">
            <p>Returns</p>
            <span>& Orders</span>
            </a>
            <a href="/cart" className={classes.cart}>
            <IoCart size={30}/>
            <span>0</span>
            </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
