import * as React from "react";

import { Button, Heading, Box } from "@chakra-ui/react";
import Card from "./components/Card";

function App() {
  const [result, setResult] = React.useState(0);
  const [card1, setCard1] = React.useState(0);
  const [card2, setCard2] = React.useState(0);

  const resultOfCards = () => {
    setResult(card1 + card2);
  };

  React.useEffect(() => {
    resultOfCards();
  }, [card1, card2]);

  return (
    <div>
      <Heading> Hello </Heading>
      <Button bgColor={"merah.800"} colorScheme="blue">
        {" "}
        Button{" "}
      </Button>
      <Box
        bgColor={"merah.700"}
        w={{ base: 300, md: 400, lg: 500 }}
        p={4}
        color="white"
      >
        This is the Box
      </Box>
      <Card setCard1={setCard1} idCard={1} />
      <Card setCard2={setCard2} idCard={2} />
      <h1>
        {card1} + {card2} = {result}
      </h1>
    </div>
  );
}

export default App;
