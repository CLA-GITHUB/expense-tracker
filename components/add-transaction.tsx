"use client";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";

export default function AddTransactionModal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='flex items-center justify-end'>
        <button
          data-modal-target='staticModal'
          data-modal-toggle='staticModal'
          className='mt-3 mb-10'
          type='button'
          onClick={() => setShow(true)}
        >
          <MdAddCircle size={25} color='white' />
        </button>
      </div>
      {show ? (
        <div
          id='staticModal'
          //   data-modal-backdrop='static'
          tabIndex={-1}
          aria-hidden='true'
          className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
        >
          <div className='relative w-full h-full max-w-2xl md:h-auto'>
            <div className='relative bg-black rounded-lg shadow '>
              <div className='flex items-start justify-between p-4 border-b rounded-t '>
                <h3 className='text-xl font-semibold text-gray-300 '>
                  Add a transaction
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '
                  data-modal-hide='staticModal'
                  onClick={() => setShow(false)}
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='p-6 space-y-6'>
                <p className='text-base leading-relaxed text-gray-300'>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className='text-base leading-relaxed text-gray-300'>
                  The European Union???s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
