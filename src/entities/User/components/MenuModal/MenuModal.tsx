import { useTranslation } from "react-i18next";
import { useGetUserData, useToggleMenuModal } from "entities/User";
import { useAppSelector, Button as CloseBtn, Icon } from "shared";

import {
  Header,
  Title,
  Body,
  OptionalBlock,
  LangTitle,
  LangSelect,
  LangOption,
  UserBlock,
  UserRow,
  Key,
  Value,
} from "./MenuModal.styled";

export const MenuModal: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const { name, station, jobTitle } = useGetUserData();
  const { toggleMenuModal } = useToggleMenuModal();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header className="user-menu-header">
        <Title className="header-title">{t("layout.menuTitle")}</Title>

        <CloseBtn
          id="closeSearchPatBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={toggleMenuModal}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

      <Body className="user-menu-body">
        <OptionalBlock className="language-menu">
          <LangTitle>{t("layout.language")}:</LangTitle>
          <LangSelect
            id="lang"
            onChange={e => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <LangOption value="de">Deutsch</LangOption>
            <LangOption value="en">English</LangOption>
            <LangOption value="ru">Русский</LangOption>
          </LangSelect>
        </OptionalBlock>

        {isLoggedIn && (
          <UserBlock className="user-info">
            <UserRow className="user-name">
              <Key>{t("patient.name")}: </Key>
              <Value>{name}</Value>
            </UserRow>

            <UserRow className="user-department">
              <Key>{t("user.department")}: </Key>
              <Value>{station}</Value>
            </UserRow>

            <UserRow className="user-position">
              <Key>{t("user.position.position")}: </Key>
              <Value>{jobTitle}</Value>
            </UserRow>
          </UserBlock>
        )}
      </Body>
    </>
  );
};
