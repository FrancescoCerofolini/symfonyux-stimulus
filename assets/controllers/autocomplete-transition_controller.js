import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        console.log('ciao')
    }

    toggle(event) {
        if (event.detail.action === 'open') {
            this.enter();
        } else {
            this.leave();
        }
    }
}
