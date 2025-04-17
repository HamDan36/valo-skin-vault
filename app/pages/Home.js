// import React, { useEffect, useState } from 'react';
// import { getAllSkins } from '../services/valorantAPI';
// import SkinCard from '../components/SkinCard';

// function Home() {
//   const [skins, setSkins] = useState([]);

//   useEffect(() => {
//     getAllSkins().then(setSkins);
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {skins.map((skin) => (
//         <SkinCard key={skin.uuid} skin={skin} />
//       ))}
//     </div>
//   );
// }

// export default Home;
