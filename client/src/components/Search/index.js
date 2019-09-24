import React from 'react';
import './index.css';

function Search(){
    return(
        <div className="container mt-3 border border-dark">
        <h5 className="p-3">Book Search</h5>
        <form className="p-3">
            <div className="form-group">
                <label for="bookSearch">Search</label>
                <input type="text" className="form-control" id="bookSearch"/>
            </div>
            <button type="button" class="btn btn-primary btn-search">Search</button>
        </form>
        </div>
    )
}

export default Search; 