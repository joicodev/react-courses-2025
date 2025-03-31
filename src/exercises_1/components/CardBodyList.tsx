import { useState } from "react";

/** Example about truthy and falsy */
const truthyFalsyExample = () => {
  const value1 = 0;
  const value2 = "";
  const value3 = null;
  const value4 = undefined;
  const value5 = NaN;

  console.log(!!value1, !!value2, !!value3, !!value4, !!value5);
  // Output: false, false, false, false, false
};

type Props = {
  data: string[];
  onSelect?: (item: string) => void;
};

const CardBodyList = (props: Props) => {
  const { data, onSelect } = props;

  const listItemStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer",
    padding: "12px 20px",
  };

  // useState is = State Hook
  const [indexSelected, setIndex] = useState(0);
  function handleClick(item: string, index: number) {
    setIndex(index);
    onSelect?.(item);
  }

  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => handleClick(item, i)}
          key={item}
          style={listItemStyle}
          className={`list-group-item ${indexSelected === i ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CardBodyList;
