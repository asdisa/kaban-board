import Card from '../components/card';
import Board from '../components/board';

const elementText = {
  entityAdder: new Map([
    [Card, {
      facadeInnerText: 'Добавить еще одну карточку',
      inputPlaceholder: 'Введите название карточки',
      addButtonText: 'Добавить карточку',
    }],
    [Board, {
      facadeInnerText: 'Добавить еще одну колонку',
      inputPlaceholder: 'Введите название колонки',
      addButtonText: 'Добавить колонку',
    }],
  ]),
};

export default elementText;
