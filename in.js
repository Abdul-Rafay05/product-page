let productbtn = document.querySelector('.productbtn');
let productcontainer = document.querySelector(".product-container");
let productblock = document.querySelector(".product-block");
let discontent = document.querySelector(".dis_content");
let closedis = document.querySelector(".close_dis");

var typed = new Typed(".text_fur", {
    strings: ["MEN'S CLOTHING", "WOMEN'S CLOTHING", "UPER HOODIE", "JEWELERY", "RING", "Computer SSD", "LED....."],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const fetchdatapro = async () => {
    productcontainer.innerHTML = `<div class="loader"></div>`;
    try {
        let datafetch = await fetch('https://fakestoreapi.com/products');
        let reponse = await datafetch.json();
        productcontainer.innerHTML = "";
        productblock.innerHTML = "";
        reponse.forEach(product => {
            // console.log(product);
            let productdiv = document.createElement('div');
            productdiv.classList.add("divstyle");
            productdiv.innerHTML = `
                <img src="${product.image}" alt=""> 
                <h4 class="product-id">ID: ${product.id}</h4>
                <h4 class="protitle_heading">Title:</h4>
                <h4 class="product-title">${product.category}</h4>
                <h4 class="product-price">Price: ${product.price}$</h4>
                `

            let button = document.createElement("button");
            button.textContent = "Veiw Discreption";
            productdiv.appendChild(button);
            button.addEventListener("click", () => {
                opendis(product);
            });
            productcontainer.appendChild(productdiv);
        });


    } catch (error) {
        console.error("the Data do not fetch please wait for few minutes ");
    }

}
const opendis = (product) => {
    discontent.innerHTML = `
    <h5 class"heading_discription">Description</h5>
    <p class"discription_para">${product.description}</p>
    `
    discontent.parentElement.style.display = "block";
}
closedis.addEventListener('click', () => {
    discontent.parentElement.style.display = "none";

})
productbtn.addEventListener('click', () => {
    // fetch.preventDefault()
    fetchdatapro();

});
