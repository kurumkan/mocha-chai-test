import React, { Component } from 'react';
import CommentBox from './comment_box.jsx';
import CommentList from './comment_list.jsx';

export default class App extends Component {	

	render() {  	
		var comments = ['a','b','c','d'];
		return (
			<div>
				Comments App
				<CommentBox/>
				<CommentList comments={comments}/>
			</div>
		);
	}
}
