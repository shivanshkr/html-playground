export const examples = [
    { name: "Clear Editor", value: ["", "", ""] },
    { name: "HTML Paragraph", value: [`<p>Hello from Paragraph with red color text</p>`, `p{color:red}`, ``] },
    { name: "Bootstrap Buttons", value: [`   
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
    `, ``, ``] },
    { name: "Simple JS function to display time", value: [`
<button type="button" class="btn btn-primary"
onclick="showDate()">
Click me to display Date and Time.</button>
<p id="demo"></p>
    `, `
#demo{
    color:blue
}
    `, `
showDate = () =>{
    document.getElementById('demo').innerHTML = Date()
    }
    `] },
  ]