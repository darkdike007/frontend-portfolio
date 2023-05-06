import { Button, Card, Navbar, TextInput, Timeline } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import { HiArrowNarrowRight, HiCalendar, HiMail } from "react-icons/hi";

import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import { Nunito } from "next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export default function aboutMe({
  dataKeahlian,
  dataSkill,
  dataDeskripsiDiri,
  dataPendidikan,
}) {
  const keahlianData = dataKeahlian.data;
  const skillData = dataSkill.data;
  const deskripsiDiriData = dataDeskripsiDiri.data;
  const pendidikanData = dataPendidikan.data;

  const percentage = 66;
  return (
    <>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta
          name="description"
          content="Halaman yang lebih detail tentang saya"
        ></meta>
      </Head>

      <Navbar
        fluid={true}
        className={`w-full py-5 text-slate-700 ${nunito.className}`}
      >
        <Navbar.Brand href="/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            My Portofolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="text-base font-bold text-slate-600" href="/">
            Home
          </Navbar.Link>
          <Navbar.Link
            className="text-base font-bold text-slate-600"
            href="/project"
          >
            Project
          </Navbar.Link>
          <Navbar.Link
            className="text-base font-bold text-slate-600"
            href="/about-me"
            active={true}
          >
            About Me
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="min-h-[calc(82.3vh-40px)]">
        <div className="flex flex-wrap w-full mt-10">
          <div className="w-full px-10 pb-10 md:pb-0 md:w-2/5">
            <div className="w-full aspect-w-5 aspect-h-4">
              <img src="/img/blob_img_1.png" alt="" className="" />
            </div>
          </div>
          <div className="w-full px-5 md:w-3/5">
            <p className="text-xl md:text-2xl text-justify text-slate-800">
              {deskripsiDiriData.deskripsi_panjang}
            </p>
          </div>
          <div className="flex flex-wrap w-full mt-10">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment mb-5">
              Pendidikan
            </h2>
            <div className="w-full p-5">
              <Card className="w-full">
                <Timeline>
                  {pendidikanData.map((data) => (
                    <Timeline.Item key={data.id}>
                      <Timeline.Point icon={HiCalendar} />
                      <Timeline.Content>
                        <Timeline.Time>
                          {data.bulan_lulus} {data.tahun_lulus}
                        </Timeline.Time>
                        <Timeline.Title className="text-slate-700 py-1">
                          <span className="font-bold">{data.nama_sekolah}</span>
                          <br />
                          <span className="text-base">
                            {data.kualifikasi_studi} in {data.bidang_studi} |{" "}
                            {data.negara_studi}
                          </span>
                        </Timeline.Title>
                        <Timeline.Body>
                          <div className="flex flex-wrap font-semibold py-1">
                            <div className="w-full sm:w-1/5 text-slate-500">
                              Jurusan
                            </div>
                            <div className="w-full sm:w-4/5 text-slate-700">
                              {data.jurusan}
                            </div>
                          </div>
                          <div className={`${data.ipk ? 'flex' : 'hidden'} flex-wrap font-semibold py-1`}>
                            <div className="w-full sm:w-1/5 text-slate-500">
                              IPK / Nilai Akhir
                            </div>
                            <div className="w-full sm:w-4/5 text-slate-700">
                              {data.ipk}
                            </div>
                          </div>
                          <p className="text-slate-700 whitespace-pre-line">{data.informasi_tambahan}</p>
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </div>
          </div>
          <div className="flex flex-wrap w-full mt-10">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment mb-5">
              Keahlian
            </h2>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-4 pt-5 my-5">
              {keahlianData.map((data) => (
                <div className="mb-4 break-inside-avoid" key={data.id}>
                  <Card>
                    <a href="#">
                      <h5 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
                        {data.name}
                      </h5>
                    </a>
                    <p className="text-slate-700">{data.deskripsi}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap w-full mt-10">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment mb-5">
              Skill
            </h2>
            <div className="flex flex-wrap gap-3 p-5">
              {skillData.map((data) => (
                <div className="w-[calc(50%-6px)] p-5 md:w-[calc(33.33333%-8px)] lg:w-[calc(25%-10px)]" key={data.id}>
                  <CircularProgressbar
                    value={data.persentase}
                    text={`${data.persentase}%`}
                  />
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-slate-700 text-center mt-4 font-semibold">
                    {data.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap w-full mt-10">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment mb-5">
              Hubungi Saya
            </h2>
            <div className="flex flex-wrap w-full gap-3 p-5">
              <TextInput
                className="w-full md:w-[calc(50%-6px)] text-lg font-semibold"
                id="phone"
                required={true}
                readOnly
                sizing="lg"
                value={"081907398816"}
                icon={IoLogoWhatsapp}
                onClick={(e) => {
                  e.target.select();
                }}
              />
              <TextInput
                className="w-full md:w-[calc(50%-6px)] text-lg font-semibold"
                id="phone"
                required={true}
                readOnly
                sizing="lg"
                value={"darkmega007@gmail.com"}
                icon={HiMail}
                onClick={(e) => {
                  e.target.select();
                }}
              />
              <TextInput
                className="w-full md:w-[calc(50%-6px)] text-lg font-semibold"
                id="phone"
                required={true}
                readOnly
                sizing="lg"
                value={"@hoseakeren"}
                icon={IoLogoInstagram}
                onClick={(e) => {
                  e.target.select();
                }}
              />
              <TextInput
                className="w-full md:w-[calc(50%-6px)] text-lg font-semibold"
                id="phone"
                required={true}
                readOnly
                sizing="lg"
                value={"hoseadikep"}
                icon={IoLogoLinkedin}
                onClick={(e) => {
                  e.target.select();
                }}
              />

              {/* <div className="w-full grid justify-items-center">
                <a href="#" className="block w-max">
                  <Button
                    gradientDuoTone="pinkToOrange"
                    size="xl"
                    className="w-max"
                  >
                    Download My CV
                  </Button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const API_CODE = "k0rY64IVQhjIN73JdOys8vqCNdcur4MEBjeLlwLR";
  const URL_SERVER = "http://127.0.0.1:8000";

  const resKeahlian = await fetch(`${URL_SERVER}/api/keahlian`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const resSkill = await fetch(`${URL_SERVER}/api/skill`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const resDeskripsiDiri = await fetch(`${URL_SERVER}/api/deskripsi-diri`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const resPendidikan = await fetch(`${URL_SERVER}/api/pendidikan`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const dataKeahlian = await resKeahlian.json();
  const dataSkill = await resSkill.json();
  const dataDeskripsiDiri = await resDeskripsiDiri.json();
  const dataPendidikan = await resPendidikan.json();

  // Pass data to the page via props
  return {
    props: { dataKeahlian, dataSkill, dataDeskripsiDiri, dataPendidikan },
  };
}
