// // API call to square

// // Will make two calls
// // GET - Gathers the catalog and products information
// // POST - Send the cart information back to square

// // Global Variables needed for square
// const { Client, Environment } = require("square");
// const client = new Client({
//   accessToken: process.env.ACCESS_TOKEN,
//   environment: Environment.Sandbox,
// });

// const { catalogApi } = client;

// // Global Variables Returning
// let services = {
//   Car: {
//     serviceName: "Car",
//     catalogId: undefined,
//     services: [],
//   },
//   SUV: {
//     serviceName: "SUV",
//     catalogId: undefined,
//     services: [],
//   },
//   Truck: {
//     serviceName: "Truck",
//     catalogId: undefined,
//     services: [],
//   },
// };

// // GET FUNCTION
// export async function GET(request: Request) {
//   // Clears Data to prevent ant duplicate
//   // Clears CatalogID first
//   services.Car.catalogId = undefined;
//   services.Car.services = [];
//   services.SUV.catalogId = undefined;
//   services.SUV.services = [];
//   services.Truck.catalogId = undefined;
//   services.Truck.services = [];

//   try {
//     let listCatalogResponse = await catalogApi.listCatalog(
//       undefined,
//       "CATEGORY"
//     );
//     let catalogs = listCatalogResponse.result.objects;

//     // Gets all the catalog IDS
//     for (let i = 0; i < catalogs.length; i++) {
//       // Checks if catalog name matches and isn't deleted
//       if (
//         services.Car.serviceName.toLowerCase() ==
//           catalogs[i].categoryData.name.toLowerCase() &&
//         catalogs[i].isDeleted == false
//       ) {
//         services.Car.catalogId = catalogs[i].id;
//       } else if (
//         services.SUV.serviceName.toLowerCase() ==
//           catalogs[i].categoryData.name.toLowerCase() &&
//         catalogs[i].isDeleted == false
//       ) {
//         services.SUV.catalogId = catalogs[i].id;
//       } else if (
//         services.Truck.serviceName.toLowerCase() ==
//           catalogs[i].categoryData.name.toLowerCase() &&
//         catalogs[i].isDeleted == false
//       ) {
//         services.Truck.catalogId = catalogs[i].id;
//       }
//     }

//     listCatalogResponse = await catalogApi.listCatalog(undefined, "ITEM");
//     catalogs = listCatalogResponse.result.objects;

//     for (let i = 0; i < catalogs.length; i++) {
//       //   console.log(catalogs.length);
//       //   console.log(catalogs[i].itemData.categories[0].id);
//       if (catalogs[i].itemData.categories[0].id == services.Car.catalogId) {
//         services.Car.services.push(catalogs[i]);
//       } else if (
//         catalogs[i].itemData.categories[0].id == services.SUV.catalogId
//       ) {
//         services.SUV.services.push(catalogs[i]);
//       } else if (
//         catalogs[i].itemData.categories[0].id == services.Truck.catalogId
//       ) {
//         services.Truck.services.push(catalogs[i]);
//       }
//     }

//     // catalogs.forEach((item) => {
//     //   console.log(item.itemData.categories[0].id);
//     //   if (item.itemData.categories[0].id == services.Car.catalogId) {
//     //     services.Car.services.push(item);
//     //   } else if (item.itemData.categories[0].id == services.SUV.catalogId) {
//     //     services.SUV.services.push(item);
//     //   } else if (item.itemData.categories[0].id == services.Truck.catalogId) {
//     //     services.Truck.services.push(item);
//     //   }
//     // });

//     // console.log(services.Car.services);

//     //

//     // DO NOT DELETE
//     // IT IS NEEDED TO CONVERT DATA INTO A JSON
//     BigInt.prototype.toJSON = function () {
//       return this.toString();
//     };

//     return Response.json(services);
//   } catch (err) {
//     console.log("ERROR!:", err);
//   }
// }
