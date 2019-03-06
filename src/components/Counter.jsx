import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: []
    };

    // constructor() {
    //     // super();
    //     // this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // }
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value
    }

    render() {
        
        return (
            <div>
                {this.props.children}
                {/* {this.state.tags.length === 0 && 'Please enter a tag'} */}
                <span className={this.getBadgeClasses()} >{this.formatCount()} </span>
                 <button onClick= {this.handleIncrement} className="btn btn-secondary btn-sm" >Increment</button>
                  <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)} >Delete</button>
            


            </div>
        )
    };
    
};

export default Counter;