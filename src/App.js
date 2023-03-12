import './App.css';
import {useArray} from "./useArray";
import {useDebounce} from "./useDebounce";

function App() {
    const [values, {push, update, filter, remove, clear}] = useArray([0, 0, 1,2,3,4,5,6]);

    useDebounce(() => {
        filter(a => a !== 0)
    }, 1000, [values]);

    // useUpdateEffect(() => {
    //     alert(count);
    // }, [count]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    [{values.join(',')}]
                </p>

                <button onClick={() => push(values.length)}>Push</button>

                <button onClick={() => update(3, 777)}>Update</button>

                <button onClick={() => remove(3)}>Remove</button>

                <button onClick={() => clear()}>Clear</button>

            </header>
        </div>
    );
}

export default App;
