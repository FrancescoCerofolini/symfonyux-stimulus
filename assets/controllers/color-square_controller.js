import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static targets = ['colorSquare', 'select'];
    static values = {
        colorId: Number
    }


    connect() {
        this.selectTarget.classList.add('d-none');

        if (this.colorIdValue) {
            this.setSelectedColor(this.colorIdValue);
        }
    }

    selectColor(event) {
        let clickedColor = event.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColor = this.colorIdValue ? null : clickedColor
    }

    colorIdValueChanged() {
        this.selectTarget.value = this.colorIdValue;

        this.colorSquareTargets.forEach((element => {
            if (element.dataset.colorId === this.colorIdValue) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        }));
    }

    setSelectedColor(clickedColorId) {
        if (clickedColorId === this.selectedColorId) {
            this.findSelectedColorSquare().classList.remove('selected');
            this.selectedColorId = null;
            this.selectTarget.value = '';

            return;
        }
        this.selectedColorId = clickedColorId;

        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected');
        })
        this.findSelectedColorSquare().classList.add('selected');
        this.selectTarget.value = this.selectedColorId;

    }

    /**
     *
     * @returns {Element|null}
     */
    findSelectedColorSquare() {
        return this.colorSquareTargets.find((element) => element.dataset.colorId == this.selectedColorId);
    }
}
