const titulos = [
  {
    author: "George R. R. Martin",
    color: "#293241",
    colorFont: "white",
    comment: "Master pieace.",
    description: "Discription example...",
    font: '"Bebas Neue", cursive',
    heigth: "130px",
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/515dEL-sQ7L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    rating: "3",
    texture: "url(https://www.transparenttextures.com/patterns/black-orchid.png)",
    title: "Gelo e Fogo",
  },
  {
    author: "Ta-Nehisi Coates",
    color: "#293241",
    colorFont: "white",
    comment: "Amazing book.",
    description: "Between the World and Me is a 2015 nonfiction book written by American author Ta-Nehisi Coates and published by Spiegel & Grau. It is written as a letter to the author's teenage son about the feelings, symbolism...",
    font: '"Dancing Script", cursive',
    heigth: "100px",
    id: 2,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSM8Kzvt1fXGIwmgwTZN7qTeQULpPOQVsCvgPChE2VyL854x1O8",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Between the World and Me",
  },
  {
    author: "Yuval Noah Harari",
    color: "#ee6c4d",
    colorFont: "black",
    comment: "A fascinating journey to discover more about our past and about ourselves.",
    description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught...",
    font: '"Dancing Script", cursive',
    heigth: "120px",
    id: 3,
    img: "http://prodimage.images-bn.com/pimages/9780062316110_p0_v5_s1200x630.jpg",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Sapiens: A Brief History of Humankind"
  },
  {
    author: "Dan Brown",
    color: "#98c1d9",
    colorFont: "black",
    comment: "More of the same.",
    description: "Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons...",
    font: '"Akaya Telivigala", cursive',
    heigth: "130px",
    id: 4,
    img: "https://www.jungle.lk/wp-content/uploads/2019/07/Inferno-Story-Book-by-Dan-Brown.jpg",
    rating: "2",
    texture: "url(https://www.transparenttextures.com/patterns/binding-light.png)",
    title: "Inferno",
  },
  {
    author: "George R. R. Martin",
    color: "#293241",
    colorFont: "white",
    comment: "Master pieace.",
    description: "Discription example...",
    font: '"Bebas Neue", cursive',
    heigth: "130px",
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/515dEL-sQ7L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    rating: "3",
    texture: "url(https://www.transparenttextures.com/patterns/black-orchid.png)",
    title: "Gelo e Fogo",
  },
  {
    author: "Ta-Nehisi Coates",
    color: "#293241",
    colorFont: "white",
    comment: "Amazing book.",
    description: "Between the World and Me is a 2015 nonfiction book written by American author Ta-Nehisi Coates and published by Spiegel & Grau. It is written as a letter to the author's teenage son about the feelings, symbolism...",
    font: '"Dancing Script", cursive',
    heigth: "100px",
    id: 6,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSM8Kzvt1fXGIwmgwTZN7qTeQULpPOQVsCvgPChE2VyL854x1O8",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Between the World and Me",
  },
  {
    author: "Yuval Noah Harari",
    color: "#ee6c4d",
    colorFont: "black",
    comment: "A fascinating journey to discover more about our past and about ourselves.",
    description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught...",
    font: '"Dancing Script", cursive',
    heigth: "120px",
    id: 7,
    img: "http://prodimage.images-bn.com/pimages/9780062316110_p0_v5_s1200x630.jpg",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Sapiens: A Brief History of Humankind"
  },
  {
    author: "Dan Brown",
    color: "#98c1d9",
    colorFont: "black",
    comment: "More of the same.",
    description: "Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons...",
    font: '"Akaya Telivigala", cursive',
    heigth: "130px",
    id: 8,
    img: "https://www.jungle.lk/wp-content/uploads/2019/07/Inferno-Story-Book-by-Dan-Brown.jpg",
    rating: "2",
    texture: "url(https://www.transparenttextures.com/patterns/binding-light.png)",
    title: "Inferno",
  },
  {
    author: "Ta-Nehisi Coates",
    color: "#293241",
    colorFont: "white",
    comment: "Amazing book.",
    description: "Between the World and Me is a 2015 nonfiction book written by American author Ta-Nehisi Coates and published by Spiegel & Grau. It is written as a letter to the author's teenage son about the feelings, symbolism...",
    font: '"Dancing Script", cursive',
    heigth: "100px",
    id: 9,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSM8Kzvt1fXGIwmgwTZN7qTeQULpPOQVsCvgPChE2VyL854x1O8",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Between the World and Me",
  },
  {
    author: "Yuval Noah Harari",
    color: "#ee6c4d",
    colorFont: "black",
    comment: "A fascinating journey to discover more about our past and about ourselves.",
    description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught...",
    font: '"Dancing Script", cursive',
    heigth: "120px",
    id: 10,
    img: "http://prodimage.images-bn.com/pimages/9780062316110_p0_v5_s1200x630.jpg",
    rating: "5",
    texture: "url(https://www.transparenttextures.com/patterns/dark-exa.png)",
    title: "Sapiens: A Brief History of Humankind"
  },
  {
    author: "Dan Brown",
    color: "#98c1d9",
    colorFont: "black",
    comment: "More of the same.",
    description: "Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons...",
    font: '"Akaya Telivigala", cursive',
    heigth: "130px",
    id: 11,
    img: "https://www.jungle.lk/wp-content/uploads/2019/07/Inferno-Story-Book-by-Dan-Brown.jpg",
    rating: "2",
    texture: "url(https://www.transparenttextures.com/patterns/binding-light.png)",
    title: "Inferno",
  }
];

export default titulos;
