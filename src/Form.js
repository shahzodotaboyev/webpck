import React, { useState, useEffect } from "react";

const Form = ({ closeForm, data, add }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(formData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-3">{formData.id ? "Edit Invoice" : "Add Invoice"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Customer Name"
          />
          <input
            type="number"
            name="payableAmount"
            value={formData.payableAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Payable Amount"
          />
          <input
            type="number"
            name="paidAmount"
            value={formData.paidAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Paid Amount"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <button type="button" onClick={closeForm} className="bg-gray-400 text-white px-4 py-2 rounded ml-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
