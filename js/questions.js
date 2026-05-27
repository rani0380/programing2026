const questions = (window.questionBanks || []).flatMap((bank) =>
  bank.questions.map((question) => ({
    ...question,
    year: bank.year,
    round: bank.round,
    examTitle: bank.title
  }))
);
