import React from "react";
import Navigation from "../components/Navigation.js";

const Admin = () => {
    return (
      <div className="admin-container" style={{textAlign:"center"}}>
        <Navigation/>
        <h1 style={{color:"white"}}>Administration</h1>
        <div className="card-body">
                    <form>
                        <center>
                            <input type="text" className="form-control" name="nomclub" placeholder="Nom du Club" /><br></br><br></br>
                            <input type="text" className="form-control" number="numD" placeholder="Date de Création" /><br></br><br></br>
                            <input type="text" className="form-control" number="numV" placeholder="Nombre de victoires" /><br></br><br></br>
                            <input type="text" className="form-control" number="numP" placeholder="Nombre de points" /><br></br><br></br>
                            <input type="text" className="form-control" name="meilleurjoueur" placeholder="Meilleur Joueur" /><br></br><br></br>
                            <select name="statut" className="form-control">
                                <option value="PL" >Première League</option>
                                <option value="B" >Bundesliga</option>
                                <option value="L" >Liga</option>
                                <option value="S" >Serie A</option>
                                <option value="LF" >Ligue 1</option>
                            </select><br></br><br></br>
                            <button type="submit" className="btn btn-success bouton2">Envoyer à l'API</button>
                        </center>
                    </form>
          </div>
      </div>
    );
  };
  
  export default Admin;