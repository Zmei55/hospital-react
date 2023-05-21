import { laborList } from "entities/Labor";
import { IService } from "entities/Services";

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
} from "./LaborTableEl.styled";

interface ILaborTableEl {
  savedServicesList: IService[];
  handleLaborChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const LaborTableEl: React.FC<ILaborTableEl> = ({
  savedServicesList,
  handleLaborChange,
}) => {
  return (
    <Table>
      <THead>
        <THService>Dienstleistung</THService>
        {laborList.map(labor => (
          <THLabor key={labor.id}>{labor.name}</THLabor>
        ))}
      </THead>

      <TBody>
        {savedServicesList.map(service => (
          <TRBody key={service.serviceCode}>
            <ServiceBox>
              <ServiceCode>{service.serviceCode}</ServiceCode>
              <ServiceName>{service.serviceName}</ServiceName>
            </ServiceBox>
            <Radio>
              <input
                type="radio"
                name={service.serviceCode}
                value="Internes Labor"
                onChange={handleLaborChange}
                checked={service.labor === "Internes Labor"}
                required
              />
            </Radio>
            <Radio>
              <input
                type="radio"
                name={service.serviceCode}
                value="Invitro"
                onChange={handleLaborChange}
                checked={service.labor === "Invitro"}
              />
            </Radio>
            <Radio>
              <input
                type="radio"
                name={service.serviceCode}
                value="Helix"
                onChange={handleLaborChange}
                checked={service.labor === "Helix"}
              />
            </Radio>
          </TRBody>
        ))}
      </TBody>
    </Table>
  );
};
