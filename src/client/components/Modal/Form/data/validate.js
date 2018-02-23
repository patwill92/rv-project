const validate = (values, submit) => {
    const errors = {};
    if (values.name.touched || submit) {
        if (!values.name.value) {
            errors.name = 'Your name is required'
        }
    }
    if (values.email.touched || submit) {
        if (!values.email.value) {
            errors.email = 'Your email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.value)) {
            errors.email = 'Invalid email address'
        }
    }
    if (values.phone.touched || submit) {
        if (!values.phone.value) {
            errors.phone = 'Your phone number is required'
        } else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(values.phone.value)) {
            errors.phone = 'Invalid phone number'
        }
    }
    return errors;
};

export default validate;