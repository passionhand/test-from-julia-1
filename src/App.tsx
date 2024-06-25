import './App.css';

const inputs = Object.freeze([
  ['abcabcd'],
  ['ababaa'],
  ['aa'],
])

function commonPrefix(inputs: Array<string>) {
    let results = [];
    
    for (let s of inputs) {
        let n = s.length;
        let sumCommonPrefix = 0;
        
        for (let i = 0; i < n; i++) {
            let j = 0;
            while (i + j < n && s[j] === s[i + j]) {
                j++;
            }
            sumCommonPrefix += j;
        }
        
        results.push(sumCommonPrefix);
    }
    
    return results;
}

function App() {
  return (
    <div className="App">
      <div className='container'>
        {inputs.map((input, index) => {
          const result = commonPrefix(input)
          return (
            <div key={index}>
              <span>{input}</span><br/>
              <span>{result}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
