import React from 'react';

class Buttons extends React.Component {



render () {

    return (

        <div className = "deckbuttons"  style ={styles.Buttons} >

        <button id ="" >Load</button>
        <button id = "" style={styles.SaveButton}>Save</button>
        <button id = "" style={styles.DeleteButton}>Delete</button>
        </div>
    );
}
}

const styles = {
  
    Buttons : {
            display: 'block',
            position : 'relative',
            flexDirection : 'row'
            
        },
    // LoadButton : {
    //     marginLeft: '2vw'

    // },
    // SaveButton : {
    //     marginLeft: '1vw'
    // },
    //  DeleteButton : {
    //      marginLeft : '1vw'
    //  }

        
    }




export default Buttons;