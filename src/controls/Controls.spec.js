import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { exportAllDeclaration } from "@babel/types";

afterEach(rtl.cleanup);

test("Close Gate button is exist and can be toggled", () => {
    const toggleClosed = jest.fn()
    const wrapper = rtl.render(<Controls toggleClosed={toggleClosed}/>)
    const CloseGateBut = wrapper.getByText(/close gate/i)
    expect(CloseGateBut).toExist;

    rtl.act(() => {
        rtl.fireEvent.click(CloseGateBut);
      })
    expect(toggleClosed).toHaveBeenCalled;


})

test("Open Gate button is exist", () =>{
    const wrapper = rtl.render(<Controls closed={true}/>)
    const OpenGateBut = wrapper.getByText(/open gate/i)
    expect(OpenGateBut).toExist
})

test("Lock Gate button is exist and can be toggled", () => {
    const toggleLocked = jest.fn()
    const wrapper = rtl.render(<Controls toggleLocked={toggleLocked}/>)
    const LockGateBut = wrapper.getByText(/lock gate/i)
    expect(LockGateBut).toExist;

    rtl.act(() => {
        rtl.fireEvent.click(LockGateBut);
      })
    expect(toggleLocked).toHaveBeenCalled;
})

test("Unlock Gate button is exist", () =>{
    const wrapper = rtl.render(<Controls locked={true}/>)
    const UnlockGateBut = wrapper.getByText(/unlock gate/i)
    expect(UnlockGateBut).toExist
})

test("Lock Gate button is disabled when close gates are open", () => {
    const wrapper = rtl.render(<Controls />)
    const LockGateButDis = wrapper.getByText(/lock gate/i)
    expect(LockGateButDis).toBeDisabled
})

test("Open Gate button is disabled when gates are locked", () => {
    const wrapper = rtl.render(<Controls locked={true} closed ={true} />)
    const OpenGateButDis = wrapper.getByText(/open gate/i)
    expect(OpenGateButDis).toBeDisabled
})

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