import "./index.css"
import TopButtons from "./TopButtons";
import SearchNames from "./SearchNames";
import Table from "./Table";
export default function Grades(){
    return(
        <div id="wd-grades">
            <TopButtons/> <br/><br/> <br/>
            <SearchNames/><br/><br/>
            <Table/>
</div>
    ); 
}