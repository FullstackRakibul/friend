import React from "react";
import CustomButton from "../../components/common/buttons/CustomButton";

const QuestionContainer = ({ onButtonClickB1, onButtonClickB2 }) => {
  const handleClickB1 = () => {
    console.log("Button 01 Clicked !");
    if (onButtonClickB1) {
      onButtonClickB1();
    }
  };

  const handleClickB2 = () => {
    console.log("Button 02 Clicked !");
    if (onButtonClickB2) {
      onButtonClickB2();
    }
  };
  return (
    <>
      <section className="h-screen flex justify-center items-center font-semibold text-2xl">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
          <p className="text-white mb-4">This is a Container</p>
          <div className="flex justify-center space-x-4">
            <CustomButton
              text="Button 01"
              onClick={onButtonClickB1}
              color="blue"
            />
            <CustomButton
              text="Button 02"
              onClick={onButtonClickB2}
              color="blue"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionContainer;
