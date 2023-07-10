const fetchProducts = async (searchProducts) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchProducts}`);
  const data = await response.json();
  return data.results;
};

export default fetchProducts;