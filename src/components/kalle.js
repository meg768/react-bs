import React from 'react';

function Kalle(props)  {
    const {children, ...other} = props;

    return (
        <div {...other}>
            {children}
        </div>
    );
}

export default Kalle;
