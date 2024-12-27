console.log("Task 2")
const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
  ];
  

  function getProductDetails(productId, successCallback, errorCallback) {

    const product = products.find(p => p.id === productId);
  

    if (product) {
      successCallback(product);
    } else {
     
      errorCallback(`Product with ID ${productId} not found.`);
    }
  }
  

  getProductDetails(
    2, 
    (product) => {
      console.log("Product found:", product);
    }, 
    (errorMessage) => {
      console.error("Error:", errorMessage);
    }
  );
  
  