import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import {
    HomePage,
    ContactUs,
    Konsultasi,
    Produk
} from '../pages'

const MainContent = () => {
    return (
        <Routes>
            <Route path="/" element={
                <HomePage></HomePage>
            }></Route>
            <Route path="/konsultasi" element={
                <Konsultasi></Konsultasi>
            }></Route>
            <Route path="/Contact-us" element ={
                <ContactUs></ContactUs>
            }></Route>
            <Route path="/Produk-Digisaviour" element ={
                <Produk></Produk>
            }></Route>
        </Routes>
    )
}
export default MainContent