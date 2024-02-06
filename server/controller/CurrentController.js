const Current = require("../models/Current");

const getCurrent = async (req, res) => {
  try {
    const result = await Current.findAll();
    if (result != null) {
      return res.json(result);
    }
  } catch (err) {
    return res.send("Current not found");
  }
};

const updateCurrent = async (req, res) => {
  let newCurrent = req.body;
  let id = req.params.id;
  const { tone } = newCurrent;
  let result = await Current.update({ tone: tone }, { where: { id: id } });
  return res.json(result);
};

module.exports = {
  updateCurrent,
  getCurrent,
};
