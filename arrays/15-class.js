class ProductAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ProductAlreadyExists';
  }
}

class ProductNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ProductNotFound';
  }
}

try {
    throw new ProductNotFoundError('Product not found');
} catch (error) {
    if (error instanceof ProductNotFoundError) {
        console.error('Product does not exist. \n' + error.message, error.name);
    } else if (error instanceof ProductAlreadyExistsError) {
        console.error('Product already exists. \n' + error.message, error.name);
    }
    
}