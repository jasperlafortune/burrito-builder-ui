import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import { shallow, mount } from "enzyme";
import "../../setupTests"
import OrderForm from "./OrderForm";

describe("Test Order Form Component", () => {
    afterEach(cleanup);

    it("renders without crashing", () => {
        mount(<OrderForm />)
    });

    it("can't be submitted while empty", () => {
        const { getByText } = render(<OrderForm />);
        const button = getByText(/Submit/i);
        expect(button).toBeDisabled()
    })

    it("adds ingredients to order", () => {
        const { getByText } = render(<OrderForm />);
        // get handles to beans and steak buttons and order summary
        const beansButton = getByText(/beans/i);
        const steakButton = getByText(/steak/i);
        const orderSummary = getByText("Order: ", {exact: false});
        // click beans button
        fireEvent.click(beansButton);
        // check if order is for beans
        expect(orderSummary.textContent).toBe("Order: beans");
        // click steak button
        fireEvent.click(steakButton);
        // check if order is for beans and steak
        expect(orderSummary.textContent).toBe("Order: beans, steak");
        // click beans button again
        fireEvent.click(beansButton);
        // check if order is for beans
        expect(orderSummary.textContent).toBe("Order: steak");
    })
})
