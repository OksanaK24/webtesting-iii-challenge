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