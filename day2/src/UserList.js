import React, { PureComponent } from 'react'

export default class UserList extends PureComponent {
  createUser(user) {
    return <li key={user.key}>{user.value}</li>
  }
  
  
    render() {

        var userEntries = this.props.users;
        var userList = userEntries.map(this.createUser);
    return (
      <ul>{userList}</ul>      
    )
  }
}
