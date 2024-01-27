export const LargeProductListItem = ({ products }) => {
  
  const { name, price, description, rating } = products;

  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price} years</p>
      <p>Description: {description}</p>
      <h3>Rating</h3>
      <p>{rating}</p>
    </>
  );
};
