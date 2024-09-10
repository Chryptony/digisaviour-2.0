import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form, Container, Col, Button, Row, Card } from 'react-bootstrap';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Melakukan scroll ke atas saat komponen dimuat
  }, []);
  
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [perihal, setPerihal] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const navigate = useNavigate();
  
  const formKontak = async (e) => {
    e.preventDefault();
    
    // Validasi keterangan
    if (!keterangan.trim()) {
      Swal.fire(
        'Peringatan!',
        'Kolom Keterangan tidak boleh kosong.',
        'warning'
      );
      return;
    }
    
    try {
      const result = await Swal.fire({
        title: 'Apakah anda yakin sudah isi dengan benar?',
        text: "Pastikan semua data yang Anda masukkan sudah benar sekali lagi agar tidak salah kirim",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#059432',
        cancelButtonColor: '#eb2f06',
        confirmButtonText: 'Ya, konfirmasi!',
        cancelButtonText: 'Batal'
      });

      if (result.isConfirmed) {
        await axios.post('http://localhost:3001/api/servers', {
          nama,
          email,
          telepon,
          perihal,
          keterangan,
        });

        await Swal.fire(
          'Terkonfirmasi!',
          'Formulir Anda telah terkirim.',
          'success'
        );
        navigate('/contact-us', { replace: true });
      }
    } catch (error) {
      Swal.fire(
        'Gagal!',
        'Ada masalah dalam mengirim formulir.',
        'error'
      );
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="container-fluid text-start homescreen">
        <div className="container-fluid a2">
          <h1 className="text-start fw-bold">Kontak dengan Digisaviour</h1>
          <h5 className="text-start ">Untuk info dan pertanyaan lebih jelas , silahkan kontak kami</h5>
        </div>
        <Link className="link-underline link-underline-opacity-0 btn btn-outline-light fw-bold a2" to="https://api.whatsapp.com/send?phone=6281287871362&text=I'd like to chat with you"> kontak kami</Link>
      </div>
      <div className="container-fluid contact1">
        <div className="container-fluid ao">
          <h1>KONTAK KAMI</h1>
          <p>Silahkan kirim pesan anda via form dibawah ini. Kami akan segera membalasnya segera</p>
        </div>
        <Container>
          <Row>
            <Col className="text-start ap" md={8}>
              <Card>
                <Card.Body className="text-start contact1 border-opacity-0">
                  <Form onSubmit={formKontak}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control 
                        type="text"
                        value={nama}
                        placeholder="Nama"
                        onChange={(e) => setNama(e.target.value)} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Silahkan masukkan nama Anda
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email"
                        value={email}
                        placeholder="email@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Silahkan masukkan alamat email Anda
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control 
                        type="tel"
                        value={telepon}
                        placeholder="081212121212"
                        onChange={(e) => setTelepon(e.target.value)} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Silahkan masukkan nomor telepon Anda yang bisa dihubungi
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Perihal</Form.Label>
                      <Form.Control 
                        type="text"
                        value={perihal}
                        placeholder="Perihal"
                        onChange={(e) => setPerihal(e.target.value)} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Silahkan isi perihal apa yang ingin ditanyakan
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Keterangan</Form.Label>
                      <Form.Control 
                        type="text"
                        value={keterangan}
                        placeholder="Keterangan"
                        onChange={(e) => setKeterangan(e.target.value)} 
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Silahkan isi keterangannya
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="mt-3" variant="success" type="submit">Kirim</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
