"use client";

export default function Transaction({
  emoji,
  time,
  title,
  amount,
  desc,
}: {
  emoji: string;
  time: string;
  title: string;
  amount: number;
  desc: string;
}) {
  return (
    <div className='flex items-center border-t-gray-300 first:border-t-0'>
      <p className='text-2xl mr-2'>{emoji}</p>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-white font-semibold'>{title}</p>
            <p className='text-[#b0b0b4] text-sm font-semibold'>{time}</p>
          </div>

          <div>
            <p
              className={`text-white font-semibold text-right ${
                amount > 0 ? "text-lime-600" : "text-red-500"
              }`}
            >
              ₦
              {amount
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className='text-[#b0b0b4] text-sm font-semibold text-right'>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
