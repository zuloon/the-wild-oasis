import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

function PageNotFound() {
  const navigate = useNavigate();

  function handleMoveBack() {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/dashboard", { replace: true });
    }
  }

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <ButtonGroup>
          <Button onClick={handleMoveBack} variation="secondary" size="large">
            &larr; Go back
          </Button>
          <Button
            onClick={() => navigate("/dashboard", { replace: true })}
            variation="primary"
            size="large"
          >
            Go to dashboard &rarr;
          </Button>
        </ButtonGroup>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
