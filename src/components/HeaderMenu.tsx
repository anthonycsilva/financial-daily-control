import { SmallAddIcon } from "@chakra-ui/icons";
import { Circle, Heading, HStack } from "@chakra-ui/react";
import { useState } from "react";
import IncludeExpensiveModal from "./IncludeExpensiveModal";
import MenuComponent from "./Menu";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnClickAddIcon = () => {
    setIsOpen(true);
  };
  return (
    <HStack
      display="flex"
      p={4}
      bgGradient="linear(to-r, green.200, blue.500)"
      shadow="dark-lg"
      padding="40px"
      marginBottom="40px"
    >
      <Circle size="40px" bg="green.400" color="white" justifySelf="start">
        <SmallAddIcon onClick={handleOnClickAddIcon} />
      </Circle>
      <Heading justifySelf="center" color="white" textAlign="center" flex={1}>
        Finance Daily Control
      </Heading>
      <IncludeExpensiveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </HStack>
  );
};

export default HeaderMenu;
