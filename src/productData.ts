export type ProductItemProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
};

export const productData: Array<ProductItemProps> = [
    {
        id: 1,
        title: "Star Wars: Battlefront",
        description: "Immerse yourself in the ultimate Star Wars experience.",
        image: "/assets/game1.jpg",
        price: 300,
    },
    {
        id: 2,
        title: "Dying Light",
        description: "Dying Light is an open world first person survival horro action-adventure video game developed by Techland.",
        image: "/assets/game2.jpg",
        price: 500,
    },
    {
        id: 3,
        title: "Bloodborne",
        description: "Bloodborne is an action role-playing video game developed by FromSoftware.",
        image: "/assets/game3.jpg",
        price: 9999,
    },
    {
        id: 4,
        title: "Evolve",
        description: "Evolve is a first-person shooter video game developed by Turtle Rock Studios.",
        image: "/assets/game4.jpg",
        price: 150,
    },
];
