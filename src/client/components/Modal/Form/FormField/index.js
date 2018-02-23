import React, {Fragment} from 'react'
import injectSheet from 'react-jss'

import Text from '../../../../components/Text'
import Icon from '../../../../components/Icon'

const styles = theme => ({
    label: {
        extend: theme.colStart,
        color: theme.palette.grey,
        paddingBottom: 12,
        width: props => props.type === 'tel' ? '40%' : '100%',
        minWidth: props => props.type === 'tel' && 170,
        '& span': {
            paddingBottom: 5,
            position: 'relative',
            '& img': {
                position: 'absolute',
                right: 0,
                height: 20,
                width: 20
            }
        }
    },
    circle: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: 20,
        width: 20,
        fontSize: 20,
        '& path': {
            fill: 'rgba(255, 7, 22, 0.55)'
        }
    },
    normal: {
        width: '100%',
        padding: [8, 10],
        border: '1px solid #d7d7d7',
        '&:focus': {
            outlineColor: theme.palette.secondary,
            outlineWidth: '1.5px'
        },
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 14
    },
    textArea: {
        padding: [8, 10],
        width: '100%',
        border: '1px solid #d7d7d7',
        '&:focus': {
            outlineColor: theme.palette.secondary,
            outlineWidth: '1.5px'
        },
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 14
    },
    outsideBox: {
        height: 23,
        width: 50,
        alignItems: 'stretch',
        position: 'relative',
        extend: theme.rowBetween,
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#fff',
        border: 'none',
    },
    ownPool: {
        border: '1px solid #d7d7d7',
        borderRight: 'none',
        color: props => props.ownPool ? '#fff' : 'rgba(0,0,0, 0.0)',
        transition: props => props.ownPool ? 'opacity 0.3s linear' : 'opacity 0.1s linear',
        backgroundColor: props => props.ownPool ? '#41af68' : 'rgba(255, 7, 22, 0.8)',
        extend: theme.colCenter,
        flex: 1,
        textAlign: 'right',
        borderRadius: '50% 0 0 50%',
        fontSize: 11,
        position: 'relative',
        paddingLeft: 3
    },
    ownPoolNo: {
        border: '1px solid #d7d7d7',
        borderLeft: 'none',
        color: props => props.ownPool ? 'rgba(0,0,0, 0.0)' : '#fff',
        transition: props => !props.ownPool ? 'opacity 0.3s linear' : 'opacity 0.1s linear',
        backgroundColor: props => props.ownPool ? '#41af68' : 'rgba(255, 7, 22, 0.8)',
        extend: theme.colCenter,
        flex: 1,
        textAlign: 'center',
        borderRadius: '0 50% 50% 0',
        fontSize: 11,
        paddingRight: 3
    },
    insideBox: {
        minHeight: 21,
        width: 21,
        backgroundColor: '#fafafa',
        boxShadow: `0px 0px 2px 1px rgba(71,71,71,0.3)`,
        position: 'absolute',
        top: 1,
        left: 1,
        cursor: 'pointer',
        transform: props => props.ownPool ? 'translateX(28px)' : 'translateX(0)',
        transition: 'transform 0.5s ease',
        borderRadius: '50%'
    }
});

const FormField = props => {
    const {classes, last, onClick, input, type, onChange, value: {value, errors, touched, blur}, name} = props;
    let error = errors && errors.hasOwnProperty(name) && blur;
    return (
        <div className={classes.root}>
            <label className={classes.label} htmlFor={props.name}>
                <Text className={classes.labelText} component={'span'} weight={'medium'}>
                    {props.label}
                    {(type && touched && !error && blur) && <img src="images/checkmark-circle.png" alt="validation"/>}
                    {(type && touched && error) && <div className={classes.circle}><Icon name={'timesCircle'}/></div>}
                    {(type && !touched || type && touched && !blur) &&
                    <img src="images/circle-form.png" alt="validation"/>}
                </Text>
                {props.type ?
                    <input className={classes.normal}
                           value={value}
                           onChange={onChange}
                           onBlur={props.onBlur}
                           onClick={() => props.onTouch(name)}
                           type={type}
                           name={name}/> :
                    <textarea value={value} onChange={onChange} className={classes.textArea} name={name} cols="30"
                              rows="5"/>}
            </label>
            {last &&
            <Fragment>
                <Text className={classes.label} component={'label'} weight={'medium'}>
                    Do you currently own a pool or spa?
                </Text>
                <div className={classes.outsideBox}>
                    <Text className={classes.ownPool} type={'caption'} weight={'medium'}
                          component={'div'}>YES</Text>
                    <Text className={classes.ownPoolNo} type={'caption'} weight={'medium'}
                          component={'div'}>NO</Text>
                    <div onClick={onClick} className={classes.insideBox}/>
                </div>
                <div style={{width: '100%', height: 1, backgroundColor: '#eaeaea', marginTop: 20}}/>
            </Fragment>
            }
        </div>
    )
};

export default injectSheet(styles)(FormField)