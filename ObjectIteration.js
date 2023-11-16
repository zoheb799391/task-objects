const items = [
    {
        Itemname: 'bottle',
        price: '20'
    },
    {
        Itemname: 'phone',
        price: '200000'
    },
    {
        Itemname: 'buds',
        price: '2000'
    },
    {
        Itemname: 'charger',
        price: '1000'
    },
    {
        Itemname: 'cable',
        price: '500'
    },
    {
        Itemname: 'laptop',
        price: '200000'
    }
]
let total=0;
items.map((pr) => {

total += parseInt(pr.price);
    // console.log(pr.price);
})
console.log(total)