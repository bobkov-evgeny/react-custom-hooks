import './App.css';
import {useToggleAdvanced} from "./useToggleAdvanced";

function App() {
    const [value, toggle] = useToggleAdvanced(['blue', 'orange', 'cyan', 'teal']);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100px'}}>
            <button onClick={() => toggle()} style={{color: value}}>
                {value}
            </button>

            <button onClick={() => toggle('blue')}>
                select blue
            </button>

            <button onClick={() => toggle('cyan')}>
                select cyan
            </button>

            <button onClick={() => toggle('orange')}>
                select orange
            </button>

            <button onClick={() => toggle('teal')}>
                select teal
            </button>
        </div>
    );
}

export default App;
