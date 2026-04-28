export default function LeaveCard({ leave }) {
  return (
    <div>
      <p>Reason: {leave.reason}</p>
      <p>Status: {leave.status}</p>
    </div>
  );
}

