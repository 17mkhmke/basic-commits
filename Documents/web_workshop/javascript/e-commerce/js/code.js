let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category:"beer",
        quantity: "24 x 330ml"

    },
    {
        id: 2,
        productName: "savanna",
        image : "",
        price: "R200",
        category: "cider",
        quantity: "24 x 330ml"

    },
    {
        id: 3,
        productName: "Russian Bear",
        image : "",
        price: "R154",
        category: "vodka",
        quantity: "1 litre"

    },
    {
        id: 4,
        productName: "4th-street",
        image : "",
        price: "R130",
        category: "wine",
        quantity: "3 litres"

    },
    {
        id: 5,
        productName: "firstwatch",
        image : "",
        price: "R200",
        category: "whisky",
        quantity: "750ml"

    },
    {
        id: 6,
        productName: "Martini Sparkling",
        image : "",
        price: "R185",
        category: "champaign"

    },
    {
        id: 7,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    },
    {
        id: 8,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    },
    {
        id: 9,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    },
    {
        id: 10,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    },
    {
        id: 11,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    },
    {
        id: 12,
        productName: "Budwiser",
        image : "",
        price: "R200",
        category: "cider"

    }
];



/*document.addEventListener('DOMContentLoaded',()=>{
    let countDown = 1600019199
    let flipdown = new flipdown(countDown)
    .start()
    .ifEnded(()=>{
        document.querySelector(".flipdown").innerHTML = `<h2> Special has ended</h2>`
    })
})*/