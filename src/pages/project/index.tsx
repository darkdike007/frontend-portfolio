import { Badge, Button, Card, Modal, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Nunito } from "next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home({dataProject}) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <>
      <Head>
        <title>Project | My Portfolio</title>
        <meta
          name="description"
          content="Kumpulan project yang telah saya buat"
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
            active={true}
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

      <div className="min-h-[calc(82.3vh-40px)]">
        <div className="w-full mt-10">
          <h2 className="text-4xl mx-auto font-bold text-slate-800 judul_segment">
            Portofolio
          </h2>
          <div className="flex flex-wrap gap-3 p-5">
            {projectData.map((data, index) => (
                <React.Fragment key={index}>
                  <div className="w-full md:w-[calc(50%-6px)] lg:w-[calc(33.33333%-8px)]">
                    <Card
                      onClick={() => setOpenModal("modal1")}
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
                    show={openModal === "modal1"}
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
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const API_CODE = "k0rY64IVQhjIN73JdOys8vqCNdcur4MEBjeLlwLR";
  const URL_SERVER = "https://hoseadikeportfolio.redagro.my.id";


  const resProject = await fetch(`${URL_SERVER}/api/project`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const dataProject = await resProject.json();

  // Pass data to the page via props
  return { props: { dataProject } };
}
