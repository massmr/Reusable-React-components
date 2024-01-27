export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <>
      <p>Product: {name}, price: {price}</p>
  </>
  )
}
