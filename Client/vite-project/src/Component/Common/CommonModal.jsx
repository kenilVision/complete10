import React from 'react';
import Button from '../Common/Button';

const withModal = ({  children, setmodel, modal, mode, resetForm }) => {
  return (
    <div>
      <Button
        text="Add User"
        className="w-full text-center"
        onClick={() => { setmodel(!modal) }}
      />

      {modal && (
        



        <div
        id="crud-modal"
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-gray-900/50"
         >
        <div className="relative p-4 w-full max-w-md max-h-full ">
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {mode? "Add User" :"Edit User" }
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  
              onClick={() => {
                  setmodel(!modal)
                  resetForm()
                }}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div className="">{children}</div>

            
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default withModal;
