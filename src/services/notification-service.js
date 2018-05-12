export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

let observers = {};
let instance = null;


class NotificationService {

    // Singleton Pattern restricts to the SAME instance
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    postNotification = (notificationName, data) => {
        let observations = observers[notificationName];

        for (var i = 0; i < observations.length; i++) {
            let obj = observations[i];
            obj.callback(data);
        }
    };


    //  Observer Pattern to send notifications when changes to model occur
    removeObserver = (notificationName, observer) => {
        let observations = observers[notificationName];
        if (observations) {
            for (var i = 0; i < observations.length; i++) {
                if (observer === observations[i].observer) {
                    observations.splice(i, 1);
                    observers[notificationName] = observations;
                    break;
                }
            }
        }
    };

    addObserver = (notificationName, observer, callback) => {
        let observations = observers[notificationName];

        if (!observations) {
            observers[notificationName] = [];
        }

        let object = {observer: observer, callback: callback};

        observers[notificationName].push(object);
    };
}

export default NotificationService;