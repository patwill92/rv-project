export default theme => ({
    '@media (max-width: 767px)': {
        root: {
            extend: theme.colStart,
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 10,
            overflow: 'hidden'
        },
        filterContainer: {
            extend: theme.colStart,
            alignContent: 'center',
            position: 'relative',
            alignSelf: 'flex-start',
            width: '100%',
            background: '#fff',
            border: '1px solid #d7d7d7',
            bottom: 1,
            display: props => props.home.dropDown ? 'flex' : 'none'
        },
        subContainer: {
            width: '100%'
        },
        toolTip: {
            position: 'absolute',
            bottom: 10,
            left: '100%',
            margin: 0
        },
        separator: {
            display: 'none'
        },
        title: {
            padding: '10px 10px'
        },
        filter: {
            backgroundColor: '#fff',
            border: '1px solid #d7d7d7',
            extend: theme.rowStart,
            alignItems: 'center',
        },
        filterText: {
            padding: '0 10px'
        },
        dropdown: {
            height: 40,
            width: 40,
            background: '#fff',
            borderLeft: '1px solid #d7d7d7',
            extend: theme.colCenter,
            cursor: 'pointer',
            '& path': {
                fill: theme.palette.darkGrey
            }
        }
    },
    '@media (max-width: 575px)': {
        root: {
            borderRadius: 0
        }
    }
})