// default import
import 'babel/polyfill';

// import lib
import 'backbone';
import 'abyssa';
import React from 'react/addons';
import emptyFunction from 'react/lib/emptyFunction';
import IndexController from './controllers/index';

var State = Abyssa.State,
    Router = Abyssa.Router;

class App {
	constructor( ) {
		// create router
		this.router = Router( {
			index: State( '/', new IndexController( this ) )
		} );

		// execute all bundles
		// ...
	}
}

export default App;