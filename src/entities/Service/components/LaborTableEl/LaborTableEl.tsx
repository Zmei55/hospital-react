import { useAppSelector } from "shared";

import {
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
} from "./LaborTableEl.styled";

interface ILaborTableEl {
  handleLaborChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const LaborTableEl: React.FC<ILaborTableEl> = ({
  handleLaborChange,
}) => {
  const services = useAppSelector(state => state.services.services);
  const labors = useAppSelector(state => state.services.labors);

  return (
    <Table>
      <THead>
        <THService>Dienstleistung</THService>
        {labors &&
          labors.map(labor => <THLabor key={labor._id}>{labor.name}</THLabor>)}
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
  );
};
