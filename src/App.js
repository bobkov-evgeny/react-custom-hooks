import './App.css';
import {useThrottle} from "./useThrottle";
import {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const throttleValue = useThrottle(value);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {throttleValue}
                </p>

                <input value={value} onChange={(e) => setValue(e.target.value)} />

            </header>
        </div>
    );
}

export default App;
