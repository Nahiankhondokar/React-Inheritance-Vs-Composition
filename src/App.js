import Text from './components/composition/Text';
import './App.css';
import Emoji from './components/composition/Emoji';
import Bracket from './components/composition/Bracket';
import Student from './components/renderHOC/Student';
import Render from './components/renderHOC/Render';
import User from './components/renderHOC/User';


function App() {
  return (
    <>

    {/* <Emoji>
      {
        ({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} /> }
          </Bracket>
        )
      }
    </Emoji>  */}


    <Render>
      {
        (count, incrementCount) => (<Student count={ count } incrementCount={ incrementCount } />)
      }
    </Render>
    
    <Render>
      {
        (count, incrementCount) => <User count={ count } incrementCount={ incrementCount } /> 
      }
    </Render>





    </>
  );
}

export default App;
