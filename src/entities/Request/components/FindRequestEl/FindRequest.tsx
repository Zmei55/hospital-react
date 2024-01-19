import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useFilterRequest,
  useChooseRequest,
  TRequestFilterReq,
} from "entities/Request";
import {
  useAppNavigate,
  Button as ResetBtn,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
  InputEl,
  SpinnerCenterBox,
  Spinner,
  NotFound,
  showDate,
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
  const { handleNavigate } = useAppNavigate();
  const { register, handleSubmit, reset } = useForm<TRequestFilterReq>({
    defaultValues: {
      patientName: null,
      cardNumber: null,
      requestNumber: null,
      createdAt: null,
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
    handleNavigate("/dashboard/treatment-room");
  };

  return (
    <Container data-testid="find-request-container">
      <Header data-testid="find-request-header">
        <Title data-testid="find-request-header-title">
          {t("findRequest.title")}
        </Title>

        <ResetBtn
          data-testid="reset-find-request-btn"
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
          data-testid="find-find-request-btn"
          type="submit"
          form="find-request-form"
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
          data-testid="close-find-request-btn"
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

      <Body data-testid="find-request-body">
        <Form
          id="find-request-form"
          data-testid="find-request-form"
          onSubmit={handleSubmit(handleFilterRequests)}
        >
          <Label>
            <InputEl
              {...register("patientName")}
              data-testid="find-request-body-name-input"
              style={{ width: "100%" }}
              placeholder={t("shared.name")}
            />
          </Label>

          <Label>
            <InputEl
              type="number"
              {...register("cardNumber", { valueAsNumber: true })}
              data-testid="find-request-body-card-number-input"
              style={{ width: "100%" }}
              placeholder={t("patient.cardNumber")}
            />
          </Label>

          <Label>
            <InputEl
              type="number"
              {...register("requestNumber", { valueAsNumber: true })}
              data-testid="find-request-body-request-number-input"
              style={{ width: "100%" }}
              placeholder={t("findRequest.requestNumber")}
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              {...register("createdAt")}
              data-testid="find-request-body-request-date-input"
              style={{ width: "100%" }}
              placeholder={t("findRequest.dateOfRequest")}
            />
          </Label>
        </Form>

        {isError && (
          <NotFound
            data-testid="find-request-error"
            text={t("findRequest.notFoundException")}
          />
        )}

        {isLoading ? (
          <SpinnerCenterBox data-testid="spinner-box">
            <Spinner size={80} data-testid="spinner" />
          </SpinnerCenterBox>
        ) : (
          <>
            {requestList && (
              <List data-testid="find-request-list">
                <ListHeader data-testid="find-request-list-header">
                  <HeadName>{t("shared.name")}</HeadName>
                  <HeadCardNumber>{t("patient.cardNumber")}</HeadCardNumber>
                  <HeadRequestNumber>
                    {t("findRequest.requestNumber")}
                  </HeadRequestNumber>
                  <HeadRequestDate>
                    {t("findRequest.dateOfRequest")}
                  </HeadRequestDate>
                  <HeadSelectBtn></HeadSelectBtn>
                </ListHeader>

                <ListBody data-testid="find-request-list-body">
                  {requestList.map(request => (
                    <ListItem
                      key={request._id}
                      data-testid="find-request-listitem"
                    >
                      <BodyName data-testid="find-request-listitem-name">
                        {request.patientName}
                      </BodyName>
                      <BodyCardNumber data-testid="find-request-listitem-card-number">
                        {request.cardNumber}
                      </BodyCardNumber>
                      <BodyRequestNumber data-testid="find-request-listitem-request-number">
                        {request.requestNumber}
                      </BodyRequestNumber>
                      <BodyRequestDate data-testid="find-request-listitem-request-date">
                        {showDate(request.createdAt)}
                      </BodyRequestDate>
                      <BodySelectBtn data-testid="find-request-listitem-select-btn">
                        <SelectBtn
                          data-testid="select-found-request"
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
