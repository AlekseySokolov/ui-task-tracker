import React from 'react';
export const renderField = ({
                             input,
                             label,
                             type
                            }) => (
    <>
        <div>
            <input {...input} placeholder={label} type={type} className='loginInput' />
        </div>
    </>
);