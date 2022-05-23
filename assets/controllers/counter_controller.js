import { Controller } from "@hotwired/stimulus";
import $ from 'jquery';

export default class extends Controller {
    count = 0;
    static targets = ['count'];

    // connect() {
    //     this.count = 0;


        // * jquery
        // $(this.element).on('click', () => {
            // increment code
        // });



        // ! Javascript es6
        // this.element.addEventListener('click', () => {
        //     this.count++;
        //     this.element.innerHTML = this.count;
        // });
    // }

    increment() {
        this.count++;
        this.countTarget.innerHTML = this.count;
    }
}
