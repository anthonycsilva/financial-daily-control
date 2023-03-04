import { Container, Flex } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import { ETypeList } from "../../enums/ETypeList";
import { IExpense } from "../../interfaces/IExpense";
import CardComponent from "./Card";
import ListComponent from "./List";
import SelectListType from "./SelectListType";

const HomeList = () => {
  const [typeList, setTypeList] = useState<ETypeList>(ETypeList.Cards);
  const handleOnChangeTypeList = (value: ETypeList) => {
    setTypeList(value);
  };

  const mock: IExpense = {
    name: "Monitor",
    description: "Monitor muito pika, foda pra caralho",
    price: 3500,
    purchaseDate: new Date(),
  };
  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <SelectListType onChangeListType={handleOnChangeTypeList} />
        {typeList == ETypeList.Cards && <CardComponent expense={mock} />}
        {typeList == ETypeList.List && <ListComponent expense={mock} />}
      </Flex>
    </>
  );
};

export default HomeList;
