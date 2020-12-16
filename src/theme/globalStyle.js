import { createGlobalStyle } from 'styled-components';

const COLORS = {
  blueIndependence: '#555B6E',
  blueMorning: '#89B0AE',
  blueQueen: '#577590',
  greyBlue: '#434346',
  greyDark: '#707070',
  greyLight: '#F7F8FB',
  greyViolet: '#C3C0C5',
  orangeMangoTango: '#F08A4B',
  redMiddle: '#D78A76',
  pinkVivid: '#EC174D',
  yellowMustard: '#FFE156',
};

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Lato", Open sans;
f}

body {
  
  background-color: var(--color-secondary);
}

:root {
    font-size: 62.5%; 

    --color-primary: ${COLORS.blueQueen};
    --color-secondary: ${COLORS.greyLight};
    --color-white: #ffffff;

    --color-font-primary: ${COLORS.greyBlue};
    --color-font-secondary: ${COLORS.orangeMangoTango};
    --color-font-tertiary: ${COLORS.blueMorning};

    --font-size-small: 2rem;
    --font-size-medium: 2.5rem;
    --font-size-large: 3rem;

}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



@media only screen and (min-width: 1800px) {
    :root {
      font-size: 75%;
    }
  }

  
  @media only screen and (max-width: 1200px) {
    :root {

      font-size: 56.25%;
    }
  }

  
  @media only screen and (max-width: 900px){

    :root {
      font-size: 50%;
    }
  }


  @media only screen and (max-width: 770px){

    :root {
      font-size: 45%;
    }
  }

`;

export default GlobalStyle;
