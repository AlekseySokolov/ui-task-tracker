import React from 'react';


const FormButtons = (props) => {
    const {pristine, submitting, reset} = props
    return (
        <div className='buttonContainer'>
            <button
                className={pristine === true ? 'btn-submit disabled' : 'btn-submit'}
                type="submit" label="submit"
                disabled={pristine || submitting }>
                Submit
            </button>
            <button
                className={pristine === true ? 'btn-submit disabled' : 'btn-submit'}
                type="button" label="submit"
                disabled={pristine || submitting} onClick={reset}>
                Clear
            </button>
        </div>
    )
}

export default FormButtons;