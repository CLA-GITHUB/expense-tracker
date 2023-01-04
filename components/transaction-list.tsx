"use client";

import Transaction from "./transaction";

export const transactions = [
  {
    emoji: "👔",
    time: "12:10 PM",
    title: "Salary",
    amount: 1_200_000,
    desc: "Salary",
  },
  {
    emoji: "🎇",
    time: "6:10 PM",
    title: "New Year",
    amount: -120_000,
    desc: "New year pary",
  },
  {
    emoji: "🧨",
    time: "1:10 PM",
    title: "Bangas",
    amount: -10_000,
    desc: "Fire works",
  },
  {
    emoji: "🎇",
    time: "6:10 PM",
    title: "New Year",
    amount: -120_000,
    desc: "New year pary",
  },
  {
    emoji: "👨‍💻",
    time: "6:10 PM",
    title: "Freelance",
    amount: 120_000,
    desc: "LMS job",
  },
];

export default function TransactionList() {
  return (
    <div className='space-y-8 mt-10'>
      {transactions.map(({ emoji, title, time, amount, desc }, index) => (
        <Transaction
          key={index}
          emoji={emoji}
          time={time}
          title={title}
          amount={amount}
          desc={desc}
        />
      ))}
    </div>
  );
}
