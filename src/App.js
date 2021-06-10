import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      html: "",
      css: "",
      js: "",
      final: "",
    }
  }

  handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value
    }, () => {
      const { html, js, css } = this.state
      this.setState({
        final: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
  
          <script type="text/javascript">
            ${js}
          </script>
        </body>
        </html>
      `
      })
    })
  }
  // componentDidUpdate() {
  //   this.runCode();
  // }
  // runCode = () => {
  //   const { html, css, js } = this.state;

  //   const iframe = this.refs.iframe;
  //   const document = iframe.contentDocument;
  //   const documentContents = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //       <title>Document</title>
  //       <style>
  //         ${css}
  //       </style>
  //     </head>
  //     <body>
  //       ${html}

  //       <script type="text/javascript">
  //         ${js}
  //       </script>
  //     </body>
  //     </html>
  //   `;
  //   document.open();
  //   document.write(documentContents);
  //   document.close();
  // };

  render() {
    return (
      <>
        <div className="row half-height">
          <div className="col-4 h-100">
            <span className="h-10">HTML</span>
            <form className="h-90 d-grid">
              <textarea type="text" name="html" onChange={this.handleChange} />
            </form>
          </div>
          <div className="col-4 h-100">
            <span className="h-10">CSS</span>
            <form className="h-90 d-grid">
              <textarea type="text" name="css" onChange={this.handleChange} />
            </form>
          </div>
          <div className="col-4 h-100">
            <span className="h-10">JS</span>
            <form className="h-90 d-grid">
              <textarea type="text" name="js" onChange={this.handleChange} />
            </form>
          </div>
        </div>

        <div className="row half-height ">
          <span className="h-10">Result</span>
          <div className="col-12 h-85">
            <iframe title="result" className="h-100 col-12 bg-light" srcdoc={this.state.final}></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default App;
