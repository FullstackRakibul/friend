import StarsCanvas from "../../components/canvas/StarsCanvas";
import QuestionContainer from "../../containers/guest/QuestionContainer";

const Guest = () => {
  return (
    <>
      <div className="bg-primary relative z-0">
        <div className="relative z-0">
          <QuestionContainer />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};
export default Guest;
