const PRODUCTS = [
    {
      id: 1,
      title: "Alfombrilla para Drenaje",
      category: "Baño",
      price: 390,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://milgenialuruguay.com/cdn/shop/products/deso01_de37f9b7-c7b5-484e-bf72-4b5225a1aa02.png?v=1682980114&width=600",
      stock: 50,
    },
    {
      id: 2,
      title: "Estante Esquinero Autoadhesivo",
      category: "Hogar",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 790,
      img: "https://milgenialuruguay.com/cdn/shop/products/img1_003d67d6-933d-4fcd-8197-52b2a6595b30.jpg?v=1682981609&width=700",
      stock: 50,
    },
    {
      id: 3,
      title: "Organizador Adhesivo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      category: "Hogar",
      price: 390,
      img: "https://milgenialuruguay.com/cdn/shop/products/img2_c2480084-01ba-4a05-9d75-1f937db46386.jpg?v=1682981621&width=700",
      stock: 5,
    },
    {
      id: 4,
      title: "Contenedor de Liquido",
      category: "Cocina",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 690,
      img: "https://milgenialuruguay.com/cdn/shop/files/S63484b2edbd4464fa3da8f1f1bf7aed7y.jpg?v=1683144908&width=700",
      stock: 12,
    },
    {
      id: 5,
      title: "Percha Plegable",
      category: "Hogar",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 990,
      img: "https://milgenialuruguay.com/cdn/shop/products/img1_8a18bdb3-2b71-4c63-8fe7-fe1513501fe7.jpg?v=1682981465&width=800",
      stock: 50,
    },
    {
      id: 6,
      title: "Rallador 6 en 1",
      category: "Cocina",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 1290,
      img: "https://milgenialuruguay.com/cdn/shop/products/img5_d6eee180-a8cc-4bd3-bcd0-cfc558a72c1d.jpg?v=1682981496&width=1000",
      stock: 7,
    },
  ];

  export const getProducts = (id) => {
    const _products = id
      ? PRODUCTS.filter((product) => product.category.toLowerCase() === id)
      : PRODUCTS;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_products);
      }, 500);
    });
  };
  
  export const getProduct = (id) => {
    const product = PRODUCTS.filter((product) => product.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(product);
      }, 1500);
    });
  };