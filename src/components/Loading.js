import React from 'react'; 

function Loading() {
    /*Component is used to create loading sign. It;s used Bootstrap classes. 
    It is call by App. 
    It's doesn't takes any props. */

    return (
        <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;