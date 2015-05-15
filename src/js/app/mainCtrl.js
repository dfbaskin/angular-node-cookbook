
import appModule from './appModule';

class MainCtrl {

    constructor() {
        this.message = "Today is";
        this.today = new Date();
    }

}

appModule
    .controller('mainCtrl', [
        MainCtrl
    ]);

