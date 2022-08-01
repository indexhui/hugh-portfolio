const Text = {
  baseStyle: {
    fontSize: '16px',
    letterSpacing: '0.1em',
    lineHeight: '1.5',
  },
  variants: {
    banner: {
      fontSize: '28px',
      color: 'white',
    },
    bannerTitle: {
      fontWeight: '400',
      color: 'white',
      fontSize: '16px',
      '@media(max-width: 40em)': {
        fontSize: '15px',
      },
    },
    bannerText: {
      fontWeight: '300',
      color: '#ffffffcc',
      fontSize: '15px',
      '@media(max-width: 40em)': {
        fontSize: '13px',
      },
    },
    title: {
      fontWeight: '500',
      fontSize: '20px',
      '@media(max-width: 40em)': {
        fontSize: '17px',
      },
    },
    body: {
      color: 'grey.700',
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '27px',
      letterSpacing: '0.05em',
    },
    button1: {
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '0.005em',
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

export default Text;
