export const templates = (type, i, j, k) => {
  switch (type) {
    case "singleChoice":
      return {
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
      };
    case "paragraph":
      return {
        questionType: "paragraph",
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
      };
    case "fileUpload":
      return {
        questionType: "fileUpload",
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
      };
    case "section": {
      return {
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
      };
    }
    default:
      return {};
  }
};
