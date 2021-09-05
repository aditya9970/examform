import React from "react";

export const SingleChoice = () => {
  const optionComp = () => {
    <div className="flex items-center relative">
      <input type="checkbox" className=" w-5 h-5 mr-5" id="1-option-1" />
      <div
        className=" h-10 w-full flex items-between items-center color_bg_primary  "
        style={{ padding: "0 5px", borderRadius: "3px" }}
      >
        <div
          className="w-8 h-8 text-sm leading-8 text-center text_color_light color_bg_secondary"
          style={{ borderRadius: "5px" }}
        >
          A
        </div>
        <div className="text-sm mx-5">OptionName</div>
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
      >
        x
      </div>
    </div>;
  };
  let options = [];
  return (
    <div>
      <div className="relative  pl-5 ">
        <input
          className="text-xl w-full text_color_secondary leading-6 mb-3"
          placeholder="Enter the Question here"
        />
        <hr className="mb-1" />
        {options.map((option) => optionComp())}
        <div>
          <div className="flex items-center relative my-2.5">
            <div
              type="checkbox"
              className=" w-5 h-5 mr-5"
              id="1-option-1"
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
                A
              </div>
              <input
                className="text-sm mx-5 border-0"
                placeholder="OptionName"
              />
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
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div className="relative  pl-5 " style={{ height: "320px" }}>
      <div className="absolute" style={{ top: "0", right: "-15px" }}>
        <img src={"/svg/remove.svg"} alt="remove" />
      </div>
      <input
        className="text-xl w-full text_color_secondary leading-6 mb-3"
        placeholder="Enter the Question here"
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
export const FileUpload = () => {
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
    </div>
  );
};

const QuestionComponent = () => {
  return (
    <div className="card_container flex justify-around">
      <div className="flex flex-col justify-around  h-80 w-64 pr-5">
        <select
          className="w-52 p-4 px-5 items-stretch text-xl w-full question_type"
          defaultValue="Single Choice"
        >
          <option value="Single Choice">Single Choice</option>
          <option value="ParaGraph">ParaGraph</option>
          <option value="FileUpload">FileUpload</option>
        </select>
        <div className="items-stretch">
          <p className="text-sm pb-1 marks_header">Total Marks</p>
          <div class="text-xl placeholder" data-placeholder="marks">
            <input name="Totla Marks" />
          </div>
        </div>
        <div className="items-stretch">
          <p className="text-sm pb-1 marks_header">Negative Marks</p>
          <div class="text-xl placeholder" data-placeholder="marks">
            <input name="Nagative Marks" />
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
          >
            Add Optional
          </span>
        </div>
      </div>
      <div style={{ borderLeft: "1px solid #733D47" }}></div>
      <div className="w-8/12">
        <Paragraph />
      </div>
    </div>
  );
};

const QuestionComponents = () => {
  return (
    <div>
      <QuestionComponent />
    </div>
  );
};

export default QuestionComponents;
