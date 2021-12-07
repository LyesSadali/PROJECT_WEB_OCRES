import React from 'react';
import ClassementChampionnat from '../components/ClassementChampionnat';
import CompetitionsGagne from '../components/CompetitionsGagne';
import InfosClub from '../components/InfosClub';
import JoueurFrancais from '../components/JoueurFrancais';
import MatchsAVenir from '../components/MeilleurJoueur';
import RechercheMatchs from '../components/RechercheMatchs';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="header">
            <Header/>
            <Navigation/>
            <div class="lesWidgets">
                <div className="coloneWidgets1">
                   <ClassementChampionnat />
                 </div>
                 <div className="coloneWidgets2">
                  <JoueurFrancais />
                  <MatchsAVenir />
                </div>
                <div className="coloneWidgets2">
                    <CompetitionsGagne />
                    <InfosClub />
                    <RechercheMatchs />
                </div>
            
             </div>
        </div>
    );
};

export default Home;