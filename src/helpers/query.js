export default () => ({
    queryDealers: (query, dealers) => {
        if (query.length === 0) return {list: dealers, filters: query};
        let result = dealers.filter((dealer) => {
            let certifications = dealer.data.certifications.map((cert) => {
                return cert.substr(0, cert.indexOf(' ')).toLowerCase();
            });
            return query.reduce((acc, param) => {
                if(certifications.includes(param))
                    return true;
                return acc
            }, false)
        });
        return {list: result, filters: query}
    }
})