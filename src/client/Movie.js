import React from 'react';
import ReactDOM from 'react-dom';
// import the Link component to use for linking prop information
import { Link } from 'react-router-dom';

// define one single Movie card component
class Movie extends React.Component {
  render() {
    return (
      <div className="column is-one-quarter" style={{ padding: '20px' }}>
        <div className="card" style={{ borderRadius: '20px' }}>

          <img src={this.props.poster} alt={'poster'} />

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-black has-text-centered has-text-weight-bold">{this.props.title}</p>
                <hr/>
                <p className="subtitle is-size-6 has-text-black has-text-centered">{this.props.year}</p>
                {/* delete the prop with requested id from the function invoked in the parent component*/}
                <button className="button is-danger is-half" type="button"  onClick={() => {this.props.handleDelete(this.props.id);}}>Delete</button>
                {/* load the EditMovie component via React Router and send the id over to the EditMovie component*/}
                <Link to={`/edit-movie/${this.props.id}`}>
                  <hr/>

                  <button className="button is-info" type="button">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
