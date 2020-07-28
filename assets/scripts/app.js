const productList = {
  products: [
    {
      title: "T-Shirt",
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/56f77d0d-bb98-445e-bf92-a04212d3948b/ramfdh/std/615x615/camo-tracks-t-shirt.jpg',
      price: 19.88,
      description : 'Best Choice',
    },
    {
      title: 'Jean for Men',
      imageUrl:
        "https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dw9206d62c/products/S19_Product_Images/S19_Apparel/750020_4010_FORGEDDENIM_MFORGEDDENIMPANTS_Back.jpg",
      price: 25.42,
      description: 'Best Choice'
    }
  ],

  addProd() {
    const htmlId = document.getElementById('app');
    htmlId.className = 'shopping';
    const prodList = document.createElement('div');
    prodList.className = 'container';
    for (const prod of this.products) {
      const product = document.createElement('div');
      product.className = 'card mx-auto bg-light shadow mb-4';
      product.innerHTML = `
        <img src="${prod.imageUrl}" alt="${prod.title}" class="card-img-top img-fluid " >
        <div class="card-body text-center">
          <h2>${prod.title}</h2>
          <h5>${prod.price}</h5>
          <p class="lead">${prod.description}</p>
          <div class="btn btn-success">Add to Cart</div>
        </div>
      `;
      prodList.append(product);
  
    }
    htmlId.append(prodList);
  }
};


productList.addProd();