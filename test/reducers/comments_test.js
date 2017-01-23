import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';

describe('Reducers', ()=> {
	describe('Comments', ()=>{
		
		var state;

		beforeEach(() => {
			state = ['x','y'];	
		});


		it('handles actions with unknown types', ()=>{			
			var action = {type: 'RANDOM_TYPE', payload: null};
			expect(commentReducer(state, action)).to.equal(state);
		});

		it('SAVE_COMMENT', ()=>{
			var action = {type: 'SAVE_COMMENT', payload: 'z'};
			expect(commentReducer(state, action)).to.eql([...state, 'z']);
		});

	});
})
