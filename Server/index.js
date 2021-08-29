const express = require("express");
const User = require('./config');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());


// get data from firebase
app.get('/get', async (req, res) => {
  const snapshot = await User.doc("Post").get().then((doc) => {
      console.log("data is: ", doc.data());
      data = doc.data();
  }).catch((error) => {
      console.log("error", error);
  });
  res.json({
    message: data.data.message,
    title: data.data.title,
    date: data.data.date,
  });
});

// add data to firebase (post req)
app.post('/create', async (req, res) => {
  const data = req.body;
  await User.doc("Post").set({data}).then(() => {
      console.log("success!", data);
  }).catch((error) => {
      console.log("error is: ", error);
  });
  res.send({ msg: "useradded" }); 
});

// standard hello json response to see if up and running
app.get("/hello", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
