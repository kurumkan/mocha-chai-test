import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class CommentBox extends Component {

	constructor(props) {
		super(props);
		this.state={
			comment:''
		};	
	}
	
	handleChange(e){
		this.setState({
			comment: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({comment: ''});		
	}	

	render() {
		return (
			<div className='comment-box'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
					<button>Submit Comment</button>
				</form>	
			</div>
		);
	}
}


export default connect(null, actions)(CommentBox);
