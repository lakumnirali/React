
import React, { useId } from 'react';
function PasswordField() {
    const passwordHintId = useId();
    return (
        <>
            <label>
                Password:
                <input
                    type="password"
                    aria-describedby={passwordHintId}
                />
            </label>
            <p id={passwordHintId}>
                The password should contain at least 18 characters
            </p>
        </>
    );
}

const UseIdeexample = () => {
    return (
        <>
            <h2>Choose password</h2>
            <PasswordField />
            <h2>Confirm password</h2>
            <PasswordField />
            <p>useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.</p>
        </>
    );
};

export default UseIdeexample;