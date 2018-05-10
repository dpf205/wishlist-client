let instance = null;
let observers = {};

// use Observer Pattern to send notifications when changes to model occur
class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    removeObserver = (notificationName, observer) =>{
        let observations = observers[notificationName];
        if(observations){
            for(let i = 0; i < observations.length; i++){
                if(observer === observations[i].observer){
                    observations.splice(i, 1);
                    observers[notificationName] = observations;
                    break;
                }
            }
        }
    };

    addObserver = (notificationName, observer, callback) => {
        let observations = observers[notificationName];

        if(!observations) {
            observers[notificationName] = [];
        }

        let object = {observer: observer, callback: callback};
        observers[notificationName].push(object);
    }
}