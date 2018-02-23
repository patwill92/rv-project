import React from 'react'
import injectSheet from 'react-jss'

import Text from '../../../../../components/Text'

const styles = theme => ({
    root: {
        textAlign: 'center',
        marginBottom: 15,
        color: theme.palette.darkGrey,
    },
    phoneContainer: {
        extend: theme.rowCenter,
        alignItems: 'center',
        padding: '15px 10px'
    },
    image: {
        width: 30,
        height: 30,
        margin: 0,
        marginRight: 10,
        '& img': {
            width: '100%'
        }
    },
    mobileImage: {
        extend: 'image',
        display: 'none'
    },
    mobileCaption: {
        display: 'none',
        color: '#fff',
    },
    '@media (max-width: 575px)': {
        phoneContainer: {
            backgroundColor: theme.palette.primaryLight,
            padding: '5px 5px',
            margin: '20px auto 20px auto',
            extend: theme.rowBetween,
            width: 260
        },
        number: {
            fontSize: 20,
            color: '#fff'
        },
        mobileImage: {
          display: 'block',
          margin: 0
        },
        image: {
            display: 'none'
        },
        mobileCaption:{
            display: 'block'
        }
    }
});

const DealerPhone = props => {
    const {classes, number} = props;
    return (
        <div className={classes.root}>
            <div className={classes.phoneContainer}>
                <figure className={classes.image}>
                    <img src="images/phone-icon-desktop.png" alt="phone-icon"/>
                </figure>
                <figure className={classes.mobileImage}>
                    <img src="images/phone-icon-mobile.png" alt="phone-icon"/>
                </figure>
                <Text className={classes.mobileCaption} component={'figcaption'} type={'caption'}>
                    Tap to call
                </Text>
                <Text className={classes.number} component={'div'} type={'title'} weight={'bold'}>
                    {number.replace(/-/g, '.')}
                </Text>
            </div>
            <Text className={classes.caption} component={'figcaption'} type={'caption'} italic>
                Can't talk now? Click below to send an email.
            </Text>
        </div>
    )
};

export default injectSheet(styles)(DealerPhone)