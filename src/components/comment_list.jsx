import React, { Component } from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
  render() {
  	var {comments} = this.props;

   	comments = comments.map((comment, i)=> <li key={i}>{comment}</li>)

    return (	      
	  	<ul className='comment-list'>
	  		{comments}
	  	</ul>      	  
    );
  }
}

function mapStateToProps(state){
	return {
		comments: state.comments
	}
}

export default connect(mapStateToProps)(CommentList);