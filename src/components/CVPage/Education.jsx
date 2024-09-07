import { CVDataType, months } from './../common'

export default function Education({ data, editMode, handleUpdate, handleAdd, handleDelete }){
    function onUpdate(id) {
        const item = data.find(i => i['id'] === id);
        handleUpdate(CVDataType.EDUCATION, item)
    }
    return(
        <div className="mt-3">
            <h2 className="text-3xl bold font-bold text-blue-900">Education</h2>
            <hr />
            { data.map((item) => <EducationItem {...item} key={item.id} editMode={editMode} handleUpdate={onUpdate} handleDelete={handleDelete}/>)}
            {editMode && <button className="py-1 px-4 rounded border-2 mt-3" onClick={() => handleAdd(CVDataType.EDUCATION)}> + Add Education</button>}
        </div>
    )
}

function EducationItem({ id, school, from, to, course, editMode, handleUpdate, handleDelete }){
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const fromStr = months[fromDate.getMonth()] + " " + fromDate.getFullYear();
    const toStr = months[toDate.getMonth()] + " " + toDate.getFullYear();
    return(
        <div className="mt-2 relative">
            {editMode && <div className="absolute top-0 right-0">
                <i className="fa-solid fa-pencil ms-2 cursor-pointer" onClick={() => handleUpdate(id)}></i>
                <i className="fa-solid fa-trash ms-2 cursor-pointer" onClick={() => handleDelete(CVDataType.EDUCATION, id)}></i>
            </div>}
            <h3 className="font-bold">{school}</h3>
            <div className="flex justify-between">
                <div>{course.toUpperCase()}</div>
                <div>{fromStr} - {toStr}</div>
            </div>
        </div>
    )
}