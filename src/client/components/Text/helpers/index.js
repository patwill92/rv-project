export default () => ({
    createClasses: (category, func, style) => {
        return category.reduce((acc, cat) => {
            let myCategory = func(cat) || {};
            return {
                ...acc,
                [cat]: {
                    [style]: myCategory
                }
            }
        }, {});
    },
    fontSize: (size) => {
        switch (size) {
            case 'title':
                return 26;
            case 'subtitle':
                return 18;
            case 'caption':
                return 12;
            default:
                return 15;
        }
    },
    fontWeight: (weight) => {
        switch (weight) {
            case 'extraBold':
                return 800;
            case 'bold':
                return 700;
            case 'medium':
                return 600;
            case 'light':
                return 300;
            default:
                return 400;
        }
    },
    weights: ['extraBold', 'bold', 'medium', 'light', 'regular'],
    sizes: ['title', 'subtitle', 'caption', 'normal'],
    getClassNames: (type, weight, classes, italic, cap, upper) => {
        const typeClass = type ? {type: classes[type]} : null;
        const weightClass = weight ? {weight: classes[weight]} : null;
        const italics = italic ? {italic: classes['italic']} : null;
        const capitalize = cap ? {capitalize: classes['capitalize']} : null;
        const uppercase = upper ? {uppercase: classes['uppercase']}: null;
        return [typeClass, weightClass, italics, capitalize, uppercase]
            .filter(styles => styles)
            .reduce((acc, classes) => {
                return [...acc, ...Object.values(classes)]
            }, [])
    }
});
