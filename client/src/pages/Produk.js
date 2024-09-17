import React, { useEffect } from 'react'
import "../App.css";
import One from "../images/1.jpg";
import Fifteen from "../images/15.png";
import Two from "../images/2.jpg";
import Four from "../images/4.png";
import Five from "../images/5.png"
import Seven from "../images/7.png"
import Six from "../images/6.jpg";
import Skull from "../images/skull.png";
import Sixteen from "../images/16.png";
import Eight from "../images/8.png";
import Ten from "../images/10.jpg";
import Nine from "../images/9.png";
import Eleven from "../images/11.png";
import Thirteen from "../images/13.png";
import Twelve from '../images/12.png';
import  Eighteen from '../images/18.png';
import Fourteen from "../images/14.png";
import { Link } from 'react-router-dom'


const Produk = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Melakukan scroll ke atas saat komponen dimuat
  }, []);
  return (
    <div>
      <div className="container-fluid text-center produk1">
        <div class="container-fluid">
          <h3 className="text-center">Tidak perlu bahan kimia untuk mencegah dan mengatasi</h3>
          <h3 className="text-center fw-bold">kerak di fasilitas Cooling Tower</h3>
          <h5 className="text-center t1 py-5"> Mau tau cara praktis dan ekonomis untuk mengatasi scaling problem ?</h5>
          <p className="text-center fw-bold"> Scale Prevention and scale Remover Devices</p>
          <img src={One} />
        </div>
      </div>
      <div className="container-fluid">
        <h3 className="text-center fw-bold t2">GANGGUAN ADA SIRKULASI AIR DI DALAM HEAT EXCHANGER DAN COOLING SYSTEM</h3>
        <div className="text1">
          <p className="text-start">Makeup water yang dialirkan ke sitem pendingin mungkin terlihat bersih. walaupun sudah disaring, namun masih mengandung mineral terlarut<span className="fw-bold"> ( Dissolved )</span> dan materi tak larut <span className="fw-bold"> ( Insolube )</span> termasuk kotoran atau lumpur, mineral, gas, dan W</p>
          <p> jika tidak ditangani, dapat menumpuk dan menyebabkan :</p>
          <ul>
            <li>
              <span className="fw-bold">Penurunan efisien </span> perpindahan panas
            </li>
            <li>
              <span className="fw-bold">Peningkatan biaya </span> pemeliharaan
            </li>
            <li>
              atau bahkan Penghentian Total Sistem <span className="fst-italic fw-bold">( shutdown )</span>
            </li>
          </ul>
          <div className="text-center t3">
            <img src={Fifteen} />
          </div>
        </div>
      </div>
      <div className="container-fluid t4">
        <h5 className="text-start fw-bold t5"> CORROSION <span className="fst-italic">( An-Organik )</span></h5>
        <div className="text2">
          <p className="text-start"><span className="fw-bold">Pemakaian bahan kimia secara terus menerus pada pengendalian kerak <span className="fst-italic"> ( Scaling )</span> merupakan salah satu penyebab korosi</span> pada peralatan logam di dalam sistem pendingin. Proses Korosi ini dapat menyebabkan keretakan, kebocoran, dan kegagalan dini pada komponen dalam sistem</p>
        </div>
        <h5 className="text-start fw-bold t5"> SCALE <span className="fst-italic">( An-Organik )</span></h5>
        <div className="text2">
          <p className="text-start"><span className="fw-bold">Endapan Kerak <span className="fst-italic"> ( Scale )</span></span> terbentuk ketika kelarutan, mineral terlarut dalam air pendingin terlampaui. Dalam proses sirkulasi air dalam Cooling tower akan terjadi penguapan sejumlah air sehingga terjadi peningkatan konsentrasi mineral dalan air yang akan membentuk kerak</p>
          <p className="text-start">Mineral seperti Calsium Carbonat, Calsium Phospate, Calsium Sulfat, Magnesium Silikat, dan Oksida Besi. biasanya larut dalam kondisi tertentu</p>
        </div>
        <h5 className="text-start fw-bold t5"> Fouling <span className="fst-italic">( Organik & An-Organik )</span></h5>
        <div className="text2">
          <p className="text-start"><span className="fw-bold">Fouling</span> adalah Akumulasi zat padat selain Kerak. Bahan Fouling bisa berasak dari :</p>
          <ul>
            <li><span className="fw-bold">Make up Water</span> ( debu, pasir, lumpur, besi, dan sebagainya )
            </li>
            <li>
              <span className="fw-bold">Udara</span> ( debu, kotoran )
            </li>
            <li>
              <span className="fw-bold">Kontaminan Internal</span> ( Kontaminan Proses produksi, minyak, produksi korosi, Mikroa berbentuk Slime ( Lendir )npertumbuhan lumut / ganggang, dan sebagainya )
            </li>
          </ul>
          <p>Pada Cooling Tower dengan sistem sirkulasi terbuka, cendeting lebih tinggi peningkatan kontaminan eksternal termasuk pertumbuhan mikroorganisma</p>
        </div>
      </div>
      <div classname="container-fluid ">
        <div className=" text-center a1">
          <img src={Two} />
        </div>
      </div>
      <div className="container-fluid bubble">
        <div class="card">
          <div class="card-body">
            <div className="text-center">
              <h2 className="fw-bold">Kerak Menyebabkan Pemborosan Energi</h2>
              <p>Konduktifitas dari kerak adalah 1/2000 lebih rendah</p>
              <img src={Four} />
            </div>
            <div class="container text-center">
              <p className="text-center text1">Walaupun ketebalan kerak yang ada pada Heat Exchanger kurang dari 1 mm, konsumsi energi akan meningkat lebih dari 20%</p>
              <img src={Five} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid produk2">
        <div className="text-start text2">
          <h4 className="fw-bold text4">Cara umum yang dilakukan untuk mencegah terjadi pembentukan kerak</h4>
          <p className="text3">1. Menghambat kerak dengan<span className="fw-bold"> Kontrol pH</span></p>
          <p className="text3">2. mengontrol kerak dengan<span className="fw-bold"> Blowdown ( Bleed off )</span></p>
          <p className="text3">3. Mengontrol kerak dengan<span className="fw-bold"> Bahan kimia penghambat kerak</span></p>
          <p className="text3">4. Mencegah dan menanggulangi kerak <span className="fw-bold red"> Tanpa bahan kimia</span></p>
        </div>
      </div>
      <div className="container-fluid">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col text-center aa">
              <img src={Seven} />
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col text-center aa">
              <img src={Six} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid a3">
        <div className="text-center ab">
          <img src={Skull} />
          <span className="fw-bold">    Efek pemakaian bahan kimia</span>
        </div>
        <div class="container text-center py-5">
          <div class="row align-items-start">
            <div class="col">
              <div class="card">
                <p className="text-center fw-bold card1">KANDUNGAN DALAM BAHAN KIMIA</p>
                <div class="card-body ac">
                  <ul className="text-start">
                    <li>
                      <p>Senyawa Fosfor Organik</p>
                    </li>
                    <li>
                      <p>Chlorine</p>
                    </li>
                    <li>
                      <p>Hydrozine</p>
                    </li>
                    <li>
                      <p>Senyawa Sianida</p>
                    </li>
                    <li>
                      <p>Sulfida dan Lainnya</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <p className="text-center fw-bold card2">PADA MANUSIA</p>
                <div class="card-body ">
                  <ul className="text-start ac">
                    <li>
                      <p>Berbahaya jika terhirup atau terminum</p>
                    </li>
                    <li>
                      <p>Kerusakan yang serius pada kulit dan mata</p>
                    </li>
                    <li>
                      <p>Berpengaruh buruk pada reproduksi</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container text-center py-5">
            <div class="row align-items-center">
              <div class="col">
                <div className="text-center a2">
                  <img src={Sixteen} />
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <p className="text-center fw-bold card3">PADA COOLING TOWER</p>
                  <div class="card-body ">
                    <ul className="text-start ac">
                      <li>
                        <p>Mengandung PH dan kualitas air</p>
                      </li>
                      <li>
                        <p>Bersifat korosif</p>
                      </li>
                      <li>
                        <p>Bisa membentuk senyawa / partikel lain</p>
                      </li>
                      <li>
                        <p>Meningkatkan beban biaya di WTP</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ad">
        <div className="text-center">
          <p className="text-center ae  fw-bold">Beberapa Cara Penanggulangan Kerak TANPA BAHAN KIMIA yang sudah ada dipasaran</p>
          <img src={Eight} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="text-center af">
          <p className="fw-bold">Scale Prevention and Scale Remover Device</p>
        </div>
        <div className="text-center ag">
          <p className="text-center fw-bold">Memperkenalkan perangkat pencegah dan penanggulangan kerak pada <span className="fst-italic">( Scale ) </span> pada Heat Exchanger</p>
          <p className="text-center fw-bold">dan cooling tower<span className="red"> TANPA PENGGUNAAN BAHAN KIMIA</span></p>
          <img src={Ten} />
          <h4>Made in Japan</h4>
          <p className="fw-bold">Dengan Teknologi Gelombang Elektromagnetik</p>
        </div>
      </div>
      <div className="container-fluid ah">
        <p className="fw-bold text-center ai">Keunggulan Digisaviour</p>
        <div className="container-fluid aj">
          <p className=" text-start aj">1. <span className="fw-bold">  MENANGGULANGI</span> - Merontokkan sisa kerak lama <span className="fst-italic fw-bold"> ( existing scale )</span> yang membandel di bagian dalam pipa dan di sela-sela filler pada Heat Exchanger dan semua bagian dalam Cooling Tower System yang tidak terjangkau dengan <span className="fw-bold"> chemical cleaning</span></p>
          <p className="text-start aj">2. <span className="fw-bold">MENCEGAH</span> - tidak terjadi penumpukan kerak yang baru. menambah masa pakai <span className="fw-bold fst-italic">( Life time )</span> Heat Exchanger, pipa-pipa, dan semua bagian pada sistem sirkulasi air dalam cooling tower</p>
          <p className="text-start aj"> 3. meningkatkan <span className="fw-bold"> efisien</span> pada Cooling Tower</p>
          <p className="text-start aj">4.<span className="fw-bold"> Maintenance Free</span> dan meng<span className="fw-bold">hemat biaya</span> pemeliharan dibanding dengan pemakaian bahan kimia. Perangkat dapat digunakan untuk jangka panjang</p>
          <p className="text-start aj">5.<span className="fw-bold"> Tidak diperlukan</span> lagi proses<span className="fw-bold"> Water Softener </span>untuk melunakkan air yang akan dialirkan ke Cooling Tower<span className="fst-italic"> ( make up water )</span></p>
          <p className="text-start aj">6. Ramah Lingkungan <span className="fst-italic fw-bold"> ( Eco Friendly )</span> , mengurangi pemakaian Bahan Kimia secara signifikan, tidak menyebabkan korosif. Mengurangi biaya Waste Water Treatment Plant. Memenuhi<span className="fw-bold"> ISO 14001</span></p>
          <p className="text-start aj">7. Dapat dipasang pada pipa berukuran besar dengan diameter <span className="fw-bold"> Ø 600 mm </span> atau <span className="fw-bold"> Ø 24" </span>. Jangkauan efektif hingga <span className="fw-bold"> 1000 m </span>. Water Flow rate hingga <span className="fw-bold"> 1.200 ton/jam </span></p>
        </div>
      </div>
      <div className="container-fluid text-center ai">
        <p className="text-center fw-bold ak">CARA KERJA DIGISAVIOUR</p>
        <p className="text-start fw-bold al">Formasi dari kerak dalam saluran Pipa</p>
        <p className="text-start al">Larutan Calsium dan Magnesium bersifat <span className="fw-bold">kation</span> ( ion positif ) sedangkan filler pada Cooling Tower dan Pipa ersifat Anion ( Ion Negative ) ( Grounded ) Sehingga ION positif pada Calsium dan Magnesium akan terikat pada pipa dan membentuk lapisan kerak ( Scale )</p>
        <p className="text-start fw-bold al">Pelepasan Kerak</p>
        <p className="text-start al">Gelombang Elektromagnetik akan menetralkan partikel Ca2+ dan Mg2+ menjadi Non-ion. Reaksi antara ion hidroksida ( OH- ) dengan Ion Calsium akan membentuk Calsium Carbonat, yang secara elektrik membuatnya stabil, memperlemah daya tarik Adhesif, dan Kerak yang telah melekat pada pipa dan kisi-kisi pendingin akan lepas / rontok dalam waktu 1 hingga 3 bulan secara bertahap</p>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col">
              <img src={Nine} />
            </div>
            <div class="col">
            </div>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">
          </div>
          <div class="col">
            <img src={Eleven} />
          </div>
          <div class="col">
          </div>
        </div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col">
              <img src={Thirteen} />
            </div>
            <div class="col">
            </div>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">

          </div>
          <div class="col">
            <img src={Twelve} />
          </div>
          <div class="col">
          </div>
        </div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col">
              <img src={Eighteen} />
            </div>
            <div class="col">
            </div>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">

          </div>
          <div class="col">
            <img src={Fourteen} />
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      <div className="container-fluid text-center an">
        <p className="text-center  fw-bold "> Anda memiliki masalah kerak ( scaling ) di Heat Exchanger dan Cooling Tower ?</p>
        <p className="text-center fw-bold "> Mau konsultasi gratis dengan tim ahli kami ?</p>
        <Link to="/contact-us" className=" btn btn-outline-success btn-lg">konsultasi gratis</Link>
      </div>
    </div>
  )
}

export default Produk