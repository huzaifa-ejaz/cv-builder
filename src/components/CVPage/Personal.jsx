import { CVDataType } from "../common"

export default function Personal ({ data, editMode, handleUpdate }){
    return (
        <>
            <div className="flex flex-col items-center relative">
                {editMode && <div className="absolute top-0 right-0 absolute">
                    <i className="fa-solid fa-pencil ms-2 cursor-pointer" onClick={() => handleUpdate(CVDataType.PERSONAL, data)}></i>
                </div>}
                <h1 className="text-4xl">{data.firstName + " " + data.lastName}</h1>
                <p><i className="fa-solid fa-mobile-screen-button"></i> {data.contactNumber}  |  <i className="fa-regular fa-envelope"></i> {data.email}</p>
            </div>
            <div className="mt-3">
                <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
                <hr className="mb-2" />
                <p>{data.summary}</p>
            </div>
        </>
    )
}