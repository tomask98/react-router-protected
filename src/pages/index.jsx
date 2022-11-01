import { Navigate } from "react-router-dom";
export const Landing = () => <h2>Landing page (public)</h2>;
export const Home = () => {
  return <h2>Home page (private )</h2>;
};
export const Dashboard = () => <h2>Dashboard page (private )</h2>;
export const Analytics = () => (
  <h2>Analytics page (private, permission 'analize' )</h2>
);
