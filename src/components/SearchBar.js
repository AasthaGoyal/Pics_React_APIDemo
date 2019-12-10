import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};
//even contains a bunch if information about the event being passed
    onInputChange(event)
    {
        //whatver text user enters can be accessed by event.target.value
        console.log(event.target.value);

    }

  //to prevent the form to submit itself

  //either we use the construtcor or make it a regulat function
    onFormSubmit = (event) =>
    {
        event.preventDefault(); 
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
        <div className="ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label> Image Search</label>
                    
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})}/>
                </div>
               

            </form>
        </div>
        );
    }
}
//we do not pass () whenever we are calling a callback to an event handler
export default SearchBar;