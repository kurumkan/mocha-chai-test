import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app.jsx';

//Use 'describe' to group together similar tests
describe('App', ()=>{
	var component;
	
	//create a new instance of App before each test(before each 'it' statement)
	//(it's clean, didn't pass through any kind of manipulation)
	beforeEach(() => {
		component = renderComponent(App);
	});

	//use 'it' to test a single attribute of a target
	it('shows the correct text', ()=>{
		
		//use 'expect' to make an assertion about a target
	    expect(component).to.contain('React simple starter');
	});

	it('shows a ComentBox', ()=>{
		expect(component.find('.comment-box')).to.exist;
	});
});
