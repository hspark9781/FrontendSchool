import { useState } from "react";

function useInput(initState) {
    const [value, setValue] = useState(initState);

    function onChange(event) {
        setValue(event.target.value);
    }

    return [value, onChange];
}

export default useInput;