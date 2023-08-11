
import React from 'react';
import Button from "./button";

interface PageTitleProps {
    title: string;
}

const PageHeader: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <div className="mt-12 flex flex-col sm:flex-row w-full items-center sm:border-b border-colbert-300 py-4">
            <h1 className="text-2xl w-full">{title}</h1>
            <div className="w-full sm:w-auto sm:ml-auto">
                <div className="btn-group mt-4 sm:mt-auto">
                    <Button label='New expense' buttonType='primary' size='md' className='order-2' />
                    <Button label='Options' buttonType='secondary' size='md' className='order-1'/>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;


