import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '092251e02abe4db5b68fdebfa94d8751',
        });
    }
}

export default AppLoader;
