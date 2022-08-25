import "./Swagger.css";

export default function Swagger() {
  return (
    <iframe
      title="Powerbi - General Overview"
      width="100%"
      height="100%"
      src={"http://localhost:8080/api-docs"}
      frameBorder="0"
      allowFullScreen={true}
      className={`powerbi-dashboard`}
    />
  );
}
