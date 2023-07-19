
import React from 'react';
import Button from "./button";

interface PageTitleProps {
    title: string;
}

const PageHeader: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <div className="mt-12 flex w-full items-center border-b border-colbert-300 py-4">
            <h1 className="text-2xl">{title}</h1>
            <div className="ml-auto hidden sm:flex">
                <div className="btn-group">
                    <Button label='New expense' buttonType='primary' size='md' className='order-1 md:order-2' />
                    <Button label='New expense' buttonType='secondary' size='md' className='order-2 md:order-1'/>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;


