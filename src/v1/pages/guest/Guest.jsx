import StarsCanvas from "../../components/canvas/StarsCanvas";
import QuestionContainer from "../../containers/guest/QuestionContainer";
import LetterContainer from "../../containers/letterContainer";

const Guest = () => {
  return (
    <>
      <div className="bg-primary relative z-0">
        <div className="h-screen relative z-0 flex flex-col justify-center">
          <QuestionContainer />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};
export default Guest;
