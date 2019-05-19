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
            title: 'Клик по Доске/Карточке выделяет соответвующий объект',
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
            title: 'Непрозрачноть и наклон перемещаемой карточки',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'Сделано',
        _childEntities: [
          {
            title: 'Сделать рабочий скелет без стронних библиотек',
          },
          {
            title: 'Проверить метрики Lighthouse',
          },
          {
            title: 'Залить на гитхаб',
            href: 'https://github.com/asdisa/kaban-board',
          },
          {
            title: 'Захостить на Pages',
            href: 'https://asdisa.github.io/kaban-board',
          },
          {
            title: 'Написать резюме',
            href: 'https://vk.com/doc173489181_503203154?hash=76fea4cb1709e39b9d&dl=26e87c3bdbc1e210d4',
          },
          {
            title: 'Сгенерить документацию к коду',
            href: 'https://asdisa.github.io/kaban-board/docs/',
          },
          {
            title: 'Собрать все в вебпаковый бандл',
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
