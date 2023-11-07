class ProductManager {
  products = [];
  idCounter = 1;
  constructor(){}
  getProducts(){
    console.log(this.products)
  }
  agregarProducts( title, description, price, thumbnail, code, stock ) {
    if(this.products.some(product => product.code === code)){
      throw new Error("Error! el código corresponde a un producto que ya está en uso.")
    }
    const product = {
      id : this.idCounter++,
      title : title || "producto prueba",
      description : description || "Este es un producto de Prueba",
      price : price || 200,
      thumbnail : thumbnail || "Sin imagen",
      code : code || "abc123",
      stock : stock || 25
    };
    this.products.push(product); 
  } 
  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new Error(`No se encontró ningún producto con el ID ${id}`);
    }
    return product;
  }
}

const instanciaProducto = new ProductManager();
instanciaProducto.agregarProducts( "producto prueba", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25 );
instanciaProducto.agregarProducts( "otro producto prueba", "Este es otro producto de prueba", 100, "Sin imagen", "def456", 12 );
try{
  instanciaProducto.agregarProducts( "producto prueba", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25 );
}
catch(error){
  console.error(error.message);
}

let id = 1 || 2;

try {
  const product = instanciaProducto.getProductById(id);
  console.log("Producto encontrado:", product);
} catch (error) {
  console.error(error.message);
}

console.log(instanciaProducto);