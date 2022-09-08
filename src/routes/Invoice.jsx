import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export const Invoice = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <div>
      <h2>Invoice : {params.invoiceId}</h2>
      <p>Total due: {invoice.amount}</p>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
};
