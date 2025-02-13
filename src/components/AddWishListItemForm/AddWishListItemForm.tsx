import React, { useState } from "react";

export function AddWishListItemForm() {
  const [name, setName] = useState<string>("");
  const [shopLink, setShopLink] = useState<string>("");

  function isValidLink(link: string) { // 
    const isValidPrefix = link.includes("http://") && link.includes("https://")

    return isValidPrefix;
  }

  function handleSubmit() {
    isValidLink(shopLink);
  }

  return (
    <form>
      <input name="Название" value={name}/>
      <input name="Ссылка" value={shopLink}/>
      <input name="Изображения" type="image"/>
      <button onClick={handleSubmit} type="submit">Добавить</button>
    </form>
  )
}