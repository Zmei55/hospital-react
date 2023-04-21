import styled from "@emotion/styled";

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
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};
`;
