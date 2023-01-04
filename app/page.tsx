import AddTransactionModal from "@/components/add-transaction";
import Balance from "@/components/Balance";
import NavBar from "@/components/navbar";
import TransactionList from "@/components/transaction-list";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-md mx-auto h-full'>
        <AddTransactionModal />
        <Balance />
        <TransactionList />
      </div>
    </div>
  );
}
