const express = require("express");
const {
  createSurvey,
  takeSurvey,
  getSurveyResults,
} = require("../controllers/surveyController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", protect, createSurvey);
router.post("/take", protect, takeSurvey);
router.get("/results/:id", protect, getSurveyResults);

module.exports = router;
