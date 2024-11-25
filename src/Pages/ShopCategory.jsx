
import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../Components/Items/Item";


export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
    <div className="shop-category">
      <div className="shop-left">
        <h2>Latest Collection</h2>
        <p>Discount is ON</p>
        <div className="shop-text">
          <p>The Best Sticker Collection is HERE!!!</p>
          <p>
            Buy the latest and Trendy stickers from STICKIES at affordable
            Prices and get discounts on all items.
          </p>
        </div>
      </div>

      <div className="hero-right">
        <img className='shopcategory-banner'src={props.banner} alt="" />
      </div>
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src="" alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      </>
  );
};