import { useState } from "react";
import "./assets/sass/custom.scss";
import { Stack, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <h1>Solana</h1>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      ;
    </>
  );
}

export default App;
