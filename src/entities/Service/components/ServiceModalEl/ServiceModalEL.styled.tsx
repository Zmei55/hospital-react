import styled from "@emotion/styled";
import { InputEl } from "shared";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-bottom: 2px solid #e6e6e6;

  @media screen and (max-width: 959px) {
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 1920px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 24px;
    padding-left: 24px;
    margin-bottom: ${props => props.theme.spacing(6)};
  }
`;

export const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;

  margin-right: auto;
`;

export const ModalBody = styled.div`
  @media screen and (max-width: 959px) {
    height: calc(100vh - 120px);
    max-height: 446px;
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};

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
  }

  @media screen and (min-width: 960px) {
    padding-right: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    padding-right: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1600px) {
    display: flex;
    width: 100%;
    height: 786px;
    padding-right: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(8)};
    padding-bottom: ${props => props.theme.spacing(6)};
  }
`;

export const Filter = styled.div`
  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;

    height: 100%;
    margin-right: 66px;
  }
`;

export const Form = styled.form`
  @media screen and (max-width: 959px) {
    display: flex;
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    display: flex;
  }
`;

export const Input = styled(InputEl)`
  @media screen and (max-width: 959px) {
    width: 408px;
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    font-size: 24px;
    line-height: 1.17;

    width: 660px;
    height: 72px;
    margin-bottom: 48px;
  }
`;

export const FilteredList = styled.ul`
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

  @media screen and (max-width: 959px) {
    min-height: 100px;
    max-height: 400px;
  }

  @media screen and (min-width: 1600px) {
    height: 618px;
  }
`;

export const FilteredItem = styled.li`
  @media screen and (min-width: 1600px) {
    display: flex;
    justify-content: space-between;

    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const FilteredNameBox = styled.div`
  @media screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
  @media screen and (min-width: 1600px) {
    width: 604px;
    padding-left: 50px;
    border-left: ${props => props.theme.border};
  }
`;

export const SelectedServicesTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  color: ${props => props.theme.colors.text.default};

  @media screen and (min-width: 1600px) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }
`;

export const SelectedServicesList = styled.ul`
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

  @media screen and (max-width: 959px) {
    min-height: 100px;
    max-height: 400px;
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1600px) {
    height: 604px;
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const SelectedServicesItem = styled.li`
  @media screen and (min-width: 1600px) {
    display: flex;

    padding: ${props => props.theme.spacing(2)} 0;
  }
`;

export const SelectedServicesNameBox = styled.div`
  @media screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SelectedServicesCode = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.placeholder};

  @media screen and (min-width: 1600px) {
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const SelectedServicesName = styled.span`
  color: ${props => props.theme.colors.text.default};
`;

export const ButtonsBox = styled.div`
  @media screen and (max-width: 959px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1600px) {
    display: flex;
  }
`;
