import './App.css';
import {useState} from "react";
import {useDebounce} from "./useDebounce";

function App() {
    const [count, setCount] = useState(10);

    useDebounce(() => {
        alert(count);
    }, 1000, [count])

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {count}
                </p>

                <button onClick={() => setCount(c => c+1)}>Increment</button>
            </header>
        </div>
    );
}

export default App;
