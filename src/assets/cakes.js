import { nanoid } from "nanoid";

const cakes = [
  {
    id: nanoid(),
    productName: "Pumpkin Latte Cake",
    price: 100,
    images: [
      "../../public/images/pumpkin-late-1.jpeg",
      "../../public/images/pumpkin-late-2.jpeg",
    ],
  },
  {
    id: nanoid(),
    productName: "Chocolate Cherry Cake",
    price: 120,
    images: [
      "../../public/images/choco-cherry-1.jpeg",
      "../../public/images/choco-cherry-2.jpeg",
    ],
  },
  {
    id: nanoid(),
    productName: "Red Velvet Cranberry Cake",
    price: 130,
    images: [
      "../../public/images/red-velvet-1.jpeg.jpeg",
      "../../public/images/red-velvet-2.jpeg.jpeg",
    ],
  },
];

export default cakes;
