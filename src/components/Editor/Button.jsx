export default function Button({type = "button", primary = false, label, handleClick}) {
    const primaryBtnCss = "rounded-md bg-blue-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800";
    const secondaryBtnCss = "text-sm font-semibold leading-6 text-gray-900"
    return (
        <button
        type={type}
        className={ primary ? primaryBtnCss : secondaryBtnCss }
        onClick={handleClick}
        >
            {label}
        </button>
    )
}