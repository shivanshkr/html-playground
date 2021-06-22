import './App.css';
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { examples } from "./Example";

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
      examples: examples
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
        <div class="m-2">
          ${html}
          </div>
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
        <div class="m-2">
        ${html}
          </div>
          <script type="text/javascript">

          </script>
        </body>
        </html>
      `
      })
    })
  }
  onSelectHandle = (event) => {
    let value = event.target.value
    value = value.split(',')
    this.setState({
      html: value[0],
      css: value[1],
      js: value[2]
    })
  }

  render() {
    let exampleOptions = this.state.examples.map(
      (obj) => {
        return <option value={obj.value} key={obj.value}>{`${obj.name}`}</option>
      }
    )

    return (
      <>
        <div className="row p-2" >
          {/* Button to show/hide offcanvas */}
          <button className=" btn btn-warning col-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <span className="col-11 h4 text-success text-center" >Welcome to the HTML, CSS and JS Editor. We provide inbuilt Bootstrap 5 support.</span>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">Select an example</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Choose any of the option and check the output
            </div>
            <div className="dropdown mt-3">
              <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.onSelectHandle} >
                {exampleOptions}
              </select>
            </div>
            <div style={{textAlign:"right"}}>
              <button className="btn btn-warning m-5" data-bs-dismiss="offcanvas">Back</button>
            </div>
          </div>
          <div className="offcanvas-footer">
            <div className="text-center text-primary p-2">Click on play button to run JS</div>
          </div>
        </div>
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
