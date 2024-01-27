//Regular List is a generic list item.
//It displays a specific Item Component given as a prop,
//Making it reusable

//Specs : 
//... spread operator : {...{ [resourceName]: item }} === products={item}

export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {

  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  )
}
