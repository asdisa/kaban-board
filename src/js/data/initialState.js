const initialState = {
  wall: {
    title: null,
    _childEntities: [
      {
        title: 'Неочевидный реализованный функционал',
        _childEntities: [
          {
            title: 'Tab как средство перемещения по кнопкам',
          },
          {
            title: 'Скролл мыши с зажатым Stift позволяет перемещаться горизонтально',
          },
          {
            title: 'Клик по Доске/Картdeочке выделяет соответвующий объект',
          },
          {
            title: 'Delete удаляет выделенный объект',
          },
          {
            title: 'Ctrl+Z отменяет одно последнее действие',
          },
          {
            title: 'Ctrl+S сохраняет текущее состояние Досок в LocalStorage',
          },
          {
            title: 'Ctrl+L загружет последнее сохраненное состояние Досок',
          },
          {
            title: 'Ctrl+I загружает исходное состояние Досок',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'Нереализованный функционал',
        _childEntities: [
          {
            title: 'Непрозрачная наклоненная перемещаемая карточка',
          },
          {
            title: 'Mobile-first адаптив',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'Сделано',
        _childEntities: [
          {
            title: 'Сделать тестовое',
          },
          {
            title: 'Проверить метрики Lighthouse',
          },
          {
            title: 'Залить на гитхаб, захостить на Pages',
          },
          {
            title: 'Написать CV',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'Не сделано',
        _childEntities: [
          {
            title: 'Диплом',
          },
          {
            title: 'Повторить структуры данных',
          },
          {
            title: 'Повторить алгоритмы',
          },
          {
            title: 'Порешать Codeforces',
          },
          {
            title: 'Зарашить курсик по реакту',
          },
          {
            title: 'Поверстать без бутстрапов',
          },
          {
            title: 'Дочитать Secrets of the JavaScript Ninja',
          },
          {
            title: 'Понять кложур',
          },
          {
            title: 'Понять дзен',
          },
        ],
        insidesShown: false,
      },
    ],
  },
};

export default initialState;
