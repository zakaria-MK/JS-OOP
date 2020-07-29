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
    const htmlId = document.getElementById("app");
    htmlId.className = "shopping";
    const prodList = document.createElement("div");
    prodList.className = "container";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodId = productItem.addProd();
      prodList.append(prodId);
    }
    htmlId.append(prodList);
  }
}

const productList = new ProductList();
productList.addProd();