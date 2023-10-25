import { useTranslation } from "react-i18next";
import { useLogOut } from "entities/Auth";
import { useGetUserData, useToggleMenuModal, MenuModal } from "entities/User";
import {
  useAppSelector,
  Button as MenuBtn,
  Button as LogoutBtn,
  Icon,
  Modal,
} from "shared";

import { Container, UserBox, Name, Workplace } from "./UserMenu.styled";

export const UserMenu: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [logout] = useLogOut();
  const { name, workplaceToUpper } = useGetUserData();
  const showModal = useAppSelector(state => state.user.modalUser);
  const { toggleMenuModal } = useToggleMenuModal();
  const { t } = useTranslation();

  return (
    <Container>
      {isLoggedIn && (
        <UserBox>
          <Name>{name}</Name>
          <Workplace>{`${workplaceToUpper} Station, Krankenschwester`}</Workplace>
        </UserBox>
      )}

      <MenuBtn
        id="appMenuBtn"
        style={{
          width: "72px",
          height: "72px",
        }}
        background="transparent"
        onClick={toggleMenuModal}
      >
        <Icon icon="gear" size={48} color="blue" />
      </MenuBtn>

      {isLoggedIn && (
        <LogoutBtn
          id="logoutBtn"
          background="transparent"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            color: "#EC312F",
            marginLeft: "24px",
          }}
          onClick={() => logout()}
        >
          {t("shared.button.signOut")}
        </LogoutBtn>
      )}

      {showModal && (
        <Modal onClose={toggleMenuModal}>
          <MenuModal />
        </Modal>
      )}
    </Container>
  );
};
