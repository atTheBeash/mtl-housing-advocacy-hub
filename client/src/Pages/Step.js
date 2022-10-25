import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { FiLoader } from "react-icons/fi";

import EducateSelf from "../Components/EducateSelf";
import AssessmentTool from "../Components/AdditionalData/AssessmentTool";

const Step = () => {
  //***************GET UseParams VALUE */
  let { step } = useParams();

  console.log(step);

  //***************CREATE STATE TO HOLD FETCH DATA */
  const [stepData, setStepData] = useState(null);

  // ************* useEffect to Load box data ************ //
  //USE useEffect TO GET DOCUMENT FROM MONGO BASED ON "step" useParam of load Fi icons for homepage
  useEffect(() => {
    console.log("useEffect Start");
    fetch(`/api/get-steps/${step}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setStepData(data.data);
          //   console.log(data)
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log("getUserFeedData Error: " + error);
      });

    return () => {
      setStepData(null);
    };
  }, [step]);

  //***************IF STATE IS NOT NULL THEN DISPLAY DATA, ELSE DISPLAY LOADING */

  let renderEducateSelfComponent;
  if (!step) {
  } else if (!stepData) {
    renderEducateSelfComponent = (
      <LoadingWraper>
        <FiLoader size="48" />
      </LoadingWraper>
    );
  } else {
    renderEducateSelfComponent = (
      <EducateSelf
        stepData={stepData}
        step={stepData.step}
        stepsDIY={stepData.steps_diy}
        stepsHelp={stepData.steps_help}
      />
    );
  }

  let renderAssessmentTool;
  if (step === "assessment_tool" && stepData) renderAssessmentTool = true;

  return (
    <>
      {renderEducateSelfComponent}
      {renderAssessmentTool && <AssessmentTool />}
    </>
  );
};

const LoadingWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Step;
