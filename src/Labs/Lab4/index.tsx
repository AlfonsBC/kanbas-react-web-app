import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctionsAsParameters from "./PassingFunctionsAsParameters";
import EventObject from "./EventObject";
import IntegerCounter from "./IntegerCounter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";
export default function Lab4() {
    function sayHola() {
        alert("Hola");
    }
    return (
<div id="wd-lab4" className="container-fluid">
<h3>Lab 4</h3>
<ClickEvent/>
<PassingDataOnEvent/>
<PassingFunctionsAsParameters theFunction={sayHola}/>
<EventObject/>
<IntegerCounter/>
<BooleanStateVariables/>
<StringStateVariables/>
<DateStateVariable/>
<ObjectStateVariable/>
<ArrayStateVariable/>
<ParentStateComponent/>
<ReduxExamples/>
</div>
    );
  }