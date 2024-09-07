import { useState } from "react";
import FormControl from "./FormControl";
import Button from "./Button";
import FormTextArea from "./FormTextArea";
import { CVDataType } from "../common";

export default function PersonalForm({data, handleSave}) {
    const [firstName, setFirstName] = useState(data.firstName ? data.firstName : "");
    const [lastName, setLastName] = useState(data.lastName ? data.lastName : "");
    const [contactNumber, setContactNumber] = useState(data.contactNumber ? data.contactNumber : "");
    const [email, setEmail] = useState(data.email ? data.email : "");
    const [summary, setSummary] = useState(data.summary ? data.summary : "");
    function onSubmit(e) {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        
        // Convert it to a plain object and save
        const formJson = Object.fromEntries(formData.entries());
        handleSave(CVDataType.PERSONAL, formJson);
    }
    return (
        <>
        <h3 className="text-xl font-bold text-blue-900">Personal</h3>
        <hr className="my-2"/>
        <form onSubmit={onSubmit}>
            <FormControl 
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <FormControl 
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <FormControl 
                label="Contact Number"
                name="contactNumber"
                value={contactNumber}
                onChange={(event) => setContactNumber(event.target.value)}
            />
            <FormControl 
                label="Email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <FormTextArea
                label="About Me"
                name="summary"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
                helpText="Write a few sentences about yourself."
            />
            <div className="flex justify-end mt-3">
                <Button type="submit" label="Save" primary="true" />
            </div>
        </form>
        </>
    )
}