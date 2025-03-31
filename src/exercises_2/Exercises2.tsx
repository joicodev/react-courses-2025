import { useState } from "react";
import "./Exercises2.css";
import AppButton from "./components/AppButton";
import { MyCard, MyBodyCard } from "./components/Card";
import CardBodyList from "./components/CardBodyList";

function Exercises2() {
  // List of car brands
  const originalLit: string[] = ["Ford", "Chevrolet", "Toyota", "Honda"];
  const [dynamicList, setDynamicList] = useState<string[]>([]);
  const list = [...originalLit, ...dynamicList];

  const [isLoading, setIsLoading] = useState(false);

  // Handle select event
  const handleSelectItem = (item: string) => {
    console.log("Imprimiendo: ", item);
  };

  // Handle add event
  const handleAddItem = () => {
    setDynamicList([...dynamicList, `Dynamic ${dynamicList.length + 1}`]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Handle delete event
  const handleDeleteItem = () => {
    setDynamicList(
      dynamicList.filter((_, index) => index !== dynamicList.length - 1)
    );
  };

  // If list is not empty, render the list
  const contentList = list.length !== 0 && (
    <CardBodyList data={list} onSelect={handleSelectItem} />
  );

  return (
    <>
      <MyCard>
        <MyBodyCard title="Hola Mundo!" text="Esto es un texto descriptivo" />
        {contentList}

        <br />

        <div className="row justify-content-center">
          {/* ADD BUTTON */}
          <div className="col-auto">
            <AppButton
              onClick={handleAddItem}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              {isLoading ? "Saving..." : "Add new"}
            </AppButton>
          </div>

          {/* DELETE BUTTON */}
          <div className="col-auto">
            <AppButton
              onClick={handleDeleteItem}
              isDisabled={dynamicList.length === 0 || isLoading == true}
            >
              Delete
            </AppButton>
          </div>
        </div>
      </MyCard>
    </>
  );
}

export default Exercises2;
