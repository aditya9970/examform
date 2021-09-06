import { templates } from "../helpers/templates";
export const storeReducer = (state, action) => {
  let temp = { ...state };
  switch (action.type) {
    case "init":
      return {
        ...state,
        selected: null,
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
      };
    case "add_Question":
      temp.sections[temp.selected.i].questions.splice(
        temp.selected.j,
        0,
        templates("singleChoice")
      );
      return { ...state, ...temp };

    case "change_Subquestion_Title":
      temp.sections[action.payload.i].questions[action.payload.j].subquestions[
        action.payload.k
      ].subquestionTitle = action.payload.e.target.value;
      return { ...state, ...temp };

    case "add_Subquestion":
      temp.sections[action.payload.i].questions[
        action.payload.j
      ].subquestions.push(
        templates(
          temp.sections[action.payload.i].questions[action.payload.j]
            .questionType
        )
      );
      return { ...state, ...temp };

    case "remove_Question":
      temp.sections[temp.selected.i].questions = temp.sections[
        temp.selected.i
      ].questions.filter(
        (el) => el !== temp.sections[temp.selected.i].questions[temp.selected.j]
      );
      return { ...state, ...temp };

    case "remove_Subquestion":
      temp.sections[action.payload.i].questions[
        action.payload.j
      ].subquestions.splice(action.payload.k, 1);
      return { ...state, ...temp };

    case "add_Image":
      return {};

    case "add_Section":
      temp.sections.splice(temp.selected.i, 0, templates("section"));
      return { ...state, ...temp };

    case "change_Type":
      temp.sections[action.payload.i].questions[action.payload.j] =
        action.payload.temp;
      return { ...state, ...temp };

    case "change_Selected":
      return { ...state, selected: action.payload };

    case "copy_Question":
      temp.sections[temp.selected.i].questions.splice(
        temp.selected.j,
        0,
        temp.sections[temp.selected.i].questions[temp.selected.j]
      );
      return { ...state, ...temp };
    case "change_Question":
      temp.sections[action.payload.i].questions[action.payload.j].subquesions[
        action.payload.k
      ] = action.payload.data;
      return { ...state, ...temp };
    case "change_Section":
      temp.sections[action.payload.sectionNo] = action.payload;
      return { ...state, ...temp };
    case "reset":
      return {};
    default:
      return { ...state };
  }
};
