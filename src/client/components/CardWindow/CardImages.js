import React from 'react';
import {bindActionCreators} from 'redux';
import {} from '../../redux/actions/index';
import {connect} from 'react-redux';


class CardImages extends React.Component{

  constructor(props){
    super()
  }

  render(){

    // IF THERE ARE PAGES TO BE LOADED
    if(this.props.pages.length > 0){
      var pages = this.props.pages
      var page_num = this.props.pageCount
      var curr_page = pages[page_num]
      var img_arr = []

      curr_page.map( (card) => {
        img_arr.push( <img src={`${card.image}`} style={styles.CardImg} alt='img'/> )
      })

      return( <div style={styles.CardImgContainer}> {img_arr} </div>)
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
   
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardImages);

const styles = {
  CardImgContainer:{
    height:'77vh',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: '50% 50%',
  },
  CardImg:{
    marginLeft:'5%',
    marginTop:'8%',
    height:'280px',
    width: '200px',
  }
}