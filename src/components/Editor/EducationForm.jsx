import { useState } from "react";
import { CVDataType } from "../common";
import FormControl from "./FormControl";
import Button from "./Button";

// {
//     id: "1",
//     school: "Coleman School of Accountancy",
//     from: new Date(2023, 11, 1),
//     to: new Date(2024, 2, 15),
//     course: "BS Accounting & Finance"
//   }
export default function EducationForm({data, handleSave}) {
    const [school, setSchool] = useState(data.school ? data.school : "");
    const [from, setFrom] = useState(data.from ? data.from : "");
    const [to, setTo] = useState(data.to ? data.to : "");
    const [course, setCourse] = useState(data.course ?  data.course : "");

    function onSubmit(e) {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        
        // Convert it to a plain object and save
        const formJson = Object.fromEntries(formData.entries());
        if(data['id']){
            formJson['id'] = data['id'];
        }
        handleSave(CVDataType.EDUCATION, formJson);
    }
    return(
        <>
        <h3 className="text-xl font-bold text-blue-900">Education</h3>
        <hr className="my-2"/>
        <form onSubmit={onSubmit}>
            <FormControl
                label="School"
                name="school"
                value={school}
                onChange={(event) => setSchool(event.target.value)} 
            />
            <FormControl
                type="date"
                label="From"
                name="from"
                value={from}
                onChange={(event) => setFrom(event.target.value)} 
            />
            <FormControl
                type="date"
                label="To"
                name="to"
                value={to}
                onChange={(event) => setTo(event.target.value)} 
            />
            <FormControl
                label="Course"
                name="course"
                value={course}
                onChange={(event) => setCourse(event.target.value)} 
            />
            <div className="flex justify-end mt-3">
                <Button type="submit" label="Save" primary="true" />
            </div>
        </form>
        </>
    )
}