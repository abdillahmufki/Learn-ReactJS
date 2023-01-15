const Card = ({ children }) => {
  return <div className="shadow-lg rounded-lg overflow-hidden">{children}</div>;
};

const Title = ({ children }) => {
  return (
    <div className={"border-b p-4"}>
      <h1 className={"text-xl"}>{children}</h1>
    </div>
  );
};

const Body = ({ children }) => {
  return <div className={"leaing-relaxed p-4"}>{children}</div>;
};

const Footer = ({ children }) => {
  return <div className={"bg-slate-50 p-4"}>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
