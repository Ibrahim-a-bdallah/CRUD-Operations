import React from 'react';
import { X, Check } from 'lucide-react';


const Successful = ({ onEdit, onClose, onCloseModal }) => {
  return (
    <div className="fixed inset-0 bg-blue-900 flex items-center justify-center p-4">
      {/* Close button in top right */}
      <button 
        onClick={onCloseModal}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      {/* Main content */}
      <div className="text-center max-w-md w-full">
        {/* Green checkmark circle */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto border-4 border-green-500 rounded-full flex items-center justify-center">
            <Check size={48} className="text-green-500" />
          </div>
        </div>

        {/* Success message */}
        <div className="mb-12">
          <h1 className="text-white text-3xl font-semibold mb-4">
            Creation Succeeded
          </h1>
          <p className="text-gray-300 text-lg">
            Wait a few minutes while the<br />
            informations is being validated
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4 w-full max-w-xs mx-auto">
          <button 
            onClick={onEdit}
            className="w-full py-3 px-6 border-2 border-purple-600 text-purple-600 bg-transparent rounded-md hover:bg-purple-600 hover:text-white transition-all duration-200 font-medium"
          >
            Edit
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 px-6 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200 font-medium"
          >
            Close
          </button>
        </div>

        {/* Small circular indicator at bottom left */}
        <div className="absolute bottom-8 left-8">
          <div className="w-8 h-8 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Successful;