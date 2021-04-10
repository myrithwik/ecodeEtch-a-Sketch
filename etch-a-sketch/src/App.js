import logo from './logo.svg';
import './App.css';

const GridLayout = (props) => (
  <div id="mainContent" className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
    {this.props.articles.map((article) => (
      <div>
        <ArticleCard articleDetails={article}/>
      </div>
    ))}
  </div>
)

function App() {
  return (
    <div>HI</div>
    );
}

// function makeRows(rows, cols) {
//   containe.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

export default App;
