export const SmallProductListItem = ({ products }) => {
  const { name, price } = products;

  return (
    <>
      <p>Product: {name}, price: {price}</p>
  </>
  )
}
