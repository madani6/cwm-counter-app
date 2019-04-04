import React, { Component } from 'react';
import Index from './index';

class Indexs extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
        ]
    }
    render() { 
        return ( 
            <div>
                { this.state.counters.map(counter => <Index />)}
            </div>
         );
    }
}
 
export default Indexs;