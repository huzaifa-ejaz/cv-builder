import './Toolbar.css'

export default function Toolbar({ handleEditToggle }) {
    return (
        <div className="flex justify-end bg-white p-2">
            <button className="border-2 rounded px-4 py-1" onClick={handleEditToggle}><i className="fa-solid fa-pen-to-square"></i> Toggle Edit</button>
        </div>
    )
}