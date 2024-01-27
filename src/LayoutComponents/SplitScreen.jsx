import styled from 'styled-components';

//styled-components package usage
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${props => props.weight};
`;

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {

  const [left, right] = children;
  
  //each side is a div wrapped inside a container
  return(
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
};
