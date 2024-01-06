import { useTranslation } from "react-i18next";
import { useToggleMenuModal } from "entities/User";
import { useAppSelector, Button as CloseBtn, Icon } from "shared";

import {
  Container,
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
  const { name, workplaces, position } = useAppSelector(
    state => state.auth.user
  );
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const { toggleMenuModal } = useToggleMenuModal();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container data-testid="user-menu-modal">
      <Header data-testid="user-menu-header">
        <Title>{t("layout.menuTitle")}</Title>

        <CloseBtn
          data-testid="closeSearchPatBtn"
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

      <Body data-testid="user-menu-body">
        <OptionalBlock data-testid="language-menu">
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
          <UserBlock data-testid="user-info">
            <UserRow data-testid="user-name">
              <Key>{t("shared.name")}: </Key>
              <Value>{name}</Value>
            </UserRow>

            <UserRow data-testid="user-department">
              <Key>{t("user.department.department")}: </Key>
              {workplaces ? (
                <ul>
                  {workplaces.map(workplace => (
                    <li>
                      <Value>
                        {t("user.workplace.workplace", {
                          context: `${workplace}`,
                        })}
                      </Value>
                    </li>
                  ))}
                </ul>
              ) : (
                t("user.department.department") +
                " " +
                t("shared.appointed.appointed_no")
              )}
              {/* {workplaces} */}
            </UserRow>

            <UserRow data-testid="user-position">
              <Key>{t("user.position.position")}: </Key>
              <Value>
                {t("user.position.position", { context: `${position}` })}
              </Value>
            </UserRow>
          </UserBlock>
        )}
      </Body>
    </Container>
  );
};
