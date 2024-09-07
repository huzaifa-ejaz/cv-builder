import { CVDataType } from "../common";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

export default function Editor({dataType, data = null, handleClose, handleSave}){
    //each form takes data as input, if data is there, shows it in the form, else shows default form
    //on save click, it calls a function `handleSave` given to it by the parent.
    return (
        <>
        <div className="p-3">
            <div className="flex justify-end">
                <i className="fa-solid fa-times cursor-pointer" onClick={handleClose}></i>
            </div>
            {dataType === CVDataType.PERSONAL && <PersonalForm data={data} handleSave={handleSave} />}
            {dataType === CVDataType.EDUCATION && <EducationForm data={data} handleSave={handleSave} />}
            {dataType === CVDataType.EXPERIENCE && <ExperienceForm data={data} handleSave={handleSave} />}
        </div>
        </>
    )
}