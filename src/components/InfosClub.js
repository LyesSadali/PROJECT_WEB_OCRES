import React from 'react';
import axios from 'axios';

export default class CallApi extends React.Component {

	constructor(props) {
		super(props);
		this.state = { joueur: "",
					   naissance:"",
					   nationnalite:"",
					   poste:""
					 };
	}

	recupInfoJoueurs() {
		var myHeaders = new Headers();
		myHeaders.append("X-Auth-Token","f9475c7dc1df466b965ffe2a72d2f4a7");

		var obj = {
			method: "GET",
			headers: myHeaders,
			mode: "cors",
			cache: "default"
		};

		
		fetch("https://api.football-data.org//v2/players/44",obj)
			.then(res => res.json())
			.then(res => this.setState({ 
				joueur: res.name,
				naissance: res.dateOfBirth,
				nationnalite: res.nationality,
				poste: res.position
			}));
	}

	componentDidMount() {
		this.recupInfoJoueurs();
	}

    render(){
        return(
            <div className = "widget">
            	<h2>Infos meilleur joueur du monde</h2>
			   	 <p style={{textAlign:"center"}}>
              		{this.state.joueur}<br></br>
			   		{this.state.naissance}<br></br>
			   		{this.state.nationnalite}<br></br>
			   		{this.state.poste}<br></br>
			   	</p>
            </div>
        )
    }
}
