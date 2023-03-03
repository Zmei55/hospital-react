import styled from '@emotion/styled';
import { ReactComponent as iconArrowLeft } from 'icons/arrowLeft.svg';

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const StationsList = styled.ul`
  width: 368px;
  height: 152px;
  overflow: auto;

  margin-bottom: ${props => props.theme.spacing(18)};

  ::-webkit-scrollbar {
    width: 8px;
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

export const StationListItem = styled.li`
  display: flex;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const RadioBtn = styled.input`
  width: 48px;
  height: 48px;
  margin-right: ${props => props.theme.spacing(2)};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 368px;
`;

export const BtnBack = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.body};

  width: 172px;
  height: 72px;
  background-color: ${props => props.theme.colors.secondary.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.secondary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.secondary.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.secondary.disabled};
  }
`;

export const BtnLogIn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.white};

  width: 172px;
  height: 72px;
  background-color: ${props => props.theme.colors.primary.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.primary.disabled};
  }
`;

export const IconArrowLeft = styled(iconArrowLeft)`
  fill: ${props => props.theme.colors.text.body};
  margin-right: ${props => props.theme.spacing(7)};
`;
