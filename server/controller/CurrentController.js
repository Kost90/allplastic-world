const Current = require("../models/Current");

const getCurrent = async (req, res) => {
  // const id = req.params.id;
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
  const { tone, id } = newCurrent;
  let result = await Current.update({ tone: tone }, { where: { id: id } });
  return res.json(result);
};

module.exports = {
  updateCurrent,
  getCurrent,
};
