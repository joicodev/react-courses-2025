import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function MyCard(props: CardProps) {
  const { children } = props;

  const myStyle = {
    // width: "25rem",
    padding: "20px",
  };

  return (
    <div className="card" style={myStyle}>
      {children}
    </div>
  );
}

/// -------- CARD BODY ---------

interface CardBodyProps {
  text: string;
  title: string;
}

function MyBodyCard(props: CardBodyProps) {
  const { text, title } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export { MyCard, MyBodyCard };
