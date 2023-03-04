import { ChakraProvider, Divider } from "@chakra-ui/react";
import HeaderMenu from "./components/HeaderMenu";
import HomeList from "./components/HomeList/HomeList";
import SelectListType from "./components/HomeList/SelectListType";
function App() {
  return (
    <ChakraProvider>
      <HeaderMenu />
      <HomeList />
    </ChakraProvider>
  );
}

export default App;
