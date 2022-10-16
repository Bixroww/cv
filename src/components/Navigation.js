import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/pp.jpg" alt="Profil-Pic-Mehdi" />
          <h3> Mehdi Lemaire</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
              <i className="fas fa-suitcase" ></i>
              
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/References" activeClassName="navActive">
              <i className="fas fa-address-card"></i>
              <span>Contactez-moi !</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
            <li>
                <a href="https://twitter.com/Mehdi_rJS" target=" _blank" rel="noopener noreferrer"> <i className="fab fa-twitter">
                    </i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/mehdi-lemaire-14111a231/" target=" _blank" rel="noopener noreferrer"> <i className="fab fa-linkedin">
                    </i></a>
            </li>
            <li>
                <a href="https://github.com/Bixroww" target=" _blank" rel="noopener noreferrer"> <i className="fab fa-github">
                    </i></a>
            </li>
            <li>
                <a href="https://www.behance.net/mehdilemaire" target=" _blank" rel="noopener noreferrer"> <i className="fab fa-behance">
                    </i></a>
            </li>
        </ul>
        <div className="signature">
            <p>
                Lemaire Mehdi - 2022
            </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
