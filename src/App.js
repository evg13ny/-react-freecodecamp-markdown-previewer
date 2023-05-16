import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

You can also make text **bold**... whoa!
`;

  const [text, setText] = useState(defaultText);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className='editor'>
        <p className='editor__header'>Editor</p>
        <textarea
          id="editor"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div className='preview'>
        <p className='preview__header'>Previewer</p>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;