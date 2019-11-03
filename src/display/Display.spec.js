import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

test ("defaults to unlocked", () => {
    const wrapper = rtl.render(<Display />)

    const defaultUnlocked = wrapper.getByText(/unlocked/i)
    expect(defaultUnlocked).toBeTruthy();
})

test("defaults to open", () => {
    const wrapper = rtl.render(<Display />)

    const defaultOpen = wrapper.getByText(/open/i)
    expect(defaultOpen).toBeTruthy();
})

test("displays 'Closed' if the closed prop is true + closed use the red-led class", () =>{
    const wrapper = rtl.render(<Display closed={true}/>)
    const ClosedGate = wrapper.getByText(/closed/i)
    expect(ClosedGate).toHaveClass("led red-led")
})

test("displays 'Open' if the closed prop is false(default) + open use the green-led class", () =>{
    const wrapper = rtl.render(<Display />)
    const OpenGate = wrapper.getByText(/open/i)
    expect(OpenGate).toHaveClass("led green-led")
})

test("displays 'Locked' if the locked prop is true + locked use the red-led class", () =>{
    const wrapper = rtl.render(<Display locked={true}/>)
    const LockedGate = wrapper.getByText(/locked/i)
    expect(LockedGate).toHaveClass("led red-led")
})

test("displays 'Unlocked' if the locked prop is false(default) + open use the green-led class", () =>{
    const wrapper = rtl.render(<Display />)
    const UnlockedGate = wrapper.getByText(/unlocked/i)
    expect(UnlockedGate).toHaveClass("led green-led")
})