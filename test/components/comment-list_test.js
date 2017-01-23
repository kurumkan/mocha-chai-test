import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list.jsx';											  

describe('CommentBox', ()=>{
	var component;	

	beforeEach(() => {
		var comments = ['xyz', 'abc'];	
		component = renderComponent(CommentList, null,{comments});		
	});

	it('has a correct class', ()=>{
	    expect(component).to.have.class('comment-list');
	});

	it('shows LI for each comment', ()=>{		
	    expect(component.find('li').length).to.equal(2);
	});

	it('shows each provided comment', ()=>{
	    expect(component).to.contain('xyz');
	    expect(component).to.contain('abc');
	});
	
	
});
