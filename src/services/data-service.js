let instance = null;
let wishlist = [];

// singleton pattern
class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addWishListItem = item => {
        wishlist.push(item);
    }

    removeWishListItem = item => {
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i]._id === item._id) {
                wishlist.splice(i, 1);
                break;
            }
        }
    }
}

export default DataService;