const db = require("../config/mysql");

exports.applyLeave = (req, res) => {
  const { employee_id, reason } = req.body;

  db.query(
    "INSERT INTO leave_requests (employee_id, reason, status) VALUES (?, ?, ?)",
    [employee_id, reason, "Pending"],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Leave Applied" });
    }
  );
};

exports.getLeaves = (req, res) => {
  db.query("SELECT * FROM leave_requests", (err, rows) => {
    res.json(rows);
  });
};

