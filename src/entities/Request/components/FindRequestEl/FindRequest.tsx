import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useFilterRequest,
  useChooseRequest,
  IRequestFilter,
} from "entities/Request";
import {
  useAppNavigate,
  showBirthDate,
  Button as ResetBtn,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
  InputEl,
  SpinnerCenterBox,
  Spinner,
  NotFound,
} from "shared";

import {
  Container,
  Header,
  Title,
  Body,
  Form,
  Label,
  List,
  ListHeader,
  HeadName,
  HeadCardNumber,
  HeadRequestNumber,
  HeadRequestDate,
  HeadSelectBtn,
  ListBody,
  ListItem,
  BodyName,
  BodyCardNumber,
  BodyRequestNumber,
  BodyRequestDate,
  BodySelectBtn,
  SelectBtn,
} from "./FindRequest.styled";

export const FindRequest: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { register, handleSubmit, reset } = useForm<IRequestFilter>({
    defaultValues: {
      patientName: undefined,
      cardNumber: undefined,
      requestNumber: undefined,
      requestDate: undefined,
    },
  });
  const {
    requestList,
    setRequestList,
    handleFilterRequests,
    isLoading,
    isError,
  } = useFilterRequest();
  const { chooseRequest } = useChooseRequest();
  const { t } = useTranslation();

  const handleResetForm = () => {
    reset();
    setRequestList([]);
  };

  const handleCloseBtn = () => {
    navigate("/desktop");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Container>
      <Header>
        <Title>{t("findRequest.title")}</Title>

        <ResetBtn
          id="resetSearchReqBtn"
          type="button"
          form="findReqForm"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="transparent"
          onClick={handleResetForm}
        >
          {t("shared.button.reset")}
        </ResetBtn>

        <FindBtn
          id="findReqBtn"
          type="submit"
          form="findReqForm"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="blue"
        >
          {t("shared.button.find")}
        </FindBtn>

        <CloseBtn
          id="closeReqBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={handleCloseBtn}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

      <Body>
        <Form id="findReqForm" onSubmit={handleSubmit(handleFilterRequests)}>
          <Label>
            <InputEl
              {...register("patientName")}
              style={{ width: "100%" }}
              placeholder={t("patient.name")}
            />
          </Label>

          <Label>
            <InputEl
              {...register("cardNumber")}
              style={{ width: "100%" }}
              placeholder={t("patient.cardNumber")}
            />
          </Label>

          <Label>
            <InputEl
              {...register("requestNumber")}
              style={{ width: "100%" }}
              placeholder={t("findRequest.requestNumber")}
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              max={today}
              {...register("requestDate")}
              style={{ width: "100%" }}
              placeholder={t("findRequest.dateOfRequest")}
            />
          </Label>
        </Form>

        {isError && <NotFound>Запрос не найден</NotFound>}

        {isLoading ? (
          <SpinnerCenterBox>
            <Spinner size={80} />
          </SpinnerCenterBox>
        ) : (
          <>
            {requestList.length > 0 && (
              <List>
                <ListHeader>
                  <HeadName>{t("patient.name")}</HeadName>
                  <HeadCardNumber>{t("patient.cardNumber")}</HeadCardNumber>
                  <HeadRequestNumber>
                    {t("findRequest.requestNumber")}
                  </HeadRequestNumber>
                  <HeadRequestDate>
                    {t("findRequest.dateOfRequest")}
                  </HeadRequestDate>
                  <HeadSelectBtn></HeadSelectBtn>
                </ListHeader>

                <ListBody>
                  {requestList.map(request => (
                    <ListItem key={request._id}>
                      <BodyName>{request.patientName}</BodyName>
                      <BodyCardNumber>{request.cardNumber}</BodyCardNumber>
                      <BodyRequestNumber>
                        {request.requestNumber}
                      </BodyRequestNumber>
                      <BodyRequestDate>
                        {showBirthDate(request.createdAt.toString())}
                      </BodyRequestDate>
                      <BodySelectBtn>
                        <SelectBtn
                          id="selectPatLink"
                          onClick={() => chooseRequest(request._id)}
                        >
                          {t("shared.button.select")}
                        </SelectBtn>
                      </BodySelectBtn>
                    </ListItem>
                  ))}
                </ListBody>
              </List>
            )}
          </>
        )}
      </Body>
    </Container>
  );
};
