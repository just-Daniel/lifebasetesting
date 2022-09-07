module.exports = {
  default: {
    parallel: 1,
    format: [
      "json:report/report.json",
      "html:report/cucumber-html-report.html",
    ],
    paths: ["src/features/*.feature"],
    require: ["src/step-definitions/*.js", "src/support/*.js"],
    publishQuiet: true,
  },
};
