import './App.css';
import CardGrid from './components/CardGrid';
import Hand from './components/Hand';

function App() {
    return (
        <div id="play-area">
            <CardGrid />
            <Hand player="self" />
        </div>
    );
}

export default App;
