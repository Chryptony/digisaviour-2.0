import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Container, Col, Button, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

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

      axios.post('http://localhost:3001/api/servers', {
        nama: nama,
        email: email,
        telepon: telepon,
        perihal: perihal,
        keterangan: keterangan,
      });

      await Swal.fire(
        'Form Anda sudah terkirim',
        'Mohon menunggu, kami akan segera membalas pesan Anda ',
        'success'
      );

      navigate('/contact-us', { replace: true });
    }
    catch (error) {
      Swal.fire(
        'Maaf, form yang Anda isi ada yang salah',
        'Mohon isi kembali.',
        'silahkan coba lagi'
      );
      console.error('Error:', error.response || error);
    }
  };

  return (
    <div>
      <div className="container-fluid text-start homescreen">
        <div className="container-fluid a2">
          <h1 className="text-start">Kontak dengan <span className="fw-bold">Digisaviour</span></h1>
          <h5 className="text-start py-1">Untuk info dan pertanyaan lebih jelas , silahkan hubungi kami</h5>
          <h5 className="text-start py-3">di jam & hari kerja</h5>
        </div>
        <Link className="link-underline link-underline-opacity-0 btn btn-outline-light btn-lg fw-bold a2" to="https://api.whatsapp.com/send?phone=6281287871362&text=I'd like to chat with you"> KONTAK KAMI </Link>
      </div>
      <div className="container-fluid contact1">
        <div className="container-fluid ao">
          <h1>KONTAK KAMI</h1>
          <p>Silahkan kirim pesan anda via form dibawah ini. Kami akan segera membalasnya segera</p>
        </div>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <Container>
                <Row>
                  <Col className="text-start ap" md={12}>
                    <Card>
                      <Card.Body className="text-start contact1 border-opacity-0">
                        <Form onSubmit={formKontak}>
                          <Form.Group className="mb-3 " >
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
                              type="text"
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
                              type="text"
                              value={telepon}
                              placeholder="+62 8686858519"
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
                              as="textarea" rows={8}
                            />
                            <Form.Control.Feedback type="invalid">
                              Silahkan isi keterangannya
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Button className="mt-3 btn-lg " variant="outline-light" type="submit">Kirim</Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div class="col">
              <div className="text-start aq">
                <p className="ar"><span className="fw-bold">Digisaviour</span> mencegah dan mengatasi Kerak (Scaling) tanpa menggunakan bahan kimia</p>
                <p className="py-5">Hubungi kami pada jam dan hari kerja untuk mengetahui lebih lanjut tentang Digisaviour. Anda dapat menghubungi kami dengan mengklik tombol kontak kami atau melalui form. Kami menghargai ketertarikan anda terhadap Digisaviour</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
