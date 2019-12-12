import $ from 'jquery';


// $.ajax ({
//     url: '/registerUser' ,
//     data : {username:'',password:''},
//     type: 'POST',

//     success: function(response) {
//          console.log(response)
//     },

//    error: function(response ) {
//        console.log(response)
//     }
// })

$.ajax ({
    url: '/savedeck',
    data : {deckid: ''},
    type : 'POST',

    success: function(response) {
        console.log(response)
    },
    error: function(response) {
        console.log(response)
    }
})


$.ajax ({
    url : '/deletedeck',
    data : {deckid: ''},
    TYPE: 'DELETE',

    success : function(response) {
        console.log(response)
    },
    error : function(response) {
        console.log(response)
    }
})