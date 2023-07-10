
import React from 'react';

const Lightbox = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 w-full min-h-screen bg-colbert-400 z-50 flex flex-col">
            {/* Lightbox Top Nav / Header */}
            <nav className="w-full shadow-lg p-6  bg-midnight-900 flex flex-row justify-between">
                <h1 className="text-2xl text-white">invoice2022232.pdf</h1>
                <div className="action-buttons">
                    <button>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" />
                        </svg>
                    </button>
                    <button>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0416 5.93168L13.9254 4.81543L9.49998 9.24085L5.07456 4.81543L3.95831 5.93168L8.38373 10.3571L3.95831 14.7825L5.07456 15.8988L9.49998 11.4733L13.9254 15.8988L15.0416 14.7825L10.6162 10.3571L15.0416 5.93168Z" fill="#121224" />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Full page Embed Object */}
            <embed className="w-full h-full" src="./CustomerInvoice-16.pdf#zoom=150"></embed>
        </div>
    );
};
export default Lightbox;
