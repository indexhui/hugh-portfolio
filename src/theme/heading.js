const Heading = {
  baseStyle: {
    fontWeight: '500',
    fontSize: '20px',
    letterSpacing: '0.1em',
    lineHeight: '1.5',
  },
  variants: {
    body: {
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '28px',
      letterSpacing: '0.05em',
    },
    banner: {
      color: 'white',
      fontSize: '28px',
      '@media(max-width: 40em)': {
        fontSize: '22px',
      },
    },
    button1: {
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '0.01em',
    },
    button2: {
      fontSize: '15px',
      lineHeight: '21px',
      letterSpacing: '0.01em',
    },
    button3: {
      fontSize: '10px',
      lineHeight: '14px',
      letterSpacing: '0.01em',
    },
    footer: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.01em',
    },
  },
};

export default Heading;
