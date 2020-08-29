export default themeName => {
  switch (themeName) {
    case 'light':
      return {
        name: 'light',
        primary: {
          background: '#ECF0F0',
          text: '#4a4a4a',
        },
        secundary: {
          background: '#A4B5B9',
          text: '#fff',
        },
      };
    case 'dark':
      return {
        name: 'dark',
        primary: {
          background: '#000',
          text: '#fff',
        },
        secundary: {
          background: '#000',
          text: '#fff',
        },
      };
    default:
      return {
        name: 'light',
        primary: {
          background: '#ECF0F0',
          text: '#4a4a4a',
        },
        secundary: {
          background: '#A4B5B9',
          text: '#fff',
        },
      };
  }
};
