import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId } from '@testing-library/dom';
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test ("<Dashboard> snapshot", () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.asFragment()).toMatchSnapshot()
} )

test("shows the display", () => {
    const wrapper = rtl.render(<Dashboard />)
    
    expect(wrapper.getByText(/open/i)).toHaveClass("led green-led")
})

test ("shows the controls", () => {
    const wrapper = rtl.render(<Dashboard />)
    
    expect(wrapper.getByText(/close gate/i)).toHaveClass("toggle-btn")
})
