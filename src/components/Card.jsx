const Card = ({ children }) => {
  return (
    <div className="drop-shadow-2xl border-zinc-600 rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className={"border-b bg-slate-100 p-4"}>
      <h1 className={"text-xl  text-black font-bold"}>{children}</h1>
    </div>
  );
};

const Body = ({ children }) => {
  return (
    <div className={"bg-slate-100 text-black leaing-relaxed p-4"}>
      {children}
    </div>
  );
};

const Footer = ({ children }) => {
  return <div className={"bg-slate-50 p-4"}>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
