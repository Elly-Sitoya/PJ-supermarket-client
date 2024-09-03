export const server = "http://localhost:4000";
// export const server = "https://supermarket-simulation-server.onrender.com";

const apiList = {
  login: `${server}/api/v1/users/login`,
  createProduct: `${server}/api/v1/products`,
  createUser: `${server}/api/v1/users/register`,
  createCategory: `${server}/api/v1/categories`,
  getAllCategories: `${server}/api/v1/categories`,
  // getSingleCategory: `${server}/api/v1/categories/${id}`,
  getAllProducts: `${server}/api/v1/products`,
};

export default apiList;
