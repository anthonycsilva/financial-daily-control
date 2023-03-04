import { ETypeList } from "../../enums/ETypeList";
import Select from "react-select";
interface ISelectListType {
  onChangeListType: (ETypeList: ETypeList) => void;
}

const SelectListType: React.FC<ISelectListType> = (props) => {
  const options = [
    { value: ETypeList.Cards, label: "Cards" },
    { value: ETypeList.List, label: "Lists" },
  ];

  return (
    <Select
      options={options}
      styles={{
        container: (base) => ({
          ...base,
          width: "40vw",
          paddingBottom: "40px",
        }),
      }}
      onChange={(val) => props.onChangeListType(val!.value)}
    />
  );
};
export default SelectListType;
