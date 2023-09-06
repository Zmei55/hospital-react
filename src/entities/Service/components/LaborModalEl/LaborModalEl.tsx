import {
  useHandleLaborChange,
  useFetchLaborsListQuery,
} from "entities/Service";
import {
  useAppSelector,
  Modal,
  Button as CloseBtn,
  Button as SaveBtn,
  Icon,
} from "shared";

import {
  Header,
  HeaderTitle,
  Form,
  Table,
  THead,
  THService,
  THLabor,
  TBody,
  TRBody,
  ServiceBox,
  ServiceCode,
  ServiceName,
  Radio,
  Label,
} from "./LaborModalEl.styled";

interface ILaborModalEl {
  toggleLaborModal: () => void;
}

export const LaborModalEl: React.FC<ILaborModalEl> = ({ toggleLaborModal }) => {
  const { handleLaborChange, saveDetails } = useHandleLaborChange();
  const services = useAppSelector(state => state.services.services);
  const servicesDetails = useAppSelector(state => state.services.details);
  const { data: labors } = useFetchLaborsListQuery(null);

  return (
    <>
      <Modal width="1282px" height="712px">
        <Header>
          <HeaderTitle>Wahl des Auftragsempfänger</HeaderTitle>

          <CloseBtn
            id="closeModalSerBtn"
            width="72px"
            height="72px"
            background="red"
            onClick={() => toggleLaborModal()}
          >
            <Icon icon="cross" size={48} color="white" />
          </CloseBtn>
        </Header>

        <Form onSubmit={saveDetails}>
          <Table>
            <THead>
              <THService>Dienstleistung</THService>
              {labors &&
                labors.map(labor => (
                  <THLabor key={labor._id}>{labor.name}</THLabor>
                ))}
            </THead>

            <TBody>
              {services.map(service => (
                <TRBody key={service._id}>
                  <ServiceBox>
                    <ServiceCode>{service.code}</ServiceCode>
                    <ServiceName>{service.name}</ServiceName>
                  </ServiceBox>
                  {labors &&
                    labors.map(labor => (
                      <Radio key={labor._id}>
                        <Label>
                          <input
                            type="radio"
                            name={service._id}
                            value={labor._id}
                            onChange={handleLaborChange}
                            required
                          />
                        </Label>
                      </Radio>
                    ))}
                </TRBody>
              ))}
            </TBody>
          </Table>

          <SaveBtn
            id="saveSelectedSerBtn"
            type="submit"
            width="318px"
            height="72px"
            background="blue"
            marginLeft="auto"
            marginRight="24px"
          >
            Speichern und schließen
          </SaveBtn>
        </Form>
      </Modal>
    </>
  );
};
