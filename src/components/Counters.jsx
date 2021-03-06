import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3}
        ]
     }

     handleDelete = (counterId) => {
         
        const counters = this.state.counters.filter( x => x.id !== counterId);
        this.setState({counters});
     }
    render() { 
        
        return ( 
            <div>
            {this.state.counters.map(counter =>
                <Counter key={counter.id}  onDelete={this.handleDelete} counter = {counter} >
                <h4>Counter # {counter.id}</h4>
                </Counter>
                )}
            </div>
         );
    }
}
 
export default Counters;