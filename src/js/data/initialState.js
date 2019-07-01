const initialState = {
  wall: {
    title: null,
    _childEntities: [
      {
        title: 'Help',
        _childEntities: [
          {
            title: 'Tab focuses buttons and input fields',
          },
          {
            title: 'Stift + Scroll to move horisontally',
          },
          {
            title: 'Click on a Card/Board to select it',
          },
          {
            title: 'Delete deletes a selected object',
          },
          {
            title: 'Ctrl+Z undoes one latest action',
          },
          {
            title: 'Ctrl+S saves board state',
          },
          {
            title: 'Ctrl+L loads saved board state',
          },
          {
            title: 'Ctrl+I loads initial board state',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'Done',
        _childEntities: [
          {
            title: 'Check Lighthouse metrics',
          },
          {
            title: 'Write a CV (RUS)',
            href: 'https://vk.com/doc173489181_503250356?hash=f9ece956e9e18a81b2&dl=f759ba65e934c923af',
          },
          {
            title: 'Write a CV (ENG)',
            href: 'https://vk.com/doc173489181_508478074?hash=a5237d31dd3a91e2a2&dl=bbb5e8db698c78f01d',
          },
          {
            title: 'Generate documentation',
            href: 'https://asdisa.github.io/kaban-board/docs/',
          },
        ],
        insidesShown: false,
      },
      {
        title: 'In progress',
        _childEntities: [

          {
            title: 'Brush up on data structures and algorithmes',
          },
          {
            title: 'Complete courses on React',
          },
          {
            title: 'Finish the "Secrets of the JavaScript Ninja"',
          },
          {
            title: 'SICP',
          },
        ],
        insidesShown: false,
      },
    ],
  },
};

export default initialState;
