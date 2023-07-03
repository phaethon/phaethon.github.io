import Circle from './Circle';
import styles from './Choice.module.css';

type ChoiceProps = {
  selection: number;
  setSelection: (n: number) => void;
};

export default function Choice({ selection, setSelection }: ChoiceProps) {
  return (
    <div className={ styles.choice }>
      { [...Array(5).keys()].map(i => <Circle onClick={ () => setSelection(i + 1) } selected={ selection == i + 1 } key={i + 1} >{ i + 1 }</Circle>)}
    </div>
  );
}
