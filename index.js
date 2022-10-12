const app = require("express")();

app.get("/api", (req, res) => {
  res.send("Hola mundo")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))