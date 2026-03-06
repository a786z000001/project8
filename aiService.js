exports.generateAISummary = async (description) => {
  return {
    summary: description.slice(0, 50),
    priority: "Medium",
    riskScore: Math.floor(Math.random() * 10)
  };
};