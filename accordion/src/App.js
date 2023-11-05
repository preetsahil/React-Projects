import Accordion from './Accordion'
import './App.css'
function App() {
  const accordionData=[
    {
      title:'What is an API Request or Call?',
      content:'API Call/Request is a request made to our API server through HTTP/S to get data.'
    },
    {
      title:'What is your weather data source?',
      content:'We get our weather data from thousands of global private and public weather stations and weather data providers in the world.'
    },
    {
      title:'How often is data updated?',
      content:'Realtime weather is updated every 10-15 minute. Whereas forecast weather data is updated every 4-6 hours in a day.'    
    }
  ]
  return (
    <div style={{ width:'100%'}}>
      <h1 style={{textAlign:'center'}}>Frequently Asked Questions</h1>
      <div className='accordion'>
      {accordionData.map(({title,content})=>(
        <Accordion title={title} content={content}/>
    ))}
      </div>
    </div>
  );
}

export default App;
