import React from 'react';

interface ISampleProps {
    title: string;
}

const Sample = ({ title }: ISampleProps) => {
    return (
        <div className="section">
            {title}
        </div>
    );
};

export default Sample;