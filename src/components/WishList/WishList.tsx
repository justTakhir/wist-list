import React from "react";
import styles from "./WishList.module.css"
import { Wish } from "../../model/Wish";
import { WishListItem } from "../WishListItem/WishListItem";
import { Button } from "../Button/Button";
import { AddWishListForm } from "../AddWishListForm/AddWishListForm";
import { AddWishListItemForm } from "../AddWishListItemForm/AddWishListItemForm";

function getWishes(){
  const wishes: Wish[] = [
    {name: "Mock 1"},
    {name: "Mock 2"},
    {name: "Mock 3"},
    {name: "Mock 4"},
    {name: "Mock 5"},
    {name: "Mock 6"},
  ]
  return wishes;
}

export function WishList() {
  const wishes = getWishes();

  function handleAddWish() {

  }

  return <div className={styles.wrapper}>
    <div className={styles.wishes}>
      {wishes.map(wish => (
        <WishListItem wish={wish} />
      ))}
      <Button text="Добавить" onClick={handleAddWish} classes={styles.addWish} />
    </div>
    <AddWishListItemForm/>
  </div>
}