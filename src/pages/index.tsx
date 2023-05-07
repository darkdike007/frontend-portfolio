import { Badge, Button, Card, Modal, Navbar } from "flowbite-react";
import React, { use, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Nunito } from "next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home({
  dataKeahlian,
  dataSkill,
  dataDeskripsiDiri,
  dataProject,
}) {
  const keahlianData = dataKeahlian.data;
  const skillData = dataSkill.data;
  const deskripsiDiriData = dataDeskripsiDiri.data;
  const projectData = dataProject.data;

  console.log(process.env.NODE_ENV);

  const percentage = 66;
  const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="My Portfolio adalah kumpulan dari project - project yang talah saya buat. Dan informasi tentang saya"
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
          <Navbar.Link
            className="text-base font-bold text-slate-600"
            href="/"
            active={true}
          >
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
          >
            About Me
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className={`min-h-[84.5vh] ${nunito.className}`}>
        <div className="flex flex-wrap bg-wave">
          <div className="w-full hidden md:block p-14 pb-0 md:w-2/5 md:pb-14 md:!pr-0 lg:py-28 lg:px-16">
            <div className="w-full aspect-w-4 aspect-h-3">
              <img src="/img/blob_img_2.png" alt="" className="" />
            </div>
          </div>
          <div className="w-full p-16 pt-10 sm:w-4/5 md:pt-16 md:w-3/5 lg:p-24">
            <p className="text-2xl text-white mb-3 font-semibold">HALLO !</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-semibold">
              HOSEA DIKE PRASETYANTO, S.Kom.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              WEBSITE DEVELOPER
            </h2>
            <div className="mt-16 h-16">
              {/* <a href="#" className="inline-block w-max">
                <Button
                  gradientDuoTone="pinkToOrange"
                  size="xl"
                  className="w-max"
                >
                  Download My CV
                </Button>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full mt-10">
          <div className="w-full px-5 md:w-3/5">
            <p className="text-xl lg:text-2xl text-justify text-slate-800">
              {deskripsiDiriData.deskripsi_singkat}
            </p>
          </div>
          <div className="w-full px-10 pt-16 md:pt-0 lg:px-16 md:w-2/5">
            <div className="w-full aspect-w-5 aspect-h-4">
              <img src="/img/blob_img_1.png" alt="" className="" />
            </div>
          </div>
          <div className="w-full mt-20">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment">
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
          <div className="w-full mt-20">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment">
              Skill
            </h2>
            <div className="flex flex-wrap justify-center gap-3 p-5">
              {skillData.map((data) => (
                <div
                  className="w-[calc(50%-6px)] p-5 md:w-[calc(33.33333%-8px)] lg:w-[calc(25%-10px)]"
                  key={data.id}
                >
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
          <div className="w-full mt-20">
            <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment">
              Portofolio
            </h2>
            <div className="flex flex-wrap gap-3 p-5 justify-center">
              {projectData.map((data, index) => (
                <React.Fragment key={index}>
                  <div className="w-full md:w-[calc(50%-6px)] lg:w-[calc(33.33333%-8px)]">
                    <Card
                      onClick={() => setOpenModal(`modal${index}`)}
                      className="cursor-pointer"
                      imgSrc={data.thumbnailProject}
                    >
                      <h5 className="text-2xl font-bold tracking-tight truncate text-slate-800 dark:text-white">
                        {data.namaProject}
                      </h5>
                      <p className="text-slate-500 dark:text-gray-400 text-justify line-clamp-3">
                        {data.deskripsi}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.tagProject.map((data, index) => (
                          <Badge color="info" key={index}>
                            {data}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                  <Modal
                    dismissible={true}
                    show={openModal === `modal${index}`}
                    onClose={() => setOpenModal(undefined)}
                    size="5xl"
                    className="!inset-0 !h-screen modal-box"
                  >
                    <Modal.Header>
                      <p className="mb-2">{data.namaProject}</p>

                      <div className="flex flex-wrap gap-2">
                        {data.tagProject.map((data, index) => (
                          <Badge color="info" key={index}>
                            {data}
                          </Badge>
                        ))}
                      </div>
                    </Modal.Header>
                    <Modal.Body className="portrait:h-[calc(80vh-35vw)] landscape:h-[calc(100vh-30vw)] lg:!h-[calc(100vh-20vw)] overflow-y-scroll">
                      <h3 className="font-semibold text-slate-700 text-lg md:text-xl">
                        Deskripsi
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-5 text-justify text-slate-500 dark:text-gray-400 whitespace-pre-line">
                        {data.deskripsi}
                      </p>
                      <h3 className="font-semibold text-slate-700 text-lg md:text-xl">
                        Screenshot
                      </h3>
                      <div className="mt-5 flex flex-wrap gap-3 justify-center">
                        {data.screenshoots.map((data, index) => (
                          <div className="w-full md:w-[calc(50%-6px)]">
                            <h2 className="font-semibold text-slate-700 text-base md:text-lg">
                              {data.title}
                            </h2>
                            <p className="text-slate-700 text-sm md:text-base mb-4">
                              {data.deskripsi}
                            </p>
                            <img src={data.img} alt={data.title} className="shadow-xl rounded" />
                          </div>
                        ))}
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        color="gray"
                        onClick={() => setOpenModal(undefined)}
                      >
                        Oke
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </React.Fragment>
              ))}

              <div className="w-full">
                <a href="/project" className="mx-auto mt-5 w-max block">
                  <Button outline={true} gradientDuoTone="cyanToBlue" size="lg">
                    Semua Project
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const API_CODE = "k0rY64IVQhjIN73JdOys8vqCNdcur4MEBjeLlwLR";
  const URL_SERVER = "https://hoseadikeportfolio.redagro.my.id";

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

  const resProject = await fetch(`${URL_SERVER}/api/project/new`, {
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
  const dataProject = await resProject.json();

  // Pass data to the page via props
  return { props: { dataKeahlian, dataSkill, dataDeskripsiDiri, dataProject } };
}
