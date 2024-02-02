const express = require('express');
const cors = require('cors');
const {testConnection} = require('./models/Conn');
// const {createTables} = require('./models/setUp');
const currentRoutes = require('./routes/Currentroutes');
// const loginRoutes = require('./routes/LoginRoutes');
// const resumeroutes = require('./routes/ResumeRoutes');

const app = express();
const port = 8000;

testConnection();

app.use(cors());
app.use(express.json());

// createTables();


app.use("/month", userRoutes);
app.use("/current", currentRoutes);
app.use("/alltime",resumeroutes);


app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    // connect()
  });