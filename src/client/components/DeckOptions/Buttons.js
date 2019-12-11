import React from 'react';

class Buttons extends React.Component {



render () {

    return (

        <div className = "deckbuttons"  style ={styles.Buttons} >

        <button id = "" style={styles.LoadButton}>Load</button>
        <button id = "" style={styles.SaveButton}>Save</button>
        <button id = "" style={styles.DeleteButton}>Delete</button>
        </div>
    );
}
}

const styles = {
  
    Buttons : {
            display: 'block',
            
            
           
            
        },
    LoadButton : {
        marginLeft: '2em'
    },
    SaveButton : {
        marginLeft: '1em'
    },
     DeleteButton : {
         marginLeft : '1em'
     }

        
    }




export default Buttons;