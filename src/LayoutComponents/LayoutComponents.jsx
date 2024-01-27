//data
import { people, products } from '../data'

//main design Items
import { SplitScreen } from './SplitScreen'
import { RegularList } from './RegularList'
import { Modal } from './Modal'

//specific list item
import { SmallPersonListItem } from './People/SmallPersonListItem.jsx'
import { LargePersonListItem } from './People/LargePeopleListItem.jsx'
import { SmallProductListItem } from './Product/SmallProductListItem.jsx'
import { LargeProductListItem } from './Product/LargeProductListItem.jsx'

//specific split item
import { RightHandComponent, LeftHandComponent } from './SplitComponents/SplitComponents'


//uncomment design pattern you want to display
export const LayoutComponents = () => (
  <Modal>
    <LargeProductListItem product={products[0]}/>
  </Modal>

  /*<RegularList 
    items={products}
    resourceName="product"
    itemComponent={LargeProductListItem} />*/

  /*<SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent  name="Left" />
        <RightHandComponent name="Right" />
  </SplitScreen>*/

);
