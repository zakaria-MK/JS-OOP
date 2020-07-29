class Product {
  title = 'Default';
  imageUrl;
  price;
  description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ShoppingCart {

  
  
  addProd() {
    const cart = document.createElement('section');
    cart.className = 'calcul m-5';
    cart.innerHTML = `
      <div class="card card-body py-4">
        <div class="row py-2">
          <div class="col-lg-8 col-sm-7">
            <h5 class="h2">Total : \$ ${0}</h5> 
          </div>
          <div class="col-lg-3 col-sm-5 text-right">
            <a href="" class="btn btn-danger px-4 ">Order Now!</a>
          </div>
        </div>
      </div>
    `;

    return cart;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addProd() {
    const product = document.createElement("div");
    product.className = "card mx-auto bg-light shadow mb-4";
    product.innerHTML = `
      <img src="${this.product.imageUrl}" alt="${this.product.title}" class="card-img-top img-fluid " >
      <div class="card-body text-center">
        <h2>${this.product.title}</h2>
        <h5>${this.product.price}</h5>
        <p class="lead">${this.product.description}</p>
        <div class="btn btn-success">Add to Cart</div>
      </div>
    `;
    return product;
  }
}

class ProductList {
  products = [
    new Product(
      "T-Shirt",
      "https://dainese-cdn.thron.com/delivery/public/image/dainese/56f77d0d-bb98-445e-bf92-a04212d3948b/ramfdh/std/615x615/camo-tracks-t-shirt.jpg",
      19.88,
      "Best Choice"
    ),
    new Product(
      "Jean for Men",
      "https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dw9206d62c/products/S19_Product_Images/S19_Apparel/750020_4010_FORGEDDENIM_MFORGEDDENIMPANTS_Back.jpg",
      25.42,
      "Best Choice"
    )
  ];

  constructor() { }
  
  addProd() {
    
    const prodList = document.createElement("div");
    prodList.className = "container";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodId = productItem.addProd();
      prodList.append(prodId);
    }
    return prodList;
    
  }
}

class Shop {
  addProd() {
    const htmlId = document.getElementById("app");
    htmlId.className = "shopping";
    const shop = new ShoppingCart();
    const shopList = shop.addProd();
    const productList = new ProductList();
    const prodli = productList.addProd();  
    htmlId.parentNode.insertBefore(shopList, htmlId);
    htmlId.append(prodli);
  }
}

const shop = new Shop();
shop.addProd();

