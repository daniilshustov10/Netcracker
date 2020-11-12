export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(listener);
        return this;
    }

    off(event, listener) {
        this.events[event] = this.events[event].filter(eventListener => eventListener !== listener);
        return this;
    }

    emit(event, data) {
        if (this.events[event].length) {
            this.events[event].forEach(listener => listener(data))
        }
    }
}