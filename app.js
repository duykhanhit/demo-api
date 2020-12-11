const express = require("express");
const fs = require("fs");
const app = express();

app.get("/api/products", async (req, res) => {
  try {
    const products = await fs.readFileSync("./data/products.json", {
      encoding: "utf-8",
    });

    res.status(200).json({
      err: 0,
      success: true,
      data: JSON.parse(products),
    });
  } catch (err) {
    res.status(400).json({
      err: 1,
      success: false,
      data: err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
