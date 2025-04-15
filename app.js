// load HTML DOM before running JS
document.addEventListener("DOMContentLoaded", () =>{
    const prices = document.getElementsByClassName('unit-price');
    const quantities = document.querySelectorAll('.quantity');
    const add = document.querySelectorAll('.fa-plus-circle');
    const minus = document.querySelectorAll('.fa-minus-circle');
    const clearItem = document.querySelectorAll('.fa-trash-alt');
    const heart = document.querySelectorAll('.fa-heart');
    const totalCost = document.querySelector('.total');


    // calculate total price
    function updateTotal(){
        let totalPrice = 0;
        // loop through each card to calculate total price
        document.querySelectorAll(".card").forEach((item, index) => {
            const price = Number(prices[index].textContent.replace('$', ''));
            const quantity = Number(quantities[index].textContent);
            totalPrice += price * quantity;
        });
        totalCost.textContent = `${totalPrice} $`;
    }


    // increase quantity
    add.forEach((add_icon, index) => {
        add_icon.addEventListener('click', () =>{
            let quantity = Number(quantities[index].textContent);
            quantities[index].textContent = quantity + 1;
            updateTotal();
        })
    })
    // decrease quantity
    minus.forEach((minus_icon, index) => {
        minus_icon.addEventListener('click', () => {
            let quantity = Number(quantities[index].textContent);
            quantities[index].textContent = quantities[index].textContent > 0 ? quantity - 1 : 0;
            updateTotal();
        });
    });
    // clear item
    clearItem.forEach((add_icon, index) => {
        add_icon.addEventListener('click', () =>{
            const price = Number(prices[index].textContent.replace('$', ''));
            const quantity = Number(quantities[index].textContent);
            const cost = Number(totalCost.textContent.replace('$', ''));
            let count = price * quantity;
            let costs = cost - count;
            totalCost.textContent = `${costs} $`;
            add_icon.closest(".card-body1").remove();
        });
    })

    // heart icon click event
    heart.forEach(icon => {
        icon.addEventListener('click' , event =>{
            event.target.style.color = event.target.style.color === 'black' ? 'red' : 'black' ;
        });
    });
});