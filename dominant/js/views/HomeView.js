import AbstractView  from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return "<p> NOT DEFAULT content </p>"
    }
}