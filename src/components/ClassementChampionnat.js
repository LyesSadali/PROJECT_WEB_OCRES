import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Bar } from "react-chartjs-2"


const ClassementChampionnat = () => {
//Requetes Client
    const [data, setData] = useState([]);
    axios.get('../../bdd.json').then((res) => console.log(res.data));
useEffect(() => {
    axios.get('../../bdd.json').then((res) => setData(res.data));

    

   console.log(data);
}, []);

//Récupération du logo des équipes avec le nombre de points correspondant
var lesClubs = []
var i;
var j;

var compteur = 0;

for(i=0;i<data.length;i++){
    for(j=0;j<data[i].lesClubs.length;j++){
        lesClubs[compteur] = ["./logos/" + data[i].lesClubs[j].nomLogo,parseInt(data[i].lesClubs[j].nombrePoints,10)];
        compteur++;
    }
}
sort(lesClubs)
//Tri par ordre décroissant en points pour le classement
function sort(tab){
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément maximum
      var max = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j][1] > tab[max][1]){
         // mettre à jour l'index de l'élément maximum
         max = j; 
        }
      }
      console.log(tab[max])
      var tmp = tab[i];
      tab[i] = tab[max];
      tab[max] = tmp;
    }
    return tab;
  };



    return (
        <div className="widget">
            <h2>Classement Championnat</h2> 
            <ul className="classement-list">
                {lesClubs.map((championnat) => (
                    <li className="ligneClassement">
                        <img className="logo" src={championnat[0]} alt="logo"/> <p className="point">{championnat[1]} points</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassementChampionnat;