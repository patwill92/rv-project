export default () => ({
    queryDealers: (query, dealers) => {
        if (query.length === 0) return {list: [], filters: query};
        let result = dealers.filter((dealer) => {
            let compareArray = dealer.data.certifications.map((cert) => {
                return cert.substr(0, cert.indexOf(' ')).toLowerCase();
            });
            return query.every((element) => {
                return compareArray.includes(element)
            });
        });
        return {list: result, filters: query}
    }
})