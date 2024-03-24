import { React, useState } from "react";
import CustomButton from "../../components/common/buttons/CustomButton";
import CustomButtonTwo from "../../components/common/buttons/CustomButtonTwo";
import LetterComponent from "../../components/ui/card/letter/LetterComponent";

const QuestionContainer = ({ onButtonClickB1, onButtonClickB2 }) => {
  const [visible, setVisible] = useState(false);

  const handleClickB1 = () => {
    // console.log("Button 01 Clicked !");
    // if (onButtonClickB1) {
    //   onButtonClickB1();
    // }
    // setVisible((prev) => !prev);
  };

  const handleClickB2 = () => {
    console.log("Button 02 Clicked !");
    if (onButtonClickB2) {
      onButtonClickB2();
    }
  };
  return (
    <>
      <section className="flex justify-center items-center font-semibold text-2xl">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
          <p className="text-white mb-4 font-noto ">
            স্নেহসবুজ দিন, তোমার কাছে ঋণ...
          </p>
          <div className="flex justify-center space-x-4">
            <CustomButton text="চিঠি" onClick={handleClickB1} color="blue" />
            <CustomButton text="কবিতা" onClick={handleClickB2} color="blue" />
          </div>
        </div>
      </section>
      {visible && (
        <LetterComponent
          username="@binte"
          letterBody=""
          friend="@aName"
          visible={visible}
        />
      )}
    </>
  );
};

export default QuestionContainer;
