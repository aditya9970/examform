import React, { useReducer } from "react";
import { StoreContext } from "../Context/storeContext";
import { isSelected } from "../helpers/isSelected";
import { storeReducer } from "../reducer/storeReducer";
import QuestionComponents from "./QuestionComponents";
import { SectionHeader } from "./SectionHeader";
import SideBar, { DragNDrop } from "./SideBar";

const Main = () => {
  const [store, dispatch] = useReducer(storeReducer, {
    sections: [
      {
        sectionTitle: "",
        sectionDescription: "",
        shuffle: false,
        questions: [
          {
            questionType: "singleChoice",
            totalMarks: null,
            negativeMarks: null,
            mandatory: null,
            subquestions: [
              {
                subquestionContent: [{ content: "" }],
                correct: 0,
                subquestionTitle: "",
              },
            ],
          },
        ],
      },
    ],
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      <div className="color_bg_page">
        <div className="container color_bg_light  mx-auto  my-11 py-7 px-11">
          <h1 className="page_title">Create Questions</h1>
          <hr
            className="my-6 mx-0 mb-px "
            style={{ border: "1px solid #733d47" }}
          />
          <form>
            {/* <div
            style={{
              display: "grid",
              gridTemplateColumns:
              "minmax(0, 8fr) 34px minmax(75fr , auto) 90px minmax(0 ,19fr) ",
            }}
            >
            <div style={{}}>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div> */}
            {store.sections.map((section, i) => {
              return (
                <>
                  {i > 0 && (
                    <div
                      className="text-3xl  my-5 text-center"
                      style={{
                        lineHeight: "36px",

                        color: "#BF9B9B",
                      }}
                    >
                      Sections Break
                    </div>
                  )}
                  <div
                    className="flex mx-auto items-center xl:w-3/4 lg:w-9/12 md:full"
                    key={section.sectionNo}
                  >
                    <div style={{ width: "21px" }}></div>
                    <div
                      className="flex flex-col "
                      style={{
                        marginLeft: "13px",
                        marginRight: "24px",
                        width: "100%",
                      }}
                    >
                      <SectionHeader section={section} i={i} />
                    </div>
                    <div style={{ width: "66px" }}>
                      {isSelected(store, i, -1) && <SideBar />}
                    </div>
                  </div>
                  {section.questions.map((question, j) => {
                    return (
                      <div
                        className="flex mx-auto items-center xl:w-3/4 lg:w-9/12 md:full"
                        // style={{ marginLeft: "11%", marginRight: "16%" }}
                      >
                        <div style={{ width: "21px" }}>
                          {isSelected(store, i, j) && <DragNDrop />}
                        </div>

                        <div
                          className="flex flex-col "
                          style={{
                            marginLeft: "13px",
                            marginRight: "24px",
                            width: "100%",
                          }}
                        >
                          <QuestionComponents question={question} i={i} j={j} />
                        </div>
                        <div style={{ width: "66px" }}>
                          {isSelected(store, i, j) && <SideBar />}
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })}

            <div className="flex mx-auto items-center xl:w-3/4 lg:w-9/12 md:full">
              <div style={{ width: "21px" }}></div>
              <div
                className="flex justify-end "
                style={{
                  marginLeft: "13px",
                  marginRight: "24px",
                  width: "100%",
                }}
              >
                <button className=" mx-2 py-3.5 px-9 text_color_light">
                  Discard
                </button>
                <button className=" mx-2 py-3.5 px-9 color_bg_secondary rounded-xl text_color_light text_xl ">
                  Pubish
                </button>
              </div>
              <div style={{ width: "66px" }}></div>
            </div>
          </form>
        </div>
      </div>
    </StoreContext.Provider>
  );
};

export default Main;
