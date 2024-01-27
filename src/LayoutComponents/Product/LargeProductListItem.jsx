export const LargeProductListItem = ({ product }) => {
  
  const { name, price, description, rating } = product;

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
