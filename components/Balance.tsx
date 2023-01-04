"use client";
import { useState } from "react";
import { transactions } from "./transaction-list";

export default function Balance({}) {
  const [show, setShow] = useState<boolean>(false);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className='text-gray-300 cursor-pointer'>
      <div className='text-center' onClick={() => setShow(!show)}>
        <p className='text-gray-100 text-xs'>Your balance</p>
        <p className='text-4xl font-semibold flex items-start justify-center'>
          <span className='text-[#b0b0b4] text-sm font-normal'>₦</span>
          {income.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
      {show ? (
        <div className='flex backdrop-blur-sm bg-white/20 py-5 rounded-lg mt-10'>
          <div className='flex-1 text-center text-lime-600'>
            <p className='text-xs uppercase font-bold'>Income</p>
            <p className='text-xl font-semibold'>
              ₦
              {income
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className='flex-1 text-center text-red-500'>
            <p className='text-xs uppercase font-bold'>Expense</p>
            <p className='text-xl font-semibold'>
              ₦
              {expense
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
