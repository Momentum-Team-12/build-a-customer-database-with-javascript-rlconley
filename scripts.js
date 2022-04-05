console.log(customers)

/* <div class="person">
<img src=" https://place-puppy.com/300x300 " alt="Sophia Burns">
<h3>Sophia Burns</h3>
<div class="attr">
    <div>Email</div>
    <div>Address</div>
    <div>DOB:</div>
    <div>Customer since:</div>
</div> */

// asking the js to build one of these for each customer

const allCustomersDiv = document.querySelector('#allCustomers')

for (let customer of customers) {
    console.log(`${customer.name.first} ${customer.name.last}`)
    let custDiv = document.createElement('div')
    custDiv.classList.add("person")
    let nameEl = document.createElement('h3')
    nameEl.innerText = `${customer.name.first} ${customer.name.last}`
    custDiv.appendChild(nameEl)
    allCustomersDiv.appendChild(custDiv)
}