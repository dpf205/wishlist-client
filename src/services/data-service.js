import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

let ns = new NotificationService(); // only one copy is created due to singleton pattern in src/services/notification-service.js

let instance = null;
let wishList = [];

// use Singleton Pattern to access the SAME instance
class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    itemOnWishList = item => {
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i]._id === item._id) {
                return true;
            }
        }
        return false;
    };

    addWishListItem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    };

    removeWishListItem = item => {
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i]._id === item._id) {
                wishList.splice(i, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED);
                break;
            }
        }
    }
}


export default DataService;