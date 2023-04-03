import styled from "@emotion/styled";
import { ReactComponent as iconServicesAdd } from "shared/icons/servicesAdd.svg";
import { ReactComponent as iconCross } from "shared/icons/cross.svg";
import { ReactComponent as iconPlus } from "shared/icons/plusBold.svg";
import { ReactComponent as iconTrash } from "shared/icons/trash.svg";

//? Modal
export const ModalBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #115ffd;
  fill: #115ffd;

  height: 100%;
  border: 2px solid #115ffd;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;

  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.hover};
    fill: ${props => props.theme.colors.primary.hover};
    border-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
    fill: ${props => props.theme.colors.primary.pressed};
    border-color: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
    cursor: not-allowed;
  }
`;

export const IconServicesAdd = styled(iconServicesAdd)`
  margin-bottom: 16px;
`;

export const ModalBtnTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
`;

export const ModalContainer = styled.div`
  width: 1574px;
  height: 890px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  padding: 0;
  background-color: ${props => props.theme.colors.error.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.error.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.error.pressed};
  }
`;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;

export const ModalBody = styled.div`
  height: 786px;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(8)};
`;

export const ServiceForm = styled.form`
  display: flex;

  height: 100%;
`;

//? Filter
export const Filter = styled.div`
  width: 842px;
  margin-right: 66px;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(12)};
`;

export const FilterInput = styled.input`
  font: inherit;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
  width: 100%;
  height: 72px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  ::placeholder {
    color: ${props => props.theme.colors.text.placeholder};
  }
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
    background-color: ${props => props.theme.colors.secondary.default};

    :active {
      background-color: ${props => props.theme.colors.secondary.pressed};
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

export const AddServiceBtn = styled.button`
  display: flex;

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(11)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(11)};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;
`;

export const IconPlus = styled(iconPlus)`
  fill: ${props => props.theme.colors.primary.default};

  margin-right: ${props => props.theme.spacing(2)};

  :hover,
  :focus {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    fill: ${props => props.theme.colors.secondary.disabled};
  }
`;

export const AddServiceBtnTitle = styled.span`
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.primary.default};

  :hover,
  :focus {
    color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.secondary.disabled};
  }
`;

//? SelectedServices
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
    background-color: ${props => props.theme.colors.secondary.default};

    :active {
      background-color: ${props => props.theme.colors.secondary.pressed};
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
  font-size: 14px;
  line-height: 1.14;
  color: ${props => props.theme.colors.text.placeholder};

  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const SelectedServicesName = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.default};
`;

export const DeleteSelectedServicesBtn = styled.button`
  margin-right: ${props => props.theme.spacing(3)};
  border: none;
  background-color: transparent;
`;

export const IconTrash = styled(iconTrash)`
  fill: ${props => props.theme.colors.error.default};

  width: 36px;
  height: 36px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.error.hover};
  }

  :active {
    fill: ${props => props.theme.colors.error.pressed};
  }
`;

export const ResetFormBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.body};

  width: 208px;
  height: 72px;
  margin-right: ${props => props.theme.spacing(6)};

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary.default};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.secondary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.secondary.pressed};
  }
`;

export const SaveServicesBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.white};

  width: 318px;
  height: 72px;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.primary.default};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary.pressed};
  }
`;
