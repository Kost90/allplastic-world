const current = require("./Current");
const mounth = require("./Month");
const alltime = require("./Alltime");

async function createTables() {
  try {
    // await ContactUsMessages.sync()
    await current.sync({ force: true });
    await mounth.sync({ force: true });
    await alltime.sync({ force: true });
    // await answers.sync({force:true});
    console.log("Made tables!");
  } catch (err) {
    console.log("Did not make tables", err);
  }
}

module.exports = {
  createTables,
};
