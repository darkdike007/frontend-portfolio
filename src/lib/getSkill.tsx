export default async function getServerSideProps() {
  const API_CODE = "k0rY64IVQhjIN73JdOys8vqCNdcur4MEBjeLlwLR";
  const URL_SERVER = "http://127.0.0.1:8000";

  const resSkill = await fetch(`${URL_SERVER}/api/skill`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${API_CODE}`,
      Accept: `application/json`,
      "Content-Type": "application/json",
    },
  });

  const dataSkill = await resSkill.json();

  return {
    props: {
      dataSkill,
    },
  };
}
