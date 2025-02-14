import React from "react";
import { Wish } from "../../model/Wish";
import styles from "./WishListItem.module.css";

type WishListItemProps = {
  wish: Wish;
}

export function WishListItem({wish}: WishListItemProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        {wish.name}
      </div> 
      <a href={wish.shopLink}></a>
    </div>
  );
}