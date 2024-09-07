import { useState } from "react";
import { CVDataType } from "../common";
import FormControl from "./FormControl";
import Button from "./Button";
import FormTextArea from "./FormTextArea";

export default function ExperienceForm({data, handleSave}){
    const [company, setCompany] = useState(data.company ? data.company : "");
    const [jobTitle, setJobTitle] = useState(data.jobTitle ? data.jobTitle : "");
    const [from, setFrom] = useState(data.from ? data.from : "");
    const [to, setTo] = useState(data.to ? data.to : "");
    const [description, setDescription] = useState(data.description ? data.description.join("\n") : "");

    function onSubmit(e) {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        
        // Convert it to a plain object and save
        const formJson = Object.fromEntries(formData.entries());
        formJson['description'] = formJson['description'].split("\n");
        if(data['id']){
            formJson['id'] = data['id'];
        }
        handleSave(CVDataType.EXPERIENCE, formJson);
    }

    return (
        <>
            <h3 className="text-xl font-bold text-blue-900">Education</h3>
            <hr className="my-2"/>
            <form onSubmit={onSubmit}>
                <FormControl
                    label="Company"
                    name="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)} 
                />
                <FormControl
                    label="Job Title"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)} 
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
                <FormTextArea
                    label="Description"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    helpText="Describe your experience. Press Enter to add a new bullet point."
                />
                <div className="flex justify-end mt-3">
                    <Button type="submit" label="Save" primary="true" />
                </div>
            </form>
        </>
    )
}