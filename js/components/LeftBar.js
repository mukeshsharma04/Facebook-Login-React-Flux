import React from 'react';
import button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Main from './Main.js';


export default class LeftBar extends React.Component {

  render() {
    return (
      <div className="col-md-12">
        <div className="main-sidebar col-md-3">
          <div style={{marginLeft : 12}}>
            <ListGroup>
              <ListGroupItem><img src={this.props.picture} className="img-circle" alt="User Image" /></ListGroupItem>
              <ListGroupItem>Name    : {this.props.profile.name}</ListGroupItem>
              <ListGroupItem>Email    : {this.props.profile.email}</ListGroupItem>
              <ListGroupItem>Gender   : {this.props.profile.gender}</ListGroupItem>
              <ListGroupItem>UserId   : {this.props.profile.id}</ListGroupItem>
              <ListGroupItem>Verified : {!this.props.profile.verified ? 'FALSE': 'TRUE'}</ListGroupItem>
            </ListGroup>
          </div>
        </div>

      </div>

    );
  }
}
