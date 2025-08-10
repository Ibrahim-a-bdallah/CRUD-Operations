// library used to generate fake data 
// الملف دا فيه داتا وهميه هستخدمها للتيست بس عما اجيب الداتا من (api)

// Deleted sooooon

// import { faker } from "@faker-js/faker/.";
import { faker } from "@faker-js/faker"

// export const payments = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//   }
  
// ]



const createUser = (numUser) => {

                const users = [];

                for (let i = 0; i < numUser; i++) {

                    users.push({
                        requestNo: faker.string.uuid().slice(0, 8),
                        area: faker.location.city(),
                        date: faker.date.past().toLocaleDateString(),
                        needDate: faker.date.future().toLocaleDateString(),
                        price: faker.finance.amount(50, 500, 2),
                        total: faker.finance.amount(100, 1000, 2),
                        materials: faker.commerce.productName(),
                        action: "Action",
                        status: "fine",
                    });

                }                
                return users;
                
                
};

export const data= [

    ...createUser(50)

];