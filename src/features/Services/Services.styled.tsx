import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 722px;
  margin-right: ${props => props.theme.spacing(16)};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;

export const ResetListBtn = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.body};

  padding-top: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(6)};

  border: none;
  border-radius: ${props => props.theme.borderRadius};
`;
