import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Chart as ChartJS } from 'chart.js/auto'
import { Pie }             from 'react-chartjs-2'

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

const JoueurFrancais = () => {

    const [info, setData] = useState([]);
    axios.get('../../bdd.json').then((res) => console.log(res.data));
    useEffect(() => {
        axios.get('../../bdd.json').then((res) => setData(res.data));

    console.log(info);
    }, []);


    var nomChamp = []
    var joueurFrance = []
    var couleur = []
    for(var i=0;i<info.length;i++)
    {
        nomChamp[nomChamp.length] = info[i].nomChampionnat;
        joueurFrance[joueurFrance.length] = parseInt(info[i].pourcentageFrancais, 10);
        couleur[couleur.length] = colorArc(i*220);
    }

    const data = {
        labels: nomChamp,
        datasets: [{
          label: 'Les joueurs francais',
          data: joueurFrance,
          backgroundColor: couleur,
          hoverOffset: couleur.length
        }]
      };

    return (
        <div className="widget contenerPie">
            <h2>Les joueurs Français en championnat</h2>
            <div className="Pie">
                <Pie data={data} />
            </div>
               
        </div>
    );
};

export default JoueurFrancais;