import React from "react";
import { useEffect, useState } from "react";
import Item from "../../components/Item/item";
import "../../components/Container/itemList.css";
import { useParams } from "react-router-dom";
import "../../components/card2.css";
import {
  collection,
  query,
  where,
  getDocs,
  
} from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const BlackAndWhite = () => {
 
  const { style } = useParams();
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
      const getPaintings = async () => {
      const q = query(collection(db, "paintings"), where ('style', "==", style ));
      const docs = [] ;
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPaintings(docs);
    };

    getPaintings();
  }, [style]);

  return (
    <div>
      <div className="ItemList-container">
        {paintings.map((item) => {
          return (
            <div key={item.id}>
              <Item data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlackAndWhite;