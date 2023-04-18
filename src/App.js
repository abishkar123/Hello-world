
import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="App">
 <TypeAnimation
                className='fs-1 fw-bolder mb-2 home__title-color'
                sequence={[
                  'Hello', 1000, 'world', 2000, 'Hello world', ()=>{
                    console.log('Abishkar rai')
                  }
                ]}
                wrapper="dev"
            cursor={true}
            repeat={Infinity}
             style={{ fontSize: '3em' }}
                />
   
    </div>
  );
}

export default App;
