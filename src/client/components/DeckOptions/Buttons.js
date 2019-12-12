import React from 'react';
import $ from 'jquery';

class Buttons extends React.Component {

    

    

    testing () {
        $.ajax ({
            url: '/registerUser' ,
            data : {username:'',password:''},
            type: 'POST',
        
            success: function(response) {
                 console.log(response)
            },
        
           error: function(response ) {
               console.log(response)
            }
        })
    }
render () {

    return (

        <div className = "deckbuttons"  style ={styles.Buttons} >

        <button id ="" style={styles.LoadButton}>Load</button>
        <button id = "" onClick={this.testing} style={styles.SaveButton}>Save</button>
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
        marginLeft: '2vw',
        border : '1px solid black'

    },
    SaveButton : {
        marginLeft: '1vw',
        border : '1px solid black'
    },
     DeleteButton : {
         marginLeft : '1vw',
         border : '1px solid black'
     }

        
    }




export default Buttons;