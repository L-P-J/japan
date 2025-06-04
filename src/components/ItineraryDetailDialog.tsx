import React from 'react';
import { DailyItineraryDetail, transportationType } from '../itineraryDetails/types';

interface ItineraryDetailDialogProps {
  day: string;
  itineraryDetails: (DailyItineraryDetail | transportationType)[];
  onClose: () => void;
}

const ItineraryDetailDialog: React.FC<ItineraryDetailDialogProps> = ({
  day,
  itineraryDetails,
  onClose,
}) => {
  // 根據分類定義顏色
  const categoryColors: { [key in DailyItineraryDetail['category']]: string } = {
    sightseeing: 'text-blue-400', 
    eating: 'text-lime-800', 
    transportation: 'text-amber-800', 
    default: 'text-gray-800',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-lg font-bold text-black">Day {day} Itinerary Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          {itineraryDetails.length === 0 ? (
            <p>No details available for this day.</p>
          ) : (
            itineraryDetails.map((item, index) => (
              <div key={index} className="flex flex-row items-start space-x-3 w-full">
                {/* 彩色粗線 */}
                <div className={`w-1.5 flex-shrink-0 h-10 ${
                  'category' in item ? ( // Check if it's DailyItineraryDetail
                    item.category === 'sightseeing' ? 'bg-blue-400' :
                    item.category === 'eating' ? 'bg-lime-400' :
                    item.category === 'transportation' ? 'bg-orange-300' : 'bg-gray-600'
                  ) : 'bg-amber-300' // Default color for transportationType
                }`}></div>
                {/* 行程內容 */}
                <div className="flex flex-col flex-grow">
                  {'category' in item && item.location === '圖片' ? ( // Check if it's an image item
                    <img src={item.notes} alt="Itinerary Image" className="w-full h-auto rounded-md" />
                  ) : 'category' in item ? ( // Check if it's DailyItineraryDetail
                    <>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500">{item.time}</p>
                        <p className={`text-base font-medium ${categoryColors[item.category]}`}>
                          {item.location}
                        </p>
                      </div>
                      {item.notes && <p className="text-sm text-gray-700 mt-1">Notes: {item.notes}</p>}
                    </>
                  ) : ( // It's transportationType
                    <>
                      <div className="flex items-center space-x-2">
                         <p className={`text-base font-medium ${categoryColors.transportation}`}>
                          {item.type}
                        </p>
                        {item.duration && <p className="text-sm text-gray-500">({item.duration})</p>}
                      </div>
                      {item.from && (
                        <p className="text-sm text-gray-700 mt-1">
                          {`To: ${item.from}`}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetailDialog;
