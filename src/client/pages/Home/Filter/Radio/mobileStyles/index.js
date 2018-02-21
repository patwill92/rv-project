export default theme => ({
    '@media (max-width: 767px)': {
        root: {
            margin: 0,
            width: '100%',
            extend: theme.rowStart,
            alignItems: 'center',
            padding: 10
        }
    }
})