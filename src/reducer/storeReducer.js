import { templates } from "../helpers/templates";
export const storeReducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        selected: null,
        sections: [
          {
            sectionNo: 0,
            sectionTitle: "",
            sectionDescription: "",
            shuffle: false,
            questions: [
              {
                sectionNo: 0,
                questionNo: 0,

                questionType: "singleChoice",
                totalMarks: null,
                negativeMarks: null,
                mandatory: null,
                subquestions: [
                  {
                    sectionNo: 0,
                    questionNo: 0,
                    subquestionNo: 0,
                    subquestionContent: [{ content: "" }],
                    correct: 0,
                    subquestionTitle: "",
                  },
                ],
              },
            ],
          },
        ],
      };
    case "add_Question":
      let temp5 = { ...state };
      temp5.sections[temp5.selected.i].questions.splice(
        temp5.selected.i,
        0,
        templates(
          templates("singleChoice", temp5.selected.i, temp5.selected.j + 1, 0)
        )
      );
      console.log(temp5);
      return { ...state };

    case "change_Subquestion_Title":
      let temp4 = { ...state };
      temp4.sections[action.payload.i].questions[action.payload.j].subquestions[
        action.payload.k
      ].subquestionTitle = action.payload.e.target.value;
      return { ...state, ...temp4 };

    case "add_Subquestion":
      let temp2 = { ...state };
      console.log({ action });
      temp2.sections[action.payload.sectionNo].questions[
        action.payload.questionNo
      ].subquestions.push(
        templates(
          action.payload.questionType,
          action.payload.sectionNo,
          action.payload.questionNo,
          action.payload.subquestions.length + 1
        )
      );
      return { ...state, ...temp2 };

    case "remove_Subquestion":
      let temp3 = { ...state };
      console.log({ action: action.payload.index });
      temp3.sections[action.payload.question.sectionNo].questions[
        action.payload.question.questionNo
      ].subquestions.splice(action.payload.index, 1);
      return { ...state, ...temp3 };
    case "add_Image":
      return {};
    case "duplicate_Question":
      return {};
    case "deleteQuestion":
      return {};
    case "add_Section":
      return {};
    case "add_Optional":
      return { ...state };
    case "remove_Optional":
      return {};
    case "change_Type":
      let temp1 = { ...state };
      temp1.sections[action.payload.sectionNo].questions[
        action.payload.questionNo
      ] = action.payload;

      return { ...state, ...temp1 };
    case "change_Total":
      return {};
    case "change_Negative":
      return {};
    case "change_Selected":
      return { ...state, selected: action.payload };
    case "reset_Selected":
      return { ...state };

    case "change_Question":
      return {};
    case "change_Section":
      let temp = { ...state };
      temp.sections[action.payload.sectionNo] = action.payload;
      return { ...state, ...temp };
    case "reset":
      return {};
    default:
      return { ...state };
  }
};
