let data = [
    {
        id: 1,
        KitobNomi: "Atomic Habits",
        Yozuvchisi: "James Clear",
        Yili:1958,
        rasm: "https://m.media-amazon.com/images/I/81kg51XRc1L._UF1000,1000_QL80_.jpg",
        link: "https://www.google.co.uz/books/edition/Atomic_Habits/lFhbDwAAQBAJ?hl=en&gbpv=1"
    },
    {
        id: 2,
        KitobNomi: "The Great Gatsbe",
        Yozuvchisi: "Stock Fitzegald",
        Yili:1993,
        rasm: "https://rekhtabooks.com/cdn/shop/files/9789390183524.jpg?v=1688453070",
        link: "https://www.google.co.uz/books/edition/The_Great_Gatsby_F_Scott_Fitzgerald/WpD_DAAAQBAJ?hl=en&gbpv=0"
      
      
    }
]

localStorage.setItem("data", JSON.stringify(data))
