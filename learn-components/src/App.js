import Title from './components/Title'
import Subtitle from './components/Subtitle'

function App() {
    const myStyle={
    width:'80%',
    marginInline:'auto',
    marginBlock:'50px',
    }
  return (
    <div style={myStyle}>
    <Title/>
    <Subtitle/>
    </div>
   );
  }
export default App;
