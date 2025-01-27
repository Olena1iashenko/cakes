import { nanoid } from "nanoid";

const cakes = [
  {
    id: nanoid(),
    productName: "Pumpkin Latte Cake",
    price: 100,
    images: [
      "../../images/pumpkin-late-1.jpeg",
      "../../images/pumpkin-late-2.jpeg",
    ],
    description:
      "A spiced pumpkin cake with a creamy caramel and pumpkin layer.",
  },
  {
    id: nanoid(),
    productName: "Chocolate Cherry Cake",
    price: 120,
    images: [
      "../../images/choco-cherry-1.jpeg",
      "../../images/choco-cherry-2.jpeg",
    ],
    description:
      "A decadent chocolate cake layered with cherry filling and rich chocolate ganache.",
  },
  {
    id: nanoid(),
    productName: "Red Velvet Cranberry Cake",
    price: 130,
    images: [
      "../../images/red-velvet-1.jpeg",
      "../../images/red-velvet-2.jpeg",
    ],
    description:
      "Classic red velvet cake with a cranberry-orange filling and cream cheese frosting.",
  },
  {
    id: nanoid(),
    productName: "Cupcakes",
    price: 100,
    images: ["../../images/cupcakes-1.jpeg", "../../images/cupcakes-2.jpeg"],
    description:
      "A variety of frosted cupcakes, perfect for any celebration or casual dessert.",
  },
  {
    id: nanoid(),
    productName: "Strudel",
    price: 90,
    images: ["../../images/strudel.jpeg", "../../images/strudel.jpeg"],
    description:
      "A traditional Austrian pastry filled with apples and a hint of cinnamon.",
  },
  {
    id: nanoid(),
    productName: "Poppy Cherry Cake",
    price: 120,
    images: [
      "../../images/poppy-cherry.jpeg",
      "../../images/poppy-cherry.jpeg",
    ],
    description:
      "A moist cake made with poppy seeds and layered with cherry filling.",
  },
  {
    id: nanoid(),
    productName: "Lemon Cupcakes",
    price: 90,
    images: [
      "../../images/lemon-cupcakes.jpeg",
      "../../images/lemon-cupcakes.jpeg",
    ],
    description:
      "Zesty lemon cupcakes with a tangy lemon frosting for a refreshing treat.",
  },
  {
    id: nanoid(),
    productName: "Brownie",
    price: 190,
    images: ["../../images/brownie.jpeg", "../../images/brownie.jpeg"],
    description:
      "Rich and fudgy chocolate brownies with a crackly top, perfect for chocolate lovers.",
  },
  {
    id: nanoid(),
    productName: "Blueberry Tart",
    price: 190,
    images: [
      "../../images/blueberry-tarte.jpeg",
      "../../images/blueberry-tarte.jpeg",
    ],
    description:
      "A buttery tart filled with sweet blueberries and a hint of lemon zest.",
  },
  {
    id: nanoid(),
    productName: "Basques Cheesecake",
    price: 190,
    images: ["../../images/basques.jpeg", "../../images/basques.jpeg"],
    description:
      "A creamy and caramelized cheesecake with a slightly burnt top for a unique flavor.",
  },
];

export default cakes;
