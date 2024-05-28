export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
    setCounter: (counter: number) => void;}) {
    return (
    <div id="wd-child-state">
    <h4>From child - Counter {counter}</h4>
    <button onClick={() => setCounter(counter + 1)} className="btn btn-success me-2" id="wd-increment-child-state-click">
    Increment</button>
    <button onClick={() => setCounter(counter - 1)} className="btn btn-danger" id="wd-decrement-child-state-click">
    Decrement</button>
    <hr/>
    </div>
    );
    }