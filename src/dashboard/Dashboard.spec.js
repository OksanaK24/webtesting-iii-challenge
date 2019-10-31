import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId } from '@testing-library/dom';
import Dashboard from "./Dashboard";
import Display from "../display/Display";

afterEach(rtl.cleanup);

test ("<Dashboard> snapshot", () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.asFragment()).toMatchSnapshot()
} )

// test("shows the controls and display", () => {
//     const wrapper = rtl.render(<Dashboard />)
    
//     expect(wrapper.exists(<Display />)).toBe(true)
//     // expect(getByTestId('name')).toContainInstanceOf(<Display />);
// })
