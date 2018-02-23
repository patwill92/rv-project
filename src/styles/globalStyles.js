const flex = (justifyContent, flexDirection) => ({
    display: 'flex',
    justifyContent,
    flexDirection
});

export default {
    flex: {
        display: 'flex'
    },
    blue: {
      backgroundColor: 'blue'
    },
    colCenter: {
        ...flex('center', 'column ')
    },
    colBetween: {
        ...flex('space-between', 'column')
    },
    colAround: {
        ...flex('space-around', 'column')
    },
    colEven: {
        ...flex('space-evenly', 'column')
    },
    colStart: {
        ...flex('flex-start', 'column')
    },
    colEnd: {
        ...flex('flex-end', 'column')
    },
    rowCenter: {
        ...flex('center')
    },
    rowBetween: {
        ...flex('space-between')
    },
    rowAround: {
        ...flex('space-around')
    },
    rowEven: {
        ...flex('space-evenly')
    },
    rowStart: {
        ...flex('flex-start')
    },
    rowEnd: {
        ...flex('flex-end')
    }
}