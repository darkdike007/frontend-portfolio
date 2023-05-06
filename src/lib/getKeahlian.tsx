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

  const dataKeahlian = await resKeahlian.json();

  
  return {
    props: {
      dataKeahlian,
    },
  };
}

export default function getKeahlian(dataKeahlian) {
  return dataKeahlian.data;
}