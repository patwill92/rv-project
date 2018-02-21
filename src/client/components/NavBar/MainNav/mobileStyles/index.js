export default theme => ({
    '@media (max-width: 767px)': {
        navHeader: {
            display: 'block',
            extend: 'links',
            margin: 0,
            backgroundColor: '#fff',
            textAlign: 'center',
            textTransform: 'uppercase',
            position: 'relative'
        },
        close: {
            color: theme.palette.secondary,
            position: 'absolute',
            right: 18,
            top: 15,
            transform: 'scale(2.0)'
        },
        menuIcon: {
            display: 'block',
            margin: 0,
            marginLeft: 10,
            cursor: 'pointer'
        },
        nav: {
            position: 'absolute',
            top: 0,
            right: 0,
            extend: theme.colStart,
            width: '100%',
            borderTop: `5px solid ${theme.palette.secondary}`,
            borderBottom: `5px solid ${theme.palette.secondary}`,
            zIndex: 2,
            backgroundColor: '#fff',
            transform: 'translateY(-100%)',
            opacity: 0
        },
        navShow: {
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'transform 0.3s linear, opacity 0.3s linear'
        },
        navHide: {
            transform: 'translateY(-100%)',
            opacity: 0,
            transition: 'transform 0.3s linear, opacity 0.3s linear'
        },
        linksWrapper: {
            justifyContent: 'flex-end'
        },
        figure: {
            maxWidth: 150,
            extend: theme.colCenter
        },
        pro: {
            display: 'none'
        },
        button: {
            padding: '5px 10px'
        },
        root: {
            padding: '8px 0'
        },
        arrow: {
            display: 'inline-block',
            margin: 0,
            height: 15,
            '& img': {
                maxHeight: '100%'
            }
        },
        links: {
            extend: theme.rowBetween,
            alignItems: 'center',
            backgroundColor: theme.palette.lightGrey,
            color: theme.palette.grey,
            padding: '25px 15px',
            marginBottom: 2,
            '&:last-child': {
                marginBottom: 0
            }
        }
    }
})