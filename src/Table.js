import React from "react";

const Table = ({ invoices, deleteInvoice, editInvoice }) => {
  if (!invoices || !Array.isArray(invoices)) {
    return <p className="text-red-500 m-3">No invoices available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 px-4 py-2">Invoice ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Customer</th>
            <th className="border border-gray-300 px-4 py-2">Payable Amount</th>
            <th className="border border-gray-300 px-4 py-2">Paid Amount</th>
            <th className="border border-gray-300 px-4 py-2">Due</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{invoice.id}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.customer}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.payableAmount}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.paidAmount}</td>
              <td className="border border-gray-300 px-4 py-2">{invoice.due}</td>
              <td className="border border-gray-300 px-4 py-2 flex gap-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => editInvoice(invoice)}>Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  onClick={() => deleteInvoice(invoice.id)}>Delete</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
