import React, {useEffect, useState} from 'react';
import axios from "axios";

const RechercheMatchs = () => {
    const [data, setData] = useState([]);
    //Requêtes Client
    axios.get('../../bdd.json').then((res) => console.log(res.data));
    useEffect(() => {
        axios.get('../../bdd.json').then((res) => setData(res.data));

    console.log(data);
    }, []);

    return (
        <div className="widget">
            <h2>Nombre moyen spectateurs par match</h2>
            <ul>
            {data.map((data) => (
                    <li className="ligneClassement">
                        <p>- {data.nomChampionnat} : {data.nombreSpectateurs} spectateurs</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RechercheMatchs;