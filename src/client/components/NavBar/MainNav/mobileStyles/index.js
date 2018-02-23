export default theme => ({
    '@media (max-width: 767px)': {
        container: {
          flexWrap: 'nowrap'
        },
        navHeader: {
            extend: theme.rowCenter,
            alignItems: 'center',
            backgroundColor: '#fff',
            textAlign: 'center',
            textTransform: 'uppercase',
            margin: '0px auto',
            color: theme.palette.primary,
            padding: '28px 0px',
            width: 'calc(100% - 30px)',
            position: 'relative'
        },
        close: {
            color: theme.palette.secondary,
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: '2em'
        },
        menuIcon: {
            display: 'flex',
            margin: 0,
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
            opacity: 0,
            flex: 1,
            padding: 0,
            margin: 0
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
            minWidth: 100,
            extend: theme.colCenter
        },
        pro: {
            display: 'none'
        },
        button: {
            padding: '5px 10px',
            margin: '0 10px'
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
            width: '100%',
            '&:last-child': {
                marginBottom: 0
            }
        }
    }
})