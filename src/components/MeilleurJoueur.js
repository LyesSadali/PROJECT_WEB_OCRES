import React, {useEffect, useState} from 'react';
import axios from "axios";

const MeilleurJoueur = () => {
//Requêtes client
    const [data, setData] = useState([]);
    axios.get('../../bdd.json').then((res) => console.log(res.data));
    useEffect(() => {
        axios.get('../../bdd.json').then((res) => setData(res.data));

        

    console.log(data);
    }, []);
//Récupération des logos de clubs et nom du meilleur joueur
    var lesClubs = []
    var i;
    var j;

    var compteur = 0;

    for(i=0;i<data.length;i++){
        for(j=0;j<data[i].lesClubs.length;j++){
            lesClubs[compteur] = ["./logos/" + data[i].lesClubs[j].nomLogo,data[i].lesClubs[j].meilleurJoueur];
            compteur++;
        }
    }

    console.log(lesClubs)

    return (
        <div className="widget">
            <h2>Meilleur joueur par club</h2> 
            <ul className="classement-list">
                {lesClubs.map((championnat) => (
                    <li className="ligneClassement">
                        <img className="logo" src={championnat[0]} alt="logo"/> <p className="point">{championnat[1]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeilleurJoueur;