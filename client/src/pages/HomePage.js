import React, { useEffect } from 'react'
import '../App.js'
import { Link } from 'react-router-dom'
import Ten from "../images/10.jpg";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Melakukan scroll ke atas saat komponen dimuat
  }, []);
  return (
    <div>
      <div className="container-fluid text-start homescreen">
        <div class="container-fluid a2">
          <h3 className="text-start">Cooling tower anda bermasalah ?
          </h3>
          <h3 className="text-start fw-bold">Ada kerak di fasilitas Cooling Tower ?</h3>
          <h5 className="text-start">mau coba beralih dari bahan kimia untuk mengatasi scaling problem ?</h5>
        </div>
      </div>
      <div className="container-fluid text-start homescreen3 ">
        <div class="container text-start ">
          <div class="row align-items-center">
            <div class="col">
              <img src={Ten} />
            </div>
            <div class="col">
              <div class="container-fluid a2">
                <h3 className="text-start"><span className="fw-bold">Digisaviour</span> hadir untuk membantu anda dalam mengatasi kerak pada cooling tower anda</h3>
                <h5 className="text-start py-2 ">tanpa perlu menggunakan bahan kimia untuk mencegah dan mengatasi kerak pada Cooling Tower</h5>
                <h5 className="text-start py-5"> Mau tau cara praktis dan ekonomis untuk mengatasi scaling problem ?</h5>
              </div>
              <Link className=" link-underline link-underline-opacity-0 text btn btn-outline-dark btn-lg fw-bold a2" to="/Produk-Digisaviour"> MAU TAU DONG</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage