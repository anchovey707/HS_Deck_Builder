import React from 'react';
import {bindActionCreators} from 'redux';
import {addToDeck} from '../../redux/actions/index';
import {connect} from 'react-redux';
import '../../../stylesheets/CardImages.css';


class CardImages extends React.Component{

  constructor(props){
    super()
  }

  addToDeck(name){
    this.props.addToDeck(name)
  }

  render(){

    // IF THERE ARE PAGES TO BE LOADED
    if(this.props.pages.length > 0){
      var pages = this.props.pages
      var page_num = this.props.pageCount
      var curr_page = pages[page_num]
      var img_arr = []

      curr_page.map( (card) => {
        img_arr.push( <img src={`${card.image}`} className='card-img' alt='img' onClick={ () => this.addToDeck(card.name)} />)
      })

      return( <div className='card-img-container'> {img_arr} </div>)
    }

    else{
      return(
        <div>
          Images
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  var cardPages = state.CardPages
  var pageCount = state.PageCount

  return({
    pages: cardPages,
    pageCount: pageCount
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
   addToDeck:addToDeck
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardImages);
