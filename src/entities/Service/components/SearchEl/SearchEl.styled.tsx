import styled from "@emotion/styled";

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
    color: ${props => props.theme.colors.blue.hover};
    fill: ${props => props.theme.colors.blue.hover};
    border-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
    fill: ${props => props.theme.colors.blue.pressed};
    border-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
    cursor: not-allowed;
  }
`;

export const ModalBtnTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
`;

// //? Modal
// export const ModalBody = styled.div`
//   height: 786px;
//   padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(8)};
// `;

// export const ServiceForm = styled.form`
//   display: flex;

//   height: 100%;
// `;

// //? SelectedServices
// export const SelectedServicesBox = styled.div`
//   width: 604px;
//   padding-left: 50px;
//   border-left: ${props => props.theme.border};
// `;

// export const SelectedServicesTitle = styled.h4`
//   font-weight: 600;
//   font-size: 28px;
//   line-height: 1.14;
//   color: ${props => props.theme.colors.text.default};

//   margin-bottom: ${props => props.theme.spacing(6)};
// `;

// export const ButtonsBox = styled.div`
//   display: flex;
// `;
