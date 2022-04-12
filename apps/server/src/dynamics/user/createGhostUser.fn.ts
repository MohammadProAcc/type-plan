// // TODO: uncomment
// import { countries, IUser, users } from "../../schemas/mod.ts";
// import { faker } from "../../utils/bootstrap/initializeDB.ts";
// import { Bson } from "../../utils/deps.ts";
// import { refinePhone } from "../../utils/refinePhone.ts";

// export async function createGhostUser(): Promise<IUser[]> {
//   //check iran exist
//   const iran = await countries.findOne({ name: "ایران" });

//   //check ghosts doest exist in collection

//   const MrHosseini = Number(refinePhone("9381028800", iran!.countryCode[0]));
//   const MrMohammadi = Number(refinePhone("9185893605", iran!.countryCode[0]));
//   const MsHashemi = Number(refinePhone("9185085861", iran!.countryCode[0]));

//   const createUsers = async () => {
//     await users.updateOne(
//       { phone: MrHosseini },
//       {
//         $set: {
//           name: "ghost",
//           lastName: "ghost",
//           phone: MrHosseini,
//           gender: "Male",
//           level: ["Admin"],
//           isActive: true,
//           //TODO should be fixed with new correct file structure
//           profilePicture: {
//             _id: new Bson.ObjectID(),
//             filename: "https://picsum.photos/g/200/300",
//             type: faker.lorem.word(1),
//             size: faker.random.number(),
//           },
//         },
//       },
//       { upsert: true },
//     );
//     await users.updateOne(
//       { phone: MrMohammadi },
//       {
//         $set: {
//           name: "ghost",
//           lastName: "ghost",
//           phone: MrMohammadi,
//           gender: "Male",
//           level: ["Admin"],
//           isActive: true,
//           profilePicture: {
//             _id: new Bson.ObjectID(),
//             filename: "https://picsum.photos/g/200/300",
//             type: faker.lorem.word(1),
//             size: faker.random.number(),
//           },
//         },
//       },
//       { upsert: true },
//     );
//     await users.updateOne(
//       { phone: MsHashemi },
//       {
//         $set: {
//           name: "ghost",
//           lastName: "ghost",
//           phone: MsHashemi,
//           gender: "Male",
//           level: ["Admin"],
//           isActive: true,
//           profilePicture: {
//             _id: new Bson.ObjectID(),
//             filename: "https://picsum.photos/g/200/300",
//             type: faker.lorem.word(1),
//             size: faker.random.number(),
//           },
//         },
//       },
//       { upsert: true },
//     );

//     // await users.insertMany(usrArr);
//     return await users
//       .find({ phone: { $in: [MrHosseini, MrMohammadi, MsHashemi] } })
//       .toArray();
//   };

//   return await createUsers();
// }
