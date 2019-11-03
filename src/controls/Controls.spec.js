import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { exportAllDeclaration } from "@babel/types";

afterEach(rtl.cleanup);

// test ("cannot be closed or opened if it is locked", () => {

//     const isLocked = jest.fn()
//     const wrapper = rtl.render(<Controls locked={true}/>)

//     const OpenButton = wrapper.getByText(/open gate/i)

//     const ClickOpenButton = rtl.act(() => {
//         rtl.fireEvent.click(OpenButton)
//     })
    
//     expect(ClickOpenButton).toBeFalsy();

    // const CloseButton = wrapper.queryByText(/close/i)
    // rtl.act(() => {
    //     rtl.fireEvent.click(CloseButton)
    // })

    // const LockButton = wrapper.queryByText(/lock/i)
    // rtl.act(() => {
    //     rtl.fireEvent.click(LockButton)
    // })
    
    // const OpenButton = wrapper.queryByText(/open/i)
    // expect(OpenButton).toBeDisabled();
// } )

// After all those click it doesn't show that I have Open Gate button. why? learn how it exactly works!!