

import Ad from './../ad/ad';
import { useState } from 'react';

import { connect } from 'react-redux';

function AdBox(props) {

    return <>


        <div className="flex">

            <ol>
            
            </ol>

 

        </div>
    </>;

}


// 1) Create a store in store.js, esxport it
// 2) import Provider in main file (app.js) and wrap all components in the Provider tag
//3) create sections(reducers) in the main store file
//4). import connect in the component file which wants to receive data from store



// store ka section data phenkta h
// connect ka recieveer functyion chlta h aur store ka data mangwata h
//  yehi functions component kay andr data inject krdeta h props kay through


export default connect((store) => {

    return store

})(AdBox);


