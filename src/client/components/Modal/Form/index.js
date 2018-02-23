import React from 'react'
import {Field, reduxForm} from 'redux-form'
import injectSheet from 'react-jss'

import validate from './data/validate'
import fieldInfo from './data/fieldInfo'
import FormField from './FormField'
import Text from '../../../components/Text'

const styles = theme => ({
    root: {
        background: theme.palette.lightGrey,
        padding: [20, 15, 0, 15],
        width: '100%'
    },
    button: {
        width: '100%',
        border: 'none',
        '&:focus': {
            outline: 0
        },
        '&:active': {
            outline: 0
        },
        padding: '25px 0',
        background: 'rgba(0,0,0,0)',
        cursor: 'pointer'
    },
    textBtn: {
        color: theme.palette.darkGrey,
        '& img': {
            height: 15,
            width: 15,
            position: 'relative',
            marginLeft: 5
        },
        extend: theme.rowCenter,
        alignItems: 'center',
        fontSize: 15
    },
    reply: {
        backgroundColor: theme.palette.lightGrey,
        padding: [15, 15, 0, 15],
        extend: theme.colBetween
    },
    replyText: {
        color: theme.palette.primary,
        textAlign: 'center',
        marginTop: 30
    },
    '@media (max-width: 575px)': {
        root: {
            background: '#fff',
            '& img': {
                display: 'none'
            }
        },
        mobileSend: {
            display: 'none'
        },
        textBtn: {
            display: 'block',
            textAlign: 'right',
            color: theme.palette.secondary
        }
    },

});

let ContactForm = props => {
    const {classes, reply} = props;
    const replyStyle = {
        height: this.reply && this.reply.clientHeight,
        width: this.reply && this.reply.clientWidth
    };
    return (
        <div>
            {!reply &&
            <form ref={reply => this.reply = reply} onSubmit={props.handleSubmit} className={classes.root}>
                {fieldInfo.map((field, i) => {
                    return (
                        <Field {...field}
                               ownPool={props.ownPool}
                               onClick={props.flipSwitch}
                               last={i === fieldInfo.length - 1}
                               key={i}
                               component={FormField}/>
                    )
                })}
                <button type={'submit'} className={classes.button} onClick={() => console.log(props)}>
                    <Text className={classes.textBtn} component={'div'} weight={'medium'}>
                        Send <span className={classes.mobileSend} style={{marginLeft: 2}}>my email</span>
                        <img src="images/next-arrow.png" alt=""/>
                    </Text>
                </button>
            </form>}
            {reply &&
            <div className={classes.reply} style={replyStyle}>
                <Text className={classes.replyText} component={'div'} type={'subtitle'}>
                    {reply}
                </Text>
                <button onClick={props.closeModal} className={classes.button}>
                    <Text className={classes.textBtn} component={'div'} weight={'medium'}>
                        BACK
                    </Text>
                </button>
            </div>}
        </div>
    )
};

ContactForm = reduxForm({
    form: 'contact',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(injectSheet(styles)(ContactForm));

export default ContactForm