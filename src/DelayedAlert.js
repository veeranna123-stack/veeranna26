import React, { useEffect }from 'react';

function DelayedAlert(){
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Hello after 3 seconds⌛");
        },3000);

        return() =>clearTimeout(timer);
    }, [] );

    return <h2>wait for the alert...</h2>;
}
export default DelayedAlert;