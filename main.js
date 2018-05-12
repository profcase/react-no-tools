/***
 * Working with React without needing any extra tools.
 * 
 * No webpack bundler.
 * No Babel compiler.
 * No npm/yarn package manager.
 * 
 * Usually parameters are declared inline. 
 * 
 * The following constants are defined separately for 
 * enhanced description and ability to experiment.
 * 
***/

const newTag = 'h1'
const tagParameters = { "id": 'myheader' }
const message = 'Hello React!'
const parentTagID = 'app'

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click', () =>

  /**
   * Creates a new DOM tree and replaces whatever is under the designated parent node.
   */
  ReactDOM.render(
    React.createElement(newTag, tagParameters, message),
    document.getElementById(parentTagID)
  )
)
btn2.addEventListener('click', () =>
  /**
   * Creates a new DOM tree and replaces whatever is under the designated parent node.
   */
  ReactDOM.render(
    React.createElement('article', { "id": 'main-article' },
      React.createElement('h1', {}, 'My Heading'),
      React.createElement('p', {}, 'Paragraph of text 1.'),
      React.createElement('p', {}, 'Paragraph of text 2.'),
      React.createElement('p', {}, 'Paragraph of text 3.'),
    ),
    document.getElementById(parentTagID)
  )
)

