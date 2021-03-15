import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        added: false
      }
  this.addStar = this.addStar.bind(this);
  }
  addStar(){
   this.setState(prevState => ({
    added: !prevState.added
   })) 
  }
  
  static propTypes = {
        cardTitle: PropTypes.string,
      }
  render() {
    const star = <i className="far fa-star"></i>;
    const addedStar = <i className="fas fa-star"></i>
    return (
      

        <div className={styles.component}>
            <p>{this.props.title}<button onClick={this.addStar} className={styles.star}>{this.state.added ? addedStar : star}</button></p>
        </div>
    );
  }
}

export default Card;