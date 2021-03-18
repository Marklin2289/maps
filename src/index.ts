import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";
// // { } importing multiple components

// // generate a random user
const user = new User();
// console.log(user);

// //generate a random company
const company = new Company();
// console.log(company);

const customMap = new CustomMap("map");
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
