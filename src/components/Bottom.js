import React from 'react'; 

function Bottom() {
    /*Component is used to create bottom text when user reach end of database. 
    It's used Bootstrap classes. 
    It is call by App. 
    It's doesn't takes any props. */

    return (
        <div className="d-flex justify-content-center my-3">
            <h4> There are no more articles to load </h4>
        </div>
    );
}

export default Bottom;