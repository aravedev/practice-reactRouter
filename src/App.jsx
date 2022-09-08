import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Bookkeeper!</h1>
      </div>
      <nav>
        <Link to="/invoices" className="link">
          Invoices
        </Link>
        <Link to="/expenses" className="link">
          Expenses
        </Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
