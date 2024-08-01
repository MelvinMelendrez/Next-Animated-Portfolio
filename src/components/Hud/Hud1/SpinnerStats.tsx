import React from 'react';

interface SpinnerProps {
    className?: string;
    title?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className, title }) => {
    return (
        <div className='spinnerBox'>
            <div className={className}>
            </div>
            {title && <span>{title}</span>}
        </div>
    );
};

export default Spinner;
