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
      <Header>
        <Title>{t("layout.menuTitle")}</Title>

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

      <Body>
        <OptionalBlock>
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
          <UserBlock>
            <UserRow>
              <Key>{t("patient.name")}: </Key>
              <Value>{name}</Value>
            </UserRow>

            <UserRow>
              <Key>{t("user.department")}: </Key>
              <Value>{station}</Value>
            </UserRow>

            <UserRow>
              <Key>{t("user.position.position")}: </Key>
              <Value>{jobTitle}</Value>
            </UserRow>
          </UserBlock>
        )}
      </Body>
    </>
  );
};
