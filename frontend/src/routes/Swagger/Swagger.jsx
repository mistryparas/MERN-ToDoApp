import "./Swagger.scss";
import config from "../config";
// const baseURL = process.env.REACT_APP_API_URL;


export default function Swagger() {
  return (
    <iframe
      title="Powerbi - General Overview"
      width="100%"
      height="100%"
      src={config.API_URL + "/api-docs"}
      frameBorder="0"
      allowFullScreen={true}
      className={`powerbi-dashboard`}
    />
  );
}
