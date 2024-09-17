import React from 'react'
import { Link } from 'react-router-dom'

const Konsultasi = () => {
  return (
    <div>
      <div className="container-fluid text-start homescreen">
        <div class="container-fluid a2">
          <h3 className="text-start">Tidak perlu bahan kimia untuk mencegah dan mengatasi</h3>
          <h3 className="text-start fw-bold">kerak di fasilitas Cooling Tower</h3>
          <h5 className="text-start t1 py-5"> Mau tau cara praktis dan ekonomis untuk mengatasi scaling problem ?</h5>
        </div>
        <Link className=" link-underline link-underline-opacity-0 text btn btn-outline-light btn-lg fw-bold a2" to="/Produk-Digisaviour"> MAU TAU DONG</Link>
      </div>
      <div className="container-fluid text-center homescreen2">
      <div class="container-fluid">
          <h3 className="text-center">Anda memiliki masalah kerak( scaling ) di Heat Exchanger dan Cooling Tower</h3>
          <h3 className="text-center fw-bold">atau mau konsultasi gratis dengan tim ahli kami ?</h3>
          <p className="text-center py-5"> klik link dibawah ini</p>
        </div>
        <Link className="link-underline link-underline-opacity-0 text btn btn-outline-success btn-lg fw-bold" to="/konsultasi">Konsultasi Gratis</Link>
      </div>
    </div>
  )
}

export default Konsultasi