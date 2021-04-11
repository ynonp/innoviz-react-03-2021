import { useState } from 'react';
import Card from './Card';
import _ from 'lodash';
import produce from "immer";

function createPairs(n) {
  return _.shuffle(
    _.flatMap(
      _.range(n),
      x => [{ value: x, visible: false },
            { value: x, visible: false },
      ]));
}

export default function Game(props) {
  const { pairsCount } = props;
  const [cards, setCards] = useState(createPairs(pairsCount));

  function clickedOnCard(index) {
    setCards(oldCards => (
      produce(oldCards, (draft) => {
        draft[index].visible = !draft[index].visible;
      })
    ));
  }

  return (
    <ul style={{
      listStyle: 'none',
    }}>
      {cards.map((c, index) => (
        <li
          key={index}
          style={{ display: 'inline-block' }}
        >

          <Card
            value={c.value}
            visible={c.visible}
            onClick={() => clickedOnCard(index)}
        /></li>
      ))}
    </ul>
  );
}

Game.defaultProps = {
  pairsCount: 4,
};
