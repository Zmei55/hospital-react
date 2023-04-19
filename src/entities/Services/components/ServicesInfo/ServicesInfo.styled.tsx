import styled from "@emotion/styled";
import { ReactComponent as iconTrash } from "shared/icons/trash.svg";

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;

export const BtnBox = styled.div``;

export const InfoHeaderBtn = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.body};

  padding-top: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(6)};

  background-color: ${props => props.theme.colors.grey.default};
  border: none;
  border-radius: ${props => props.theme.borderRadius};

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(6)};
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
  fill: ${props => props.theme.colors.red.default};

  width: 36px;
  height: 36px;

  :hover,
  :focus {
    fill: ${props => props.theme.colors.red.hover};
  }

  :active {
    fill: ${props => props.theme.colors.red.pressed};
  }
`;
