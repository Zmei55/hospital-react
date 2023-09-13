import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm<IRequestFilter>({
    defaultValues: {
      name: undefined,
      cardNumber: undefined,
      requestNumber: undefined,
      requestDate: undefined,
    },
  });
  const { requestList, handleFilterRequests } = useFilterRequest();
  const { chooseRequest } = useChooseRequest();

  const handleCloseBtn = () => {
    navigate("/desktop");
  };

  return (
    <Container>
      <Header>
        <Title>Finden Sie einen Antrag</Title>

        <ResetBtn
          id="resetSearchReqBtn"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="transparent"
          // onClick={handleResetBtn}
        >
          Rücksetzen
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
          Finden
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
              {...register("name")}
              style={{ width: "650px" }}
              placeholder="Name"
            />
          </Label>

          <Label>
            <InputEl
              {...register("cardNumber")}
              style={{ width: "236px" }}
              placeholder="Kartennummer"
            />
          </Label>

          <Label>
            <InputEl
              {...register("requestNumber")}
              style={{ width: "236px" }}
              placeholder="Antragsnummer"
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              {...register("requestDate")}
              style={{ width: "256px" }}
              placeholder="Geburtstag"
            />
          </Label>
        </Form>

        {requestList.length > 0 && (
          <List>
            <ListHeader>
              <HeadName>Vorname und Name</HeadName>
              <HeadCardNumber>Kennnummer</HeadCardNumber>
              <HeadRequestNumber>Kennnummer</HeadRequestNumber>
              <HeadRequestDate>Antragsdatum</HeadRequestDate>
              <HeadSelectBtn></HeadSelectBtn>
            </ListHeader>

            <ListBody>
              {requestList.map(request => (
                <ListItem key={request._id}>
                  <BodyName>
                    {request.firstName} {request.lastName}
                  </BodyName>
                  <BodyCardNumber>{request.cardNumber}</BodyCardNumber>
                  <BodyRequestNumber>{request.requestNumber}</BodyRequestNumber>
                  <BodyRequestDate>
                    {showBirthDate(request.createdAt.toString())}
                  </BodyRequestDate>
                  <BodySelectBtn>
                    <SelectBtn
                      id="selectPatLink"
                      onClick={() => chooseRequest(request._id)}
                    >
                      Wählen
                    </SelectBtn>
                  </BodySelectBtn>
                </ListItem>
              ))}
            </ListBody>
          </List>
        )}
      </Body>
    </Container>
  );
};
