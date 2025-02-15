import React from "react";
import { Wish } from "../../model/Wish";
import styles from "./Homepage.module.css"

type Wishes = {
  name: string;
  wishes: Wish[];
}
type WishList = Wishes & {};
type TierList = Wishes & {};

interface User {
  nickname: string;
  wishLists: Wishes[];
}

export function Homepage() {
  const user: User = {
    nickname: "taxrndos",
    wishLists: [
      {
        name: "B-day",
        wishes: [
          {name: "One Piece Tom 99"},
          {name: "Наушники", shopLink: "https://doctorhead.ru/product/beyerdynamic_dt_990_pro_250_ohm/?srsltid=AfmBOorXqf9rugz7cfcjfiC_qGyt8W9iMbd9UmNZcnPIC1iBW5CF1zBD"},
          {name: "Сплит клавиатура"},
          {name: "Коврик 120 х 70"},
          {name: "Пивной стакан"}
        ]
      },
      {
        name: "Wedding",
        wishes: [
          {name: "house"},
          {name: "car"}
        ] 
      },
      {
        name: "New year dfsddffdf dfdfd df dfd d fd fd dfd sd fsdfsdfsd fsd fsd sd sd f df df df d f df d fd f df d fd f ",
        wishes: [
          {name: "Nutella 350g"}
        ] 
      }
    ]
  }
  return <div className={styles.pageWrapper}>
    <div className={styles.userInfo}>
      <div className={styles.avatar}>sds</div>
      <h1>{user.nickname}</h1>
    </div>
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Your events:</h1>
      <div className={styles.wishListsContainer}>
        {user.wishLists.map(wishList => (
          <EventPreview eventWishes={wishList}/>
        ))}
      </div>
    </div>
  </div>
}

type EventPreviewProps = {
  eventWishes: Wishes
}
export function EventPreview({eventWishes}: EventPreviewProps) {
  return <div className={styles.wishListPreview}>
    {/* blurred image */}
    <h1>{eventWishes.name}</h1>
  </div>
}