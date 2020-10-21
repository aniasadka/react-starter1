import React from 'react';
import List from '../List/List.js';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>What should I do today?</h1>
        <h2 className={styles.subtitle}>Here is a list:</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
        <p>I'm planning on doing all these things sooner, rather than later!</p>
        
        </List>

       
      </main>
    )
  }
}

export default App;

