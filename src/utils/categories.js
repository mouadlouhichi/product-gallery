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
export default getCategories;
