import styled from "@emotion/styled";

export const FilteredList = styled.ul`
  height: 618px;
  padding-right: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(2)};

  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: ${props => props.theme.spacing(2)};
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.grey.default};

    :active {
      background-color: ${props => props.theme.colors.grey.pressed};
    }
  }
`;

export const FilteredItem = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const FilteredNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FilteredCodeService = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};
`;

export const FilteredNameService = styled.span`
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};
`;

export const AddServiceBtnTitle = styled.span`
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.blue.default};

  :hover,
  :focus {
    color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.grey.disabled};
  }
`;
