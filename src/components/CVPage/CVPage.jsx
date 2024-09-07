import Personal from "./Personal";
import Experience from "./Experience"
import Education from "./Education";

export default function CVPage({ data, editMode, handleAdd, handleUpdate, handleDelete }) {
    return(
        <div className="bg-white rounded m-2 p-4 w-5/6">
            <Personal data={data.personal} editMode={editMode} handleUpdate={handleUpdate} />
            <Education data={data.education} editMode={editMode} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            <Experience data={data.experience} editMode={editMode} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </div>
    )
}