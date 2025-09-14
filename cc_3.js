// step 2: create customer records
let customers = [
    { 
        name: "Javier Solarzano",
        email: "jrsolorzano@gmail.com",
        purchases: ["Laptop", "Smartphone"]
    },
    {
        name: "Ana Gomez",
        email: "gomez23@yahoo.com",
        purchases: ["Tablet", "Headphones"]
    },
    {
        name: "Carlos Ruiz",
        email: "carlosjr982@gmail.com",
        purchases: ["Smartwatch", "Camera"]
    }
];

// step 3: add and remove data
// add a new customer
customers.push({
    name: "Maria Fernanda",
    email: "maria.fernanda@gmail.com",
    purchases: ["Bluetooth Speaker"]
});

// remove the first customer
customers.shift();

// step 4: update customer info
// update Ana Gomez's email
customers[0].email = "gomezana@gmail.com";

// add a new purchase for Carlos Ruiz
customers[1].purchases.push("Drone");

// step 5: display customer data
customers.forEach((customer) => {
    console.log(
        'Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}'
    );
}); 