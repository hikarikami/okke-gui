


import React from 'react';


const Filters = () => {
    return (
        <div className="mt-8">
            <form className="relative hidden flex-col justify-end gap-4 sm:flex sm:flex-row">
                <div className="input-group compact relative w-44">
                    <label>&nbsp;</label>
                    <select className="w-full" placeholder="Select category...">
                        <option>Option 1</option>
                    </select>
                    <svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                    </svg>
                </div>
                <div className="input-group compact relative w-44">
                    <label>&nbsp;</label>
                    <select className="w-full" placeholder="Select category...">
                        <option>Option 1</option></select
                    ><svg width="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.06 5.53125L8 8.58458L4.94 5.53125L4 6.47125L8 10.4713L12 6.47125L11.06 5.53125Z" fill="#121224" />
                    </svg>
                </div>
                <div className="input-group compact w-56">
                    <label>&nbsp;</label>
                    <input type="text" className="w-full" placeholder="Search" />
                </div>
            </form>
        </div>
    );
};

export default Filters;
