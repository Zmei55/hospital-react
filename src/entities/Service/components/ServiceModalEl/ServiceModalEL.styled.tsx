import styled from "@emotion/styled";
import { InputEl } from "shared";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 2px solid #e6e6e6;
`;

export const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;

  margin-right: auto;
`;

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  height: 786px;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(8)};
`;

export const FormFilter = styled.form`
  display: flex;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin-right: 66px;
`;

export const FilterInput = styled(InputEl)`
  font-size: 24px;
  line-height: 1.17;

  width: 660px;
  height: 72px;
  margin-bottom: 48px;
`;

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
  color: ${props => props.theme.colors.text.default};
`;

export const AddServiceBtnTitle = styled.span`
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

export const SelectedServicesBox = styled.div`
  width: 604px;
  padding-left: 50px;
  border-left: ${props => props.theme.border};
`;

export const SelectedServicesTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  color: ${props => props.theme.colors.text.default};

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const SelectedServicesList = styled.ul`
  height: 604px;
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

export const SelectedServicesItem = styled.li`
  display: flex;

  padding: ${props => props.theme.spacing(2)} 0;
`;

export const SelectedServicesNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedServicesCode = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.placeholder};

  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const SelectedServicesName = styled.span`
  color: ${props => props.theme.colors.text.default};
`;

export const ButtonsBox = styled.div`
  display: flex;
`;
