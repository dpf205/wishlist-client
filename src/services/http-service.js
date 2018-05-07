import 'whatwg-fetch'; // no need to store in variable; just call directly

class HttpService {
    getProducts = () => {

        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:8080/product')
                .then(res => {
                    resolve(res.json());
                })
        });
        return promise;
    }
}

export default HttpService;