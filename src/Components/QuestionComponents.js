import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/storeContext";
import { numberToString } from "../helpers/numberToString";

export const SingleChoice = ({
  subquestion,
  optional,
  removeOptional,
  i,
  j,
  k,
}) => {
  const { dispatch } = useContext(StoreContext);
  const [state, setState] = useState({
    subquestionTitle: "",
    subquestionContent: [],
    correct: 0,
  });
  const [temp, setTemp] = useState("");
  useEffect(() => {
    setState({
      subquestionTitle: "",
      subquestionContent: [],
      correct: 0,
    });
    setTemp("");
  }, []);
  useEffect(() => {
    dispatch({ type: "", i, j, k, data: state });
  }, [state]);

  const handleAdd = () => {
    setState({
      ...state,
      subquestionContent: [...state.subquestionContent, { content: temp }],
    });
    setTemp("");
  };

  const handleRemove = (l) => {
    let arr = state.subquestionContent;
    arr.splice(i, 1);
    setState({ ...state, subquestionContent: [...arr] });
  };
  const handleChange = (e) => {
    setTemp(e.target.value);
  };
  const optionComp = (data, l) => {
    return (
      <div className="flex items-center relative">
        <input type="checkbox" className=" w-5 h-5 mr-5" id="1-option-1" />
        <div
          className=" h-10 w-full flex items-between items-center color_bg_light my-2  "
          style={{
            padding: "0 5px",
            borderRadius: "5px",
            border: "1px solid rgba(191, 155, 155, 0.3)",
          }}
        >
          <div
            className="w-8 h-8 text-sm leading-8 text-center text_color_light color_bg_secondary"
            style={{ borderRadius: "5px" }}
          >
            {numberToString(l)}
          </div>
          <div className="text-sm mx-5">{data.content}</div>
        </div>

        <div
          className="w-5 h-5  rounded-full  text_color_light text-center "
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "#BF9B9B",
            fontSize: "13px",
            fontWeight: "bold",
          }}
          onClick={() => handleRemove(l)}
        >
          x
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="relative  pl-5 ">
        <input
          className="text-xl w-11/12 text_color_secondary leading-6 mb-3"
          placeholder="Enter the Question here"
        />
        <hr className="mb-1" />
        {optional && (
          <div
            className="w-4 h-4  rounded-full  text_color_light text-center "
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              background: "#BF9B9B",
              fontSize: "13px",
              fontWeight: "bold",
            }}
            onClick={() => removeOptional()}
          >
            -
          </div>
        )}
        {state.subquestionContent.map((option, l) => optionComp(option, l))}
        <div>
          <div className="flex items-center relative my-2.5">
            <div
              type="checkbox"
              className=" w-5 h-5 mr-5"
              id="1-option-0"
            ></div>
            <div
              className=" h-10 w-full flex items-between items-center color_bg_light  "
              style={{
                padding: "0 5px",
                borderRadius: "5px",
                border: "1px solid rgba(191, 155, 155, 0.3)",
              }}
            >
              <div
                className="w-8 h-8 text-sm leading-8 text-center text_color_light color_bg_secondary"
                style={{ borderRadius: "3px" }}
              >
                {numberToString(state.subquestionContent.length)}
              </div>
              <input
                className="text-sm mx-5 border-0 w-9/12"
                placeholder="OptionName"
                onChange={handleChange}
                value={temp}
              />
              <div
                className="w-5 h-5  rounded-full  text_color_light text-center "
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  background: "#BF9B9B",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
                onClick={handleAdd}
              >
                &#10003;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Paragraph = ({
  subquestion,
  optional,
  removeOptional,
  i,
  j,
  k,
}) => {
  const { dispatch } = useContext(StoreContext);
  const handleChange = (e) => {
    dispatch({ type: "change_Subquestion_Title", payload: { i, j, k, e } });
  };
  return (
    <div className="relative  pl-5 " style={{ height: "320px" }}>
      {optional && (
        <div
          className="absolute"
          style={{ top: "0", right: "-15px" }}
          onClick={removeOptional}
        >
          <img src={"/svg/remove.svg"} alt="remove" />
        </div>
      )}
      <input
        className="text-xl w-11/12 text_color_secondary leading-6 mb-3"
        placeholder="Enter the Question here"
        onChange={handleChange}
      />
      <hr className="mb-1" />

      <textarea
        className="w-100  border my-2.5 mt-5 p-4 rounded"
        id="1-option-1"
        placeholder="Paragraph"
        style={{
          width: "100%",
          height: "214px",
          color: "#BF9B9B",
          resize: "none",
          background: "rgba(242, 216, 213, 0.63)",
        }}
      ></textarea>
    </div>
  );
};
const OR = () => {
  return (
    <div
      className="text-3xl text-center"
      style={{
        lineHeight: "36px",

        color: "#BF9B9B",
      }}
    >
      OR
    </div>
  );
};
export const FileUpload = ({
  subquestion,
  optional,
  removeOptional,
  i,
  j,
  k,
}) => {
  return (
    <div className=" relative pl-5 " style={{ height: "320px" }}>
      <input
        className="text-xl w-full text_color_secondary leading-6 mb-3"
        placeholder="Enter the Question here"
      />
      <hr className="mb-1" />

      <div
        className="w-100  flex justify-center items-center my-2.5 mt-5 p-4 border-0"
        id="1-option-1"
        style={{
          width: "100%",
          height: "214px",
          color: "#BF9B9B",
        }}
      >
        <div className="text-5xl">File Upload</div>
      </div>
      {optional && (
        <div
          className="w-4 h-4  rounded-full  text_color_light text-center "
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "#BF9B9B",
            fontSize: "13px",
            fontWeight: "bold",
          }}
          onClick={removeOptional}
        >
          -
        </div>
      )}
    </div>
  );
};

