import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import styles from "./AddWishListItemForm.module.css";

function Sumbit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Добавление.." : "Добавить"}
    </button>
  )
}

export function AddWishListItemForm() {
  const [name, setName] = useState<string>("");
  const [shopLink, setShopLink] = useState<string>("");

  function isValidLink(link: string) { // 
    const isValidPrefix = link.includes("http://") && link.includes("https://")

    return isValidPrefix;
  }

  function addWish(formData: FormData) {
    const query = formData.get("query")
    alert(query)
    isValidLink(shopLink);
  }

  return (
    <form method="post" action={addWish} className={styles.form}>
      <input name="Название" value={name} onChange={e => setName(e.target.value)}/>
      <input name="Ссылка" value={shopLink} onChange={e => setShopLink(e.target.value)}/>
      <Sumbit/>
      {/* <input name="Изображения" type="image"/> */}
      
    </form>
  )
}