const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'Your name is required'
    }
    if(!values.email) {
        errors.email = 'Your email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.phone) {
        errors.phone = 'Your phone number is required'
    } else if(!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(values.phone)) {
        errors.phone = 'Invalid phone number'
    }
    return errors;
};

export default validate;