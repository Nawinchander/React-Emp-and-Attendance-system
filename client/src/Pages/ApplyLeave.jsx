import { useState } from "react";
import api from "../api/axios";

export default function ApplyLeave() {
  const [reason, setReason] = useState("");

  const submitLeave = async () => {
    await api.post("/leaves", {
      employee_id: 1,
      reason
    });
    alert("Leave applied");
  };

  return (
    <div>
      <h2>Apply Leave</h2>
      <input
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason"
      />
      <button onClick={submitLeave}>Submit</button>
    </div>
  );
}

