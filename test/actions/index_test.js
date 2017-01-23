import { expect } from '../test_helper';
import {saveComment} from '../../src/actions';

describe('actions', ()=> {
	describe('saveComment', ()=>{
		
		var comment;

		beforeEach(() => {
			comment = 'xyz';			
		});


		it('has the correct type', ()=>{			
			expect(saveComment(comment).type).to.equal('SAVE_COMMENT');
		});

		it('has the correct payload', ()=>{
			expect(saveComment(comment).payload).to.equal('xyz');
		});

	});
})
