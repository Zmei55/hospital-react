import { useTranslation } from "react-i18next";
import { useToggleMenuModal } from "entities/User";
import {
  useAppSelector,
  // Button as FindBtn,
  Button as CloseBtn,
  Icon,
} from "shared";

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
  const user = useAppSelector(state => state.auth.user);
  const { toggleMenuModal } = useToggleMenuModal();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header>
        <Title>{t("layout.menuTitle")}</Title>

        {/* <FindBtn
          id="findSearchPatBtn"
          type="submit"
          form="findPatientList"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="blue"
        >
          Sparen
        </FindBtn> */}

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
              <Key>{t("patient.firstName")}: </Key>
              <Value>{user.firstName}</Value>
            </UserRow>

            <UserRow>
              <Key>{t("patient.lastName")}: </Key>
              <Value>{user.lastName}</Value>
            </UserRow>

            <UserRow>
              <Key>{t("patient.station")}: </Key>
              <Value>{user.station}</Value>
            </UserRow>
          </UserBlock>
        )}
      </Body>
    </>
  );
};
