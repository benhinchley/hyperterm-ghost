const ghost = {
  black: '#121212', // black
  bright_black: '#222222', // bright black
  white: '#c0c0c0', // white,
  bright_white: '#e4e4e4', // bright white
  grey: '#7d7d7d', // grey
  bright_grey: '#a3a3a3', // bright grey
  blue: '#0087ff', // blue
  red: '#ff0000', // red
  yellow: '#d7ff00', // yellow
  green: '#00ff00', // green
  pink: '#ff00ff', // pink
  cyan: '#00ffff', // cyan
}

const colors = [
  ghost.black,
  ghost.red,
  ghost.green,
  ghost.yellow,
  ghost.blue,
  ghost.pink,
  ghost.cyan,
  ghost.bright_grey,
  ghost.grey,
  ghost.red,
  ghost.green,
  ghost.yellow,
  ghost.blue,
  ghost.pink,
  ghost.cyan,
  ghost.bright_white,
  ghost.white
]

const backgroundColor = ghost.black
const foregroundColor = ghost.white
const cursorColor = ghost.white
const borderColor = ghost.black

exports.decorateConfig = config => {
  console.log('ghost')

  return Object.assign({}, config, {
    cursorColor,
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
      x-screen a {
        color: ${ghost.blue};
      }

      x-screen a.hover {
        text-decoration: underline;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        left: 0;
        right: 0;
      }
      .tab_tab {
        font-weight: bold;
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        color: ${backgroundColor} !important;
        background-color: ${ghost.bright_grey};
      }
    `
  })
}

