import { ReactNode } from "react";
import styles from "./AppButton.module.css";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const AppButton = (props: Props) => {
  const { children, isLoading, isDisabled, onClick } = props;

  const buttonClassName = [
    `btn btn-${isLoading == true ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      // className={[styles.button, styles.padded].join(" ")}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default AppButton;
