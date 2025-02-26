import React, { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";
import { getData, deleteData, postData, putData } from "./api";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [initialForm, setForm] = useState({
    id: "",
    date: "",
    customer: "",
    payableAmount: "",
    paidAmount: "",
    due: ""
  });

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = async () => {
    let res = await getData();
    setInvoices(res.data);
  };

  const deleteInvoice = async (id) => {
    await deleteData(id);
    getInvoices();
  };

  const addInvoice = async (invoice) => {
    let data = { ...invoice };
    if (edit) {
      await putData(invoice.id, data);
      setEdit(false);
    } else {
      await postData(data);
    }
    getInvoices();
    setOpenForm(false);
  };

  const editInvoice = (data) => {
    setForm(data);
    setEdit(true);
    setOpenForm(true);
  };

  const showForm = () => {
    console.log("showForm ishladi!");  
    setOpenForm(true);
    setEdit(false);
    setForm({
      id: "",
      date: "",
      customer: "",
      payableAmount: "",
      paidAmount: "",
      due: ""
    });
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(search.toLowerCase()) ||
    invoice.id.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-5 w-1/2">
      <h2 className="text-blue-600 text-2xl font-bold mb-4">Invoice Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-3" onClick={showForm}>
        Add Invoice
      </button>
      <input
        type="text"
        className="w-full p-2 border rounded mb-3"
        placeholder="Search invoices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table invoices={filteredInvoices} deleteInvoice={deleteInvoice} editInvoice={editInvoice} />
      {openForm && <Form closeForm={closeForm} data={initialForm} add={addInvoice} />}
    </div>
  );
}

export default App;
