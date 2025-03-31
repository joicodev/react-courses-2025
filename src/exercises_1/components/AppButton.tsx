import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const AppButton = (props: Props) => {
  const { children, isLoading, isDisabled, onClick } = props;

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`btn btn-${isLoading == true ? "secondary" : "primary"}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
