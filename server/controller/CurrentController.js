const Current = require('../models/Current');

const getCurrent = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Current.findOne({ where: { id: id } });
      if (result != null) {
        return res.json(result);
      }
    } catch (err) {
      return res.send("Current not found");
    }
  };

// const getSingleUser = async (req, res) => {
//     const useremail = req.params.email;
//     const password = req.params.password;
//     try {
//         const result = await Users.findOne({where: {email: useremail}});
//         const isMatch = await bcrypt.compare(password,result.password);
//         if(isMatch && result != null){
//             return res.json(result); //MAG good work with the return here!
//         }
//     } catch (err) {
//         console.log("error is: ", err);
//         return res.send("User not found");  
//     }
// };

const addCurrent = async (req, res) => {
    let newUser = req.body;
    const {password} = newUser;
    const hash = await bcrypt.hash(password,10);
    newUser.password = hash;
    console.log("new user to create", newUser);
    let result = await Users.create(newUser);
    return res.json(result);
};


module.exports = {
    addCurrent,
    getCurrent,
}