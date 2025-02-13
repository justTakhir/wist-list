import React from "react";
import { Wish } from "../../model/Wish";

type WishListItemProps = {
  wish: Wish;
}

export function WishListItem({wish}: WishListItemProps) {
  return (
    <div>
      <div>
        {wish.name}
      </div> 
      <a href={wish.shopLink}></a>
    </div>
  );
}