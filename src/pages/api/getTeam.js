// import clientPromise from "../../lib/mongodb";

// const getTeam = async (req, res) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("team");

//     const team = await db.collection("team").find({}).limit(20).toArray();

//     res.json(team);
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// };
// export default getTeam;

// export default async function handler(req, res) {
//   const client = await clientPromise;
//   const db = client.db("junfolio");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let teamMember = await db.collection("team").insertOne(bodyObject);
//       res.json(teamMember.ops[0]);
//       break;
//     case "GET":
//       const allTeam = await db.collection("team").find({}).toArray();
//       res.json({ status: 200, data: allTeam });
//       break;
//   }
// }
// export async function getServerSideProps(context) {
//   let res = await fetch("http://localhost:3000/api/team", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let allTeam = await res.json();

//   return {
//     props: { allTeam },
//   };
// }
