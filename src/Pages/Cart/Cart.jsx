import React, { useContext } from 'react'
import LayOut from '../../Component/Layout/LayOut'
import classes from "./Cart.module.css"
import { DataContext } from '../../Component/DataProvider/DataProvider'
import ProductCard from '../../Component/Product/ProductCard'
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat'
import {Link} from "react-router-dom"

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
  },0)
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No Item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift </small>
            </span>
            <Link to="/payments">Continue to checkout </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart
