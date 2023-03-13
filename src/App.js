import './App.css';
import {useWindowScroll} from "./useWindowScroll";

function App() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div style={{height: '2000px', width: '3000px'}}>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
    );
}

export default App;
