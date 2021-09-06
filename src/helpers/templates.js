export const templates = (type, i, j, k) => {
  switch (type) {
    case "singleChoice":
      return {
        sectionNo: i,
        questionNo: j,

        questionType: "singleChoice",
        totalMarks: null,
        negativeMarks: null,
        mandatory: null,
        subquestions: [
          {
            sectionNo: i,
            questionNo: j,
            subquestionNo: 0,
            subquestionContent: [{ content: "" }],
            correct: 0,
            subquestionTitle: "",
          },
        ],
      };
    case "paragraph":
      return {
        sectionNo: i,
        questionNo: j,
        subquestionNo: k,
        subquestionTitle: "",
        subquestionContent: [{ content: "" }],
        correct: 0,
      };
    case "fileupload":
      return {
        sectionNo: i,
        questionNo: j,
        subquestionNo: k,
        subquestionTitle: "",
        subquestionContent: [{ content: "" }],
        correct: 0,
      };

    default:
      return {};
  }
};
