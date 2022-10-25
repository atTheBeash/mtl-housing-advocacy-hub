import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import AssessToolResults from "../AssessmentTool/AssessToolResults";

const AssessmentTool = () => {
  const [formData, setFormData] = useState({
    borough: "ndg",
    studentConcordia: "",
    lowIncome: "",
    issue: "maintenance_repairs",
    landlordBehaviour: "",
    homeUnlivable: "",
  });
  const [submittedFormData, setSubmittedFormData] = useState({
    borough: "ndg",
    studentConcordia: "",
    lowIncome: "",
    issue: "maintenance_repairs",
    landlordBehaviour: "",
    homeUnlivable: "",
  });
  const [assessmentResourceData, setAssessmentResourceData] = useState(null);
  const [assessmentActionData, setAssessmentActionData] = useState(null);
  const [formSubmit, setFormSubmit] = useState(false);

  const handleChangeForm = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setSubmittedFormData(JSON.parse(JSON.stringify(formData)));
    setFormSubmit(true);

    console.log("Form Data: ");
    console.log(formData);

    fetch(`/api/get-actions/${formData.issue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAssessmentActionData(data.data);
          console.log("get-actions response:");
          console.log(data.data);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log("get-actions Error: " + error);
      });

    const categories = "housing_advocacy,legal";
    const tagInclusions =
      "opentoall," +
      formData.borough +
      "," +
      formData.lowIncome +
      "," +
      formData.studentConcordia;

    fetch(
      `/api/get-resources?categories=${categories}&tag_inclusions=${tagInclusions}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAssessmentResourceData(data.data);
          console.log("get-resources response:");
          console.log(data.data);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log("get-actions Error: " + error);
      });
  };

  const formReset = () => {
    setFormSubmit(false);
    setFormData({
      borough: "ndg",
      studentConcordia: "",
      lowIncome: "",
      issue: "maintenance_repairs",
      landlordBehaviour: "",
      homeUnlivable: "",
    });
    setAssessmentResourceData(null);
    setAssessmentActionData(null);
  };

  return (
    <>
      <Form
        formData={formData}
        handleChange={handleChangeForm}
        handleSubmit={handleSubmitForm}
        formReset={formReset}
      />
      {formSubmit && (
        <AssessToolResults
          formData={submittedFormData}
          resourceData={assessmentResourceData}
          actionData={assessmentActionData}
        />
      )}
    </>
  );
};

export default AssessmentTool;
