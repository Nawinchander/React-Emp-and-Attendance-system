const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email } = req.body;

  const user = {
    id: 1,
    email,
    role: "employee"
  };

  const token = jwt.sign(user, process.env.JWT_SECRET);

  res.json({ token, user });
};

