import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentProofs = () => {
  // Mock data and functions to replace slices
  const paymentProofs = [
    { userId: "User1", status: "Pending", _id: "1" },
    { userId: "User2", status: "Approved", _id: "2" },
  ];
  const [singlePaymentProof, setSinglePaymentProof] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePaymentProofDelete = (id) => {
    console.log(`Delete payment proof with ID: ${id}`);
  };

  const handleFetchPaymentDetail = (id) => {
    const proof = paymentProofs.find((item) => item._id === id);
    setSinglePaymentProof(proof);
  };

  useEffect(() => {
    if (singlePaymentProof) {
      setOpenDrawer(true);
    }
  }, [singlePaymentProof]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white mt-5">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 py-2">User ID</th>
              <th className="w-1/3 py-2">Status</th>
              <th className="w-1/3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {paymentProofs.length > 0 ? (
              paymentProofs.map((element, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-center">{element.userId}</td>
                  <td className="py-2 px-4 text-center">{element.status}</td>
                  <td className="flex items-center py-4 justify-center gap-3">
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300"
                      onClick={() => handleFetchPaymentDetail(element._id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-all duration-300"
                      onClick={() => handlePaymentProofDelete(element._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-xl text-sky-600 py-3">
                <td>No payment proofs are found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Drawer
        setOpenDrawer={setOpenDrawer}
        openDrawer={openDrawer}
        singlePaymentProof={singlePaymentProof}
      />
    </>
  );
};

export default PaymentProofs;

export const Drawer = ({ setOpenDrawer, openDrawer, singlePaymentProof }) => {
  const [amount, setAmount] = useState(singlePaymentProof?.amount || "");
  const [status, setStatus] = useState(singlePaymentProof?.status || "");

  const handlePaymentProofUpdate = () => {
    console.log(
      `Update payment proof with ID: ${singlePaymentProof?._id}, Status: ${status}, Amount: ${amount}`
    );
  };

  return (
    <>
      <section
        className={`fixed ${
          openDrawer && singlePaymentProof ? "bottom-0" : "-bottom-full"
        } left-0 w-full transition-all duration-300 h-full bg-[#00000087] flex items-end`}
      >
        <div className="bg-white h-fit transition-all duration-300 w-full">
          <div className="w-full px-5 py-8 sm:max-w-[640px] sm:m-auto">
            <h3 className="text-[#D6482B] text-3xl font-semibold text-center mb-1">
              Update Payment Proof
            </h3>
            <p className="text-stone-600">
              You can update payment status and amount.
            </p>
            <form className="flex flex-col gap-5 my-5">
              <div className="flex flex-col gap-3">
                <label className="text-[16px] text-stone-600">User ID</label>
                <input
                  type="text"
                  value={singlePaymentProof?.userId || ""}
                  disabled
                  className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none text-stone-600"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[16px] text-stone-600">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[16px] text-stone-600">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="text-xl px-1 py-2 bg-transparent border-[1px] border-stone-600 rounded-md focus:outline-none"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Settled">Settled</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-blue-500 flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300 hover:bg-blue-700"
                  onClick={handlePaymentProofUpdate}
                >
                  Update Payment Proof
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-yellow-500 flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300 hover:bg-yellow-700"
                  onClick={() => setOpenDrawer(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};