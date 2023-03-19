import { faker } from '@faker-js/faker';

// Create a function to generate a rating object
const generateRating = () => ({
  rate: faker.datatype.number({ min: 1, max: 5 }),
  count: faker.datatype.number({ min: 1, max: 1000 }),
});

// Create an array of categories to choose from
const categories = ['Electronics', 'Clothing', 'Home', 'Toys'];

// Create an array of products
const products = [];

for (let i = 1; i <= 20; i++) {
  const id = i;
  const title = faker.commerce.productName();
  const price = faker.commerce.price();
  const description = faker.lorem.paragraph();
  const category = faker.helpers.arrayElement(categories);
  const image = faker.image.imageUrl();
  const rating = generateRating();

  const product = { id, title, price, description, category, image, rating };
  products.push(product);
}

export default products;
