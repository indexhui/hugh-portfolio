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
    smallTitle: {
      color: 'grey.600',
      fontWeight: '400',
      fontSize: '17px',
      '@media(max-width: 40em)': {
        fontSize: '15px',
      },
    },
    bodyLg: {
      color: 'grey.700',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '32px',
      letterSpacing: '0.05em',
      '@media(max-width: 40em)': {
        fontSize: '15px',
        lineHeight: '21px',
      },
    },
    body: {
      color: 'grey.700',
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '27px',
      letterSpacing: '0.05em',
      '@media(max-width: 40em)': {
        fontSize: '14px',
        lineHeight: '21px',
      },
    },
    text02: {
      color: 'grey.700',
      fontSize: '14px',
      '@media(max-width: 40em)': {
        fontSize: '13px',
      },
    },
    footer: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.01em',
    },
  },
};

export default Text;
