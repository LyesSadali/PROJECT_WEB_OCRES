import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Bar } from 'react-chartjs-2';

//Fonction dégradé de couleurs
function colorArc(n)
			{
				var variante = (n%1530)/255;
				var degre = n%255;
				
				
				if(variante < 1 )
				{
				return "rgb(255,"+degre+",0)";
				}
				if(variante < 2 )
				{
				return "rgb("+(255-degre)+",255,0)";
				}
				if(variante < 3 )
				{
				return "rgb(0,255,"+degre+")";
				}
				if(variante < 4 )
				{
				return "rgb(0,"+(255-degre)+",255)";
				}
				if(variante < 5 )
				{
				return "rgb("+degre+",0,255)";
				}
				if(variante < 6 )
				{
				return "rgb(255,0,"+(255-degre)+")";
				}
			}

const CompetitionsGagne = () => {
//Requêtes client
    const [info, setData] = useState([]);
    axios.get('../../bdd.json').then((res) => console.log(res.data));
    useEffect(() => {
        axios.get('../../bdd.json').then((res) => setData(res.data));

    console.log(info);
    }, []);

//Récupération des noms de clubs, nombre de victoires et couleur pour le dégradé
    var data = [];

    for(var i=0;i<info.length;i++)
    {
        var nomClub = []
        var nombreVictoire = []
        var couleur = []

        for(var j=0;j<info[i].lesClubs.length;j++)
        {
            nomClub[nomClub.length] = info[i].lesClubs[j].nom;
            nombreVictoire[nombreVictoire.length] = info[i].lesClubs[j].nombreVictoire;
            couleur[couleur.length] = colorArc(j*40);
        }
//Affichage graphique
        data[data.length] = {
            labels: nomClub,
            datasets: [{
              label: info[i].nomChampionnat,
              data: nombreVictoire,
              backgroundColor: couleur,
              borderColor: couleur,
              borderWidth: 1
            }]
          };
    }
    
    return (
        <div className="widget">
            <h2>Nombre de victoires</h2>
            {data.map((point) => (
                    <Bar data={point}/>
                ))}
            
        </div>
    );
};

export default CompetitionsGagne;