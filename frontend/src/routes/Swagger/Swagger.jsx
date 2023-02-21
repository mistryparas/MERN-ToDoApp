import "./Swagger.scss";
import {API_URL} from "../../config";
// const baseURL = process.env.REACT_APP_API_URL;


export default function Swagger() {
  return (
    <iframe
      title="Powerbi - General Overview"
      width="100%"
      height="100%"
      src={API_URL + "/api-docs"}
      frameBorder="0"
      allowFullScreen={true}
      className={`powerbi-dashboard`}
    />
  );
}
