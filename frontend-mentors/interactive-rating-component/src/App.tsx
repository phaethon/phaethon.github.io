import { useState } from 'react'
import styles from './App.module.css'

import classnames from 'classnames/bind';

import Circle from './components/Circle';
import Choice from './components/Choice';
import Button from './components/Button';
import Message from './components/Message';

const cx = classnames.bind(styles);

function App() {
  const [ submitted, setSubmitted ] = useState(false);
  const [ selection, setSelection ] = useState(-1);

  const onSubmit = () => {
    if (selection >= 0) {
      setSubmitted(true);
    }
    return true;
  }

  return (
    <main>
      { ! submitted ?
        <div className={ styles.frame }>
          <Circle selectable={ false }><img alt="star" src="icon-star.svg" /></Circle>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <Choice selection={ selection } setSelection={ (n: number) => setSelection(n) }/>
          <Button onClick={ onSubmit } >submit</Button>
        </div>
        :
        <div className={ cx('thanks', 'frame') }>
          <img alt="Thank you!" className={ styles.thanksImage } src="illustration-thank-you.svg" />
          <Message>You selected { selection } out of 5</Message>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      }
    </main>
  )
}

export default App;
