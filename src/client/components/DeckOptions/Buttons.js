import React from 'react';

class Buttons extends React.Component {




render () {

    return (

        <div className = "deckbuttons" >

        <button >Load</button>
 
        <button>Save</button>
        <button>Filter</button>
        <button>Delete</button>
        </div>
    );
}
}

const styles = {

    Buttons : {
        margin : '10px'
        
    }
}



export default Buttons;