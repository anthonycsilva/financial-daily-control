import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import { IExpense } from "../../interfaces/IExpense";

interface ICardComponent {
  expense: IExpense;
}

const CardComponent: React.FC<ICardComponent> = (props) => {
  return (
    <Card maxW="sm" boxShadow="dark-lg" w={300} h={300}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.expense.name}</Heading>
          <Text>{props.expense.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            R$:{props.expense.price}
          </Text>
        </Stack>
        <Text color="black.600" fontSize="2sm">
          {props.expense.purchaseDate.toLocaleString()}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Todo
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Todo2
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
