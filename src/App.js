import './App.css';
import {useState} from "react";
import {useUpdateEffect} from "./useUpdateEffect";

function App() {
    const [count, setCount] = useState(10);

    // useDebounce(() => {
    //     alert(count);
    // }, 1000, [count])

    useUpdateEffect(() => {
        alert(count);
    }, [count])

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
