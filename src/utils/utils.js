const HOME = 'Home';

const getCategories = (data) => {
  const categories = data.reduce((acc, curr) => {
    curr.categories.forEach((category) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
    });
    return acc;
  }, []);
  categories.unshift('Home');
  return categories;
};

const getFilteredProducts = (activeCategory, DATA) => {
  return activeCategory !== HOME
    ? DATA.filter((product) =>
        product.categories.includes(activeCategory.toLocaleLowerCase())
      )
    : DATA;
};

const getSearchedProducts = (searchInput, availableProducts, DATA) => {
  return searchInput.length > 0
    ? availableProducts.filter((product) =>
        product.productName
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      )
    : DATA;
};
const utils = {HOME ,getCategories, getFilteredProducts, getSearchedProducts };
export default utils;
