export interface Wish {
  /** Название подарка */
  name: string;
  /** Ссылка на конкретный лот */
  shopLink?: string;
  /** Одно или несколько изображений для лучшего знакомства с желаемым  */
  images?: string[]
}
//
// interface WishList {}