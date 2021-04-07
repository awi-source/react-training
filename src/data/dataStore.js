export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',

  header:{
    icon: 'carrot',
  },
  FAQ:{
    title: 'FAQ',
    image: 'https://i.postimg.cc/fTbcr4ZX/scrabble-4957948-640.jpg',
    question:
      'Q: Etiam in velit at ex tempus rutrum?',
    answer: 'A: Aenean viverra tempor consectetur. Nullam quis auctor ligula. Nulla faucibusimperdiet mauris at facilisis. Sed convallis dictum risus eget faucibus.Nunc luctus rhoncus orci, nec porta magna condimentum et. Nam malesuada luctus nisi. Aenean porta finibus dictum. Cras augue libero, laoreet sit amet accumsan ac, semper sed tortor.',
    questions: [
      'Q: Etiam in velit at ex tempus rutrum?',
      'Q: In non velit id felis vestibulum condimentum?', 
      'Q: Cras in massa et mauris pretium hendrerit?', 
    ],
    answers:  [
      'A: uis ultricies tellus quis nulla facilisis, vel laoreet orci condimentum. Maecenas ullamcorper commodo ex in blandit. Sed pulvinar tellus nec nisi placerat, et dignissim tortor feugiat.', 
      'A: Aenean viverra tempor consectetur. Nullam quis auctor ligula. Nulla faucibusimperdiet mauris at facilisis. Sed convallis dictum risus eget faucibus.',
      'A: Nunc luctus rhoncus orci, nec porta magna condimentum et. Nam malesuada luctus nisi. Aenean porta finibus dictum. Cras augue libero, laoreet sit amet accumsan ac, semper sed tortor.',
    ],
  },
  info:{
    title: 'Info',
    image: 'https://i.postimg.cc/B6qLPDnD/lightbulb-2692247-640.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};
export const quotes = [
  'Think Big', 
  'You can do it', 
  'Never say never', 
  '“Impossible is just an opinion.” – Paulo Coelho', 
  '“Your passion is waiting for your courage to catch up.” – Isabelle Lafleche',
  '"The hard days are what make you stronger.” – Aly Raisman',
  '“If everything seems to be under control, you’re not going fast enough.” – Mario Andretti',
  '“Work hard, be kind, and amazing things will happen.” – Conan O’Brien',
  '“If you work on something a little bit every day, you end up with something that is massive.” – Kenneth Goldsmith',
  '“Nothing will work unless you do.” – Maya Angelou',
  '“Don’t quit yet, the worst moments are usually followed by the most beautiful silver linings. You have to stay strong, remember to keep your head up and remain hopeful.” – Unknown',
  '“In the middle of every difficulty lies opportunity.” – Albert Einstein',
];

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'books',
    title: 'Books to read',
    description: 'Valuable books worth reading',
    image: 'https://i.postimg.cc/43M8XgD8/books-1204029-1920.jpg',
  },
  {
    id: 'travel',
    title: 'Places to visit',
    description: '10 places I will visit this year ',
    image: 'https://i.postimg.cc/vZ0fdtJX/sunrise-1014712-1920.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  // {
//     id: 'column-4',
//     listId: 'list-2',
//     title: 'Strange column',
//     icon: 'question',
//   },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
