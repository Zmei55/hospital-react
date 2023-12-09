import styled from "@emotion/styled";
import { InputEl } from "shared";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-bottom: 2px solid #e6e6e6;

  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(3)};
  }

  @media screen and (max-width: 1279px) {
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
    margin-bottom: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    padding-top: ${props => props.theme.spacing(5)};
    padding-bottom: ${props => props.theme.spacing(5)};
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
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
  @media screen and (max-width: 1279px) {
    padding-right: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    min-height: 318px;
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (max-width: 1599px) {
    max-height: calc(100vh - 118px);
  }

  @media screen and (max-width: 1599px) {
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

  @media screen and (min-width: 1600px) {
    display: flex;
    width: 100%;
    height: 614px;
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1920px) {
    height: 764px;
    padding-right: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(8)};
  }
`;

export const Filter = styled.div`
  @media screen and (max-width: 1279px) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1280px) {
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
  display: flex;

  @media screen and (max-width: 1279px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }
`;

export const Input = styled(InputEl)`
  font-size: 24px;
  line-height: 1.17;

  @media screen and (max-width: 959px) {
    width: 408px;
    margin-bottom: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    width: 688px;
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    width: 788px;
    margin-bottom: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    width: 540px;
    margin-bottom: ${props => props.theme.spacing(10)};
  }

  @media screen and (min-width: 1920px) {
    width: 660px;
    margin-bottom: ${props => props.theme.spacing(12)};
  }
`;

export const FilteredList = styled.ul`
  @media screen and (max-width: 1599px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 1600px) {
    height: 618px;
    padding-right: ${props => props.theme.spacing(2)};

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
`;

export const FilteredItem = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${props => props.theme.spacing(4)};

  @media screen and (max-width: 959px) {
    flex-direction: column;
  }

  @media screen and (min-width: 960px) {
    justify-content: space-between;
  }
`;

export const FilteredNameBox = styled.div`
  width: 100%;

  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${props => props.theme.spacing(4)};
  }
`;

export const FilteredCodeService = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};

  @media screen and (max-width: 959px) {
    margin-right: ${props => props.theme.spacing(4)};
  }
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

export const SecondaryBlock = styled.div`
  @media screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;
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

  @media screen and (max-width: 1599px) {
    max-height: 400px;
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1600px) {
    height: 448px;
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1920px) {
    height: 600px;
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const SelectedServicesItem = styled.li`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1599px) {
    padding: ${props => props.theme.spacing(1)} 0;
  }

  @media screen and (min-width: 1600px) {
    padding: ${props => props.theme.spacing(2)} 0;
  }
`;

export const SelectedServicesNameBox = styled.div`
  display: flex;
  flex-direction: column;
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
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (max-width: 1599px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1600px) {
    display: flex;
  }
`;
