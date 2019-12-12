import React from 'react';
import $ from 'jquery';

class CardButton extends React.Component {

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

    <div style = {styles.CardButton}>
    <button onClick ={this.testing}>Go Back</button>
    </div>
    )

}
}
const styles = {

    CardButtons : {
        justifyContent: 'center'
    }
}







   


export default CardButton;