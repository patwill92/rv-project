import React from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import validate from './data/validate'
import fieldInfo from './data/fieldInfo'
import FormField from './FormField'
import Text from '../../../components/Text'
import {sendForm} from "../../../../redux/actions"

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
            background: 'transparent',
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

class ContactForm extends React.Component {
    state = {
        ownPool: false,
        reply: '',
        name: {
            value: '',
            touched: false,
            blur: false,
            errors: false
        },
        email: {
            value: '',
            touched: false,
            blur: false,
            errors: false
        },
        comments: '',
        phone: {
            value: '',
            touched: false,
            blur: false,
            errors: false
        }
    };

    onTouch = (name) => {
        this.setState({[name]: {...this.state[name], touched: true}})
    };

    onChange = (e) => {
        const {name, value} = e.target;
        if (this.state[name].blur) {
            this.setState({[name]: {...this.state[name], value}}, () => {
                this.setState({[name]: {...this.state[name], errors: validate(this.state)}})
            })
        } else {
            this.setState({[name]: {...this.state[name], touched: true, value}})
        }
    };

    onBlur = (e) => {
        const {name} = e.target;
        this.setState({[name]: {...this.state[name], blur: true, errors: validate(this.state)}})
    };

    flipSwitch = () => {
        this.setState({ownPool: !this.state.ownPool})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate(this.state, true);
        let errorList = Object.values(errors);
        if (errorList.length > 0) {
            let state = Object.entries(this.state).reduce((acc, val) => {
                if (typeof val[1] === 'object') {
                    return {
                        ...acc,
                        [val[0]]: {
                            ...this.state[val[0]],
                            errors,
                            blur: true,
                            touched: true
                        }
                    }
                } else {

                    return {...this.state, ...acc};
                }
            }, {});
            return this.setState(state)
        }
        this.props.sendForm({...this.state, poolOwner: this.state.ownPool})
    };

    render() {
        const {props} = this;
        const {classes, reply} = props;
        return (
            <div>
                {!reply &&
                <form onSubmit={this.handleSubmit} className={classes.root}>
                    {fieldInfo.map((field, i) => {
                        return (
                            <FormField {...field}
                                       value={this.state[field.name]}
                                       onChange={this.onChange}
                                       onBlur={this.onBlur}
                                       ownPool={this.state.ownPool}
                                       onTouch={this.onTouch}
                                       onClick={this.flipSwitch}
                                       last={i === fieldInfo.length - 1}
                                       key={i}/>
                        )
                    })}
                    <button type={'submit'} className={classes.button}>
                        <Text className={classes.textBtn} component={'div'} weight={'medium'}>
                            Send <span className={classes.mobileSend} style={{marginLeft: 2}}>my email</span>
                            <img src="images/next-arrow.png" alt=""/>
                        </Text>
                    </button>
                </form>}
                {reply &&
                <div className={classes.reply} >
                    <Text className={classes.replyText} component={'div'} type={'subtitle'}>
                        {reply}
                    </Text>
                    <button onClick={props.closeModal} className={classes.button}>
                        <Text className={classes.textBtn} component={'div'} weight={'medium'}>
                            CLOSE
                        </Text>
                    </button>
                </div>}
            </div>
        )
    };
}


export default connect(null, {sendForm})(injectSheet(styles)(ContactForm))