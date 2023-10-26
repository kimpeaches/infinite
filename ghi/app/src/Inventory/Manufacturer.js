// import React, { useEffect, useState } from 'react';

// function ManufacturerList() {

//     const [manufacturer, setManufacturer] = useState([])

//     const getData = async () => {
//         const response = await fetch("http://localhost:8100/api/manufacturers/");
//         if (response.ok) {
//             const data = await response.json();
//             setManufacturer(data.manufacturer)
//         }
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//       <div className="container">
//         <h2 className="text-center">Customers</h2>
//         <table className="table table-striped table-bordered">
//           <thead>
//             <tr>
//               <th className="text-left">First Name</th>
//               <th className="text-left">Last Name</th>
//               <th className="text-left">Phone Number</th>
//               <th className="text-left">Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customer.map((customer) => (
//               <tr key={customer.id}>
//                 <td className="text-left">{customer.first_name}</td>
//                 <td className="text-left">{customer.last_name}</td>
//                 <td className="text-left">{customer.phone_number}</td>
//                 <td className="text-left">{customer.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//     };


// export default ManufacturerList;
