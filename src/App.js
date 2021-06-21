import './App.css';
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

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

  runJS = () => {
    const { html, js, css } = this.state
    this.setState({
      final: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>HTML</title>
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
  }

  handleChange1 = (field, value) => {
    this.setState({
      [field]: value
    }, () => {
      const { html, css } = this.state
      this.setState({
        final: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>HTML</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script type="text/javascript">

          </script>
        </body>
        </html>
      `
      })
    })
  }

  render() {
    return (
      <>
        <div className="h4 pt-2 text-success text-center">Welcome to the HTML, CSS and JS Editor. We provide inbuilt Bootstrap 5 support. </div>
        <div className="row mb-5">
          <div className="col-sm-6 col-md-4">
            <span className="">HTML</span>
            <CodeMirror
              value={this.state.html}
              options={{
                mode: 'htmlmixed',
                theme: 'material',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, html) => {
                this.setState({ html });
              }}
              onChange={(editor, data, html) => {
                this.handleChange1("html", html)
              }}
            />
          </div>
          <div className="col-sm-6 col-md-4">
            <span className="">CSS</span>
            <CodeMirror
              value={this.state.css}
              options={{
                mode: 'css',
                theme: 'material',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, css) => {
                this.setState({ css });
              }}
              onChange={(editor, data, css) => {
                this.handleChange1("css", css)
              }}
            />
            {/* </form> */}
          </div>
          <div className="col-sm-6 col-md-4" style={{ position: "relative" }}>
            <span className="">JS</span>
            <CodeMirror
              value={this.state.js}
              options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js });
              }}
              onChange={(editor, data, js) => {
                this.setState({ js });
              }}
            />
            <button className="btn btn-success btn-floating" style={{ position: "relative", top: "-15%", left: "80%", borderRadius: "10%" }} type="button" onClick={this.runJS}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
              </svg></button>
          </div>
          <div className="col-sm-6 col-md-12">
            <span className="">Output</span>
            <div className="col-12 h-90">
              <iframe title="result" className="bg-light h-90 col-12" srcDoc={this.state.final}></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
