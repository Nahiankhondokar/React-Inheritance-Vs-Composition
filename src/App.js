import Text from './components/composition/Text';
import './App.css';
import Emoji from './components/composition/Emoji';


function App() {
  return (
    <>
    
    <Emoji>
      {
        ({ addEmoji }) => <Text addEmoji={addEmoji} />
      }
    </Emoji>

    </>
  );
}

export default App;
