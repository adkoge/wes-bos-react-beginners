import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    constructor() {
        super();
        console.log("gonna create component!");
        this.goToStore = this.goToStore.bind(this);
    }
    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. get the text from that input
        console.log(this.myInput.value.value);
        // 3. Change the page to /store/whatever-they-entered
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;
