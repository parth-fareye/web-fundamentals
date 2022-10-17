import React, { PureComponent } from 'react';
import UserList from './UserList';

export default class User extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser(e){
        e.preventDefault();

        if(this._inputElement !== ""){
            var newUser = {
                value: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return {
                    users: prevState.users.concat(newUser)
                };
            });
        }
        this._inputElement.value ="";
        console.log(this.state.users);
    }

  render() {
    return (
        <>
      <div>
        <form onSubmit={this.addUser}>
            <input ref={(e) => this._inputElement = e} placeholder="add user"/>
            <button type="submit">add</button>
        </form>
      </div>
        <UserList users={this.state.users}/>
      </>
    )
  }
}
