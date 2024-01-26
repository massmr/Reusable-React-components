import * as React from 'react'
import './App.css'
import { SplitScreen } from './LayoutComponents/SplitScreen'

//for 2 components I need to split screen with :
//Create a splitScreen comp (imported)
const LeftHandComponent = ({ name }) => (
  <h1>
    {name}
  </h1>
);

const RightHandComponent = ({ name }) => (
  <h1>
    {name}
  </h1>
);

//invoke Split component
//inline JSX my 2 components for splitting
function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent  name="Left" />
        <RightHandComponent name="Right" />
      </SplitScreen>
    </>
  );
};

export default App
