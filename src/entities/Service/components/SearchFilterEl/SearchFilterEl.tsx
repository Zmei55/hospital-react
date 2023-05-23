import { useServicesFilter } from "entities/Service";
import { InputEl as FilterInput, useInput, Button as FindBtn } from "shared";

import {} from "./SearchFilterEl.styled";

interface ISearchFilter {}

export const SearchFilterEl: React.FC<ISearchFilter> = () => {
  const [filter, , handleFilter] = useInput("");
  const { handleServicesListFind } = useServicesFilter(filter);

  return (
    <>
      <FilterInput
        width="660px"
        type="text"
        value={filter}
        onChange={handleFilter}
        autoFocus
        placeholder="Dienstname"
        marginBottom="48px"
      />

      <FindBtn
        id="findSearchPatBtn"
        width="162px"
        height="72px"
        background="blue"
        marginLeft="24px"
        onClick={handleServicesListFind}
      >
        Finden
      </FindBtn>
    </>
  );
};
