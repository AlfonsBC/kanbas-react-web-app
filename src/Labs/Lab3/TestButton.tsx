export default function TestButton(){
    const handleClick = (parameter = "Hola") => {
        console.log(parameter)
      }
    return(
        <div>
<button onClick={() => handleClick("Hello")}>Hello 1</button>

<button onClick={() => handleClick("Hello")}>Hello 2</button>

<button onClick={() => handleClick("Hola")}>  Hello 3</button>
</div>
    );
}