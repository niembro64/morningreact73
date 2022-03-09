import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Counter from './components/Counter'

function App() {
    return (
        <>
            <h1><marquee behavior="" direction="">it's mee</marquee></h1>

            <Counter text="number 1"/>
            <Counter text="number 2"/>
            <Counter text="number 3"/>
        </>
    );
}

export default App;
