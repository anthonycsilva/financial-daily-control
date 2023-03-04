import { ChakraProvider } from "@chakra-ui/react";


import HeaderMenu from "./components/HeaderMenu";
import HomeList from "./components/HomeList/HomeList";

function App() {
  return (
    <ChakraProvider>
      <HeaderMenu />
      <HomeList />
    </ChakraProvider>
  );
}

export default App;
