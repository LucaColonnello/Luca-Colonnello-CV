// default import
import 'babel/polyfill';

// import lib
import 'backbone';
import 'abyssa';
import React from 'react/addons';
import emptyFunction from 'react/lib/emptyFunction';

var State = Abyssa.State;

class IndexController {
	constructor( App ) {
		// declare all the sub routes for this controller
		// this.index = State('');
	}

	enter( ){

	}

	exit( ) {

	}
}

export default IndexController;