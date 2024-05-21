import { FaFileExport } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaFileImport } from "react-icons/fa6";


export default function TopButtons(){
    return(
        <div className="float-end">
            <button className="btn btn-secondary float-end ps-3 fs-4"><IoMdSettings className="fs-2 me-1"/></button>
            <button className="btn btn-secondary float-end me-3 fs-4"><FaFileExport className="me-2 mb-1"/>Export</button>
            <button className="btn btn-secondary float-end me-3 fs-4"> <FaFileImport className="me-2 mb-1"/>
Import</button>

        </div>
    );
}