import './App.css';

function App() {

  function charConcat(str) {
    var i=1;
    var res='';
    while(str.length>1){
      res+=str[0]+str[str.length-1]+i;
      i++;
      str=str.slice(1,-1)
    }
    return res;
  }

  return (
    <div className="App">
      <p>ConcatCharacters</p>
      {charConcat('hon!dar')}
    </div>
  );
}

export default App;
