import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaves } from "../features/leave/leaveSlice";
import LeaveCard from "../components/LeaveCard";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { leaves } = useSelector((state) => state.leave);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      {leaves.map((leave) => (
        <LeaveCard key={leave.id} leave={leave} />
      ))}
    </div>
  );
}

