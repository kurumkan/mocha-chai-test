//STEP1. setup testing envirounment to run like a browser in the command line

//importing jquery, this will be used to define '$' variable
import _$ from 'jquery';

//jsdom is for fakiing html document in the command line
import jsdom from 'jsdom';
//global is something equivalent for 'window' object in browser, but for terminal
//created a fake documentm, window, navigator object - they exist in real browsers, but don't exist in terminal
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

//define our own instance of jquery - it will work with our fake window
const $ = _$(window);


//STEP2 build renderComponent helper 
import React from 'react';
import ReactDOM from 'react-dom';
//TestUtils - is from react
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//renderComponent should return a given react class(wrapped with jquery)
function renderComponent(ComponentClass, props = {}, state = {}) {

  //renderIntoDocument - render our component into fake document
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  //to get access to the HTML(already rendered component)  
  return $(ReactDOM.findDOMNode(componentInstance));
}



//STEP3 build a helper for simulating events
//from now all jquery element will have this method(ex.: $('.someclass').simulate())
//renderComponent wraps the component with jquery object - so it will also have 'simulate' method
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

//STEP4 setup chai-jquery
chaiJquery(chai, chai.util, $);


export {renderComponent, expect};