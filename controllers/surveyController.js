const Survey = require("../models/Survey");

exports.createSurvey = async (req, res) => {
  const { title, questions } = req.body;
  const survey = new Survey({ title, questions, createdBy: req.user.userId });
  await survey.save();
  res.status(201).json(survey);
};

exports.takeSurvey = async (req, res) => {
  const { surveyId, answers } = req.body;
  const survey = await Survey.findById(surveyId);
  if (!survey) return res.status(404).json({ message: "Survey not found" });

  answers.forEach((answer, index) => {
    if (answer === "yes") survey.questions[index].answers.yes++;
    else survey.questions[index].answers.no++;
  });

  await survey.save();
  res.json(survey);
};

exports.getSurveyResults = async (req, res) => {
  const survey = await Survey.findById(req.params.id);
  if (!survey) return res.status(404).json({ message: "Survey not found" });
  res.json(survey);
};
