import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
// import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    // icon: PropTypes.string,
    addCard: PropTypes.func,
  }
  // static defaultProps = {
  //   icon: settings.defaultColumnIcon,
  // }
  render(){
    const { cards, addCard} = this.props;
    return ( 
      <section className={styles.component}>
        <h3 className={styles.title}>
         Search Results:
          {/* <span className={styles.icon}>
            <Icon name={icon}/>
          </span> */}
        </h3>
        
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}


export default SearchResults;
