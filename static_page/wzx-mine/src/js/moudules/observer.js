;(function (win) {
    //观察者设计模式
    function Observer() {
        this.eventList = {};
    }
    Observer.prototype.on = function (eventType, callback) {
        if (!this.eventList[eventType]) {
            this.eventList[eventType] = [];
        }
        this.eventList[eventType].push(callback);
        return this;
    }
    Observer.prototype.emit = function (eventType) {
        var event = this.eventList[eventType];
        var args = Array.prototype.slice.call(arguments, 1);
        event.forEach(function (item, index) {
            item.apply(this, args);
        })
        return this;
    }
    Observer.prototype.off = function (eventType, callback) {
        var currentEvent = this.eventList[eventType];
        var len = 0;
        if (currentEvent) {
            len = currentEvent.length;
            for (var i = len - 1; i >= 0; i--) {
                if (currentEvent[i] === cb) {
                    currentEvent.splice(i, 1);
                }
            }
        }
    }
    win.Observer = Observer;
}(window));