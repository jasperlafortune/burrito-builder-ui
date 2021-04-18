import React from 'react';
// import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
// import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests"
import App from "./App";

describe("Test App Component", () => {
    afterEach(cleanup);

    it("has title Burrito Builder", () => {
        const { getByText } = render(<App />);
        expect(getByText(/Burrito/i).textContent).toBe("Burrito Builder")
    });

    it("loads historic orders", () => {
        const wrapper = mount(<App />);
        const orders = wrapper.instance().state.orders;
        expect(orders.length).toBeDefined();
    })
});



  
