import React from 'react';
import {bindActionCreators} from 'redux';
import {addToDeck} from '../../redux/actions/index';
import {connect} from 'react-redux';
import '../../../stylesheets/CardWindow/CardImages.css';


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
      var page_num = this.props.page_num
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
          
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return({
    pages: state.card_pages,
    page_num: state.page_num
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
   addToDeck:addToDeck
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardImages);
