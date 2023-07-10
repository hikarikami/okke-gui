import React from 'react';

const DocumentPreviewDrawer = () => {
    return (
        <>
                <div className="preview-pane">
                    <div className="preview-image">
                        {/* <img src="http://placekitten.com/g/920/1200" /> */}
                        <embed className="border border-colbert-200 h-[60vh] max-h-[60vh] w-full rounded-md bg-midnight-600 object-cover sm:max-h-[75vh]" src="./CustomerInvoice-16.pdf#view=fitH,100"></embed>
                    </div>
                </div>
                <div className="image-tags">
                    <div className="chip-container chips-lg mt-4">
                        <div className="chip chip-lg">EOFY 2023</div>
                        <div className="chip chip-lg">Bunnings</div>
                    </div>
                </div>
                </>
    );
};

export default DocumentPreviewDrawer;
