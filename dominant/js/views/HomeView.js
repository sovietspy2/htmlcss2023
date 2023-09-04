import AbstractView  from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <article>
          <h2>
            My first post
          </h2>
          <p>
            Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
            tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
            ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
            diam iaculis velit, is fringille sem nunc vet mi.
          </p>
        </article>

        <article>
          <h2>
            My second news
          </h2>
          <p>
            Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
            tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
            ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
            diam iaculis velit, is fringille sem nunc vet mi.
          </p>
        </article>`
    }
}