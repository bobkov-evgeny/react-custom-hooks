import './App.css';
import {useState} from "react";
import {useTimeout} from "./useTimeout";

function App() {
    const [count, setCount] = useState(10);

    const {set, clear} = useTimeout(() => {
        setCount(0);
    }, 1000);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {count}
                </p>

                <button onClick={() => setCount(c => c+1)}>Increment</button>
                <button onClick={clear}>Stop timeout</button>
                <button onClick={set}>Stop timeout</button>
            </header>
        </div>
    );
}

export default App;
