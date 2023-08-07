import { v3 } from "@govtechsg/open-attestation";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import logo from "../../../assets/logo-tradetrust.svg";

interface CustomTemplate extends v3.OpenAttestationDocument {
  credentialSubject: {
    name: string;
    birthDate: string;
  };
}

export const TemplateC: React.FunctionComponent<TemplateProps<CustomTemplate>> =
  ({ document }) => {
    const { name, birthDate } = document.credentialSubject;

    return (
      <div style={{ padding: "24px" }}>
        <img src={logo} alt="TradeTrust logo" />
        <h1>{name}</h1>
        <p>{birthDate}</p>
      </div>
    );
  };
