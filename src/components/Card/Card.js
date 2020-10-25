import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
    state = {
        cards: this.props.cards || [],
      }

      static propTypes = {
        title: PropTypes.node.isRequired,	    
        cards: PropTypes.array,
        icon: PropTypes.node,
      }
    
      static defaultProps = {
        icon: settings.defaultColumnIcon,
      }
    
      addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }

render(){
    return(
    <section className={styles.component}>
      <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
    </section>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card; 