export default function ToggleButton({isVisible, handleToggle}) {
    return (
        <button type="button" onClick={handleToggle}>
            {isVisible ? "Edit" : "Submit"}
        </button>
    );
}