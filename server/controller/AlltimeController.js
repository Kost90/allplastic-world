const Alltime = require("../models/Alltime");

const getAlltimes = async (req, res) => {
  // const id = req.params.id;
  try {
    const result = await Alltime.findAll();
    if (result !== null) {
      return res.json(result);
    }
  } catch (err) {
    res.send("Cannot find alltime data");
  }
};

const updateAlltime = async (req, res) => {
  const { tone, id } = req.body;
  try {
    const result = await Alltime.update({ tone: tone }, { where: { id: id } });
    return res.json(result);
  } catch (err) {
    res.send("Can't update data of alltime");
  }
};

module.exports = { getAlltimes, updateAlltime };
