import React from 'react';
import styles from './Motivation.scss';
import { quotes } from '../../data/dataStore';

class Motivation extends React.Component{
    state = {
        quote: '',
    }
    static propTypes = {
        quotes: propTypes.array,
        // quote: propTypes.string,
    }
    quoteHandler(){
        this.setState(quote => (
        quotes: quotes,
        ))}
render(){
    const randomQuote = Math.floor(Math.random() * quotes.length);
    return(
        <div className={styles.component}>
            <button onClick={this.quoteHandler} className={styles.btn}>Check today's message:</button>
            <p>{this.state.quotes[randomQuote]}</p>
        </div>
    )
    }
}

export default Motivation;