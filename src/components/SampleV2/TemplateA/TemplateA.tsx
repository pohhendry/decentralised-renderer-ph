import { v2 } from "@govtechsg/open-attestation";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import logo from "../../../assets/logo-tradetrust.svg";

interface CustomTemplate extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
  };
  birthDate: string;
}

export const TemplateA: React.FunctionComponent<TemplateProps<CustomTemplate>> =
  ({ document }) => {
    const { recipient, birthDate } = document;

    return (
      <div style={{ padding: "24px" }}>
        <img src={logo} alt="TradeTrust logo" />
        <h1>{recipient.name}</h1>
        <p>{birthDate}</p>
      </div>
    );
  };
