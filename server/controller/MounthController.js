
const Month = require("../models/Month");

const getMonth = async (req, res) => {
  try {
    const result = await Month.findAll();
    if (result !== null) {
      return res.json(result);
    }
  } catch (err) {
    return res.send("Mounth data not found");
  }
};

const updateMonth = async (req, res) => {
  let newCurrent = req.body;
  let id = req.params.id;
  const { tone } = newCurrent;
  try {
    const result = await Month.update({ tone: tone }, { where: { id: id } });
    return res.json(result);
  } catch (err) {
    res.send("Cannot update mounth data, data not found");
  }
};

module.exports = { getMonth, updateMonth };