const QuestionComponents = ({ question, i, j }) => {
  const { dispatch } = useContext(StoreContext);
  const handleChange = (name) => (e) => {
    let temp = { ...question };
    temp[name] = e.target.value;
    dispatch({ type: "change_Type", payload: { temp, i, j } });
  };
  const addOptional = (e) => {
    dispatch({ type: "add_Subquestion", payload: { i, j } });
  };
  const removeOptional = (k) => (e) => {
    dispatch({ type: "remove_Subquestion", payload: { i, j, k } });
  };
  const handleSelection = () => {
    dispatch({ type: "change_Selected", payload: { i, j } });
  };
  return (
    <div
      className="card_container flex justify-around"
      onClick={() => handleSelection()}
    >
      <div className="flex flex-col justify-around  h-80 w-64 pr-5">
        <select
          className=" p-4 px-5 items-stretch text-xl  question_type"
          defaultValue="Single Choice"
          value={question.questionType}
          onChange={handleChange("questionType")}
        >
          <option value="singleChoice">Single Choice</option>
          <option value="paragraph">ParaGraph</option>
          <option value="fileUpload">FileUpload</option>
        </select>
        <div className="items-stretch">
          <p className="text-sm pb-1 marks_header">Total Marks</p>
          <div class="text-xl placeholder" data-placeholder="marks">
            <input
              name="Totla Marks"
              onChange={handleChange("totalMarks")}
              value={question.totalMarks}
              type="number"
              placeholder="-"
            />
          </div>
        </div>
        <div className="items-stretch">
          <p className="text-sm pb-1 marks_header">Negative Marks</p>
          <div class="text-xl placeholder" data-placeholder="marks">
            <input
              name="Nagative Marks"
              onChange={handleChange("negativeMarks")}
              value={question.negativeMarks}
              type="number"
              placeholder="-"
            />
          </div>
        </div>
        <div className="items-stretch justify-center align-center h-9 flex">
          <span
            className="w-9 text-3xl text-center rounded-full mx-1 "
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "35px",

              color: "#F2D8D5",
              backgroundColor: "#733D47",
            }}
          >
            +
          </span>
          <span
            className="m-0 mx-1 text-xl text_color_secondary"
            style={{ lineHeight: "32px" }}
            onClick={() => addOptional()}
          >
            Add Optional
          </span>
        </div>
      </div>
      <div style={{ borderLeft: "1px solid #733D47" }}></div>
      <div className="w-8/12">
        {question.questionType === "singleChoice" && (
          <>
            {question.subquestions.map((subquestion, k) => {
              return (
                <>
                  {k > 0 && <OR />}
                  <SingleChoice
                    subquestion={subquestion}
                    optional={question.subquestions.length > 1}
                    removeOptional={removeOptional(k)}
                    i={i}
                    j={j}
                    k={k}
                  />
                </>
              );
            })}
          </>
        )}
        {question.questionType === "paragraph" && (
          <>
            {question.subquestions.map((subquestion, k) => {
              return (
                <>
                  {k > 0 && <OR />}
                  <Paragraph
                    subquestion={subquestion}
                    optional={question.subquestions.length > 1}
                    removeOptional={removeOptional(k)}
                    i={i}
                    j={j}
                    k={k}
                  />
                </>
              );
            })}
          </>
        )}
        {question.questionType === "fileUpload" && (
          <>
            {question.subquestions.map((subquestion, k) => {
              return (
                <>
                  {k > 0 && <OR />}
                  <FileUpload
                    subquestion={subquestion}
                    optional={question.subquestions.length > 1}
                    removeOptional={removeOptional(k)}
                    i={i}
                    j={j}
                    k={k}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

// const QuestionComponents = () => {
//   return (
//     <div>
//       <QuestionComponent />
//     </div>
//   );
// };

export default QuestionComponents;
