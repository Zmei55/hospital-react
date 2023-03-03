import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as iconCreateDocument } from 'icons/createDocument.svg';
import { ReactComponent as iconFindDocument } from 'icons/findDocument.svg';
import { ReactComponent as iconFindContainer } from 'icons/findContainer.svg';
import { ReactComponent as iconDocuments } from 'icons/documents.svg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LargeContainer = styled.div`
  position: relative;

  flex-basis: 1852px;
  height: 440px;
  margin-bottom: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const MediumContainer = styled.div`
  position: relative;

  flex-basis: 684px;
  height: 440px;
  margin-right: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const SmallContainer = styled.div`
  position: relative;

  flex-basis: 450px;
  height: 440px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const DesktopLink = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing(8)};
  left: ${props => props.theme.spacing(8)};

  display: flex;
  flex-direction: column;
`;

export const IconTitle = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;

export const IconNewRequest = styled(iconCreateDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconFindRequest = styled(iconFindDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconFindContainer = styled(iconFindContainer)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconDocuments = styled(iconDocuments)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
