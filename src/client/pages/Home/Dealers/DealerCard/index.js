import React, {Fragment} from 'react'
import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import Text from '../../../../components/Text'
import Button from '../../../../components/Button'
import Phone from './DealerPhone'
import serviceType from './data'
import {openModal} from "../../../../../redux/actions";

const styles = theme => ({
    root: {
        flexBasis: '32.5%',
        borderRadius: 10,
        boxShadow: theme.shadows[3],
        marginBottom: 20
    },
    header: {
        textAlign: 'center',
        margin: '0 15px',
        borderBottom: '1px solid #ebebeb',
        minHeight: 100,
        extend: theme.rowCenter,
        alignItems: 'center',
        color: theme.palette.darkGrey
    },
    main: {
        textAlign: 'center'
    },
    btn: {
        padding: 10
    },
    hours: {
        textAlign: 'center',
        textTransform: 'capitalize',
        padding: '20px 0'
    },
    footer: {
        backgroundColor: theme.palette.lightGrey,
        color: theme.palette.grey,
        extend: theme.rowBetween,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: [20, '10%'],
        height: 95
    },
    service: {
        textTransform: 'capitalize',
        '& img': {
            maxWidth: 12,
            marginRight: 12
        },
        extend: theme.rowStart,
        alignItems: 'center'
    },
    serviceWrapper: {
        flexBasis: '50%',
        extend: theme.colBetween
    },
    '@media (max-width: 991px)': {
        root: {
            flexBasis: '49.5%'
        }
    },
    '@media (max-width: 767px)': {
        root: {
            flexBasis: '100%'
        }
    }
});

const DealerCard = props => {
    const {classes, dealer: {name, phone1, weekHours, certifications}} = props;
    const hours = Object.entries(weekHours).reduce((acc, day) => {
        const weekend = 'satsun'.includes(day[0]);
        if (weekend)
            return {...acc, ['saturday'.includes(day[0]) ? 'saturday' : 'sunday']: day[1]};
        return !acc.weekdays ? {...acc, weekdays: day[1]} : acc
    }, {});
    const services = certifications.map(service => {
        const type = service.split(' ')[0].toLowerCase();
        return {type, image: serviceType[type]}
    });
    return (
        <article className={classes.root}>
            <Text type={'title'} className={classes.header} weight={'light'} component={'header'}>{name}</Text>
            <section className={classes.main}>
                <Phone number={phone1}/>
                <Button className={classes.btn}
                        onClick={() => props.openModal({name})}
                        text={'Contact this Pro'}
                        icon={'mail'}/>
            </section>
            <section className={classes.hours}>
                <Text component={'div'} weight={'medium'} type={'caption'}>Business Hours</Text>
                {Object.entries(hours).map(day => {
                    const time = day[1] ? day[1] : 'closed';
                    return (
                        <Text key={day[0]} component={'div'} type={'caption'}>{day[0] + ' ' + time}</Text>
                    )
                })}
            </section>
            <footer className={classes.footer}>
                {services.reduce((acc, service, i, arr) => {
                    const element = (
                        <Text key={service.type + i} className={classes.service} type={'caption'} component={'div'}>
                            <img src={`images/${service.image}.png`} alt="service-type"/>
                            {service.type}
                        </Text>
                    );
                    if (i === arr.length - 1) {
                        let elements = [...acc, element];
                        return (
                            <Fragment>
                                <div className={classes.serviceWrapper}>{[...elements.slice(arr.length/2, arr.length)]}</div>
                                <div className={classes.serviceWrapper}>{[...elements.slice(0, arr.length / 2)]}</div>
                            </Fragment>
                        )
                    } else {
                        return [...acc, element]
                    }
                }, [])}
            </footer>
        </article>
    )
};

export default connect(null, {openModal})(injectSheet(styles)(DealerCard))