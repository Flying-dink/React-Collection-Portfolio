import readmylipsIMG from '../images/lips-app.png'
import MyadventureAppIMG from "../images/myadventure.png"
import noteTakerIMG from "../images/notetaker.png"
import ReadmeIMG from "../images/readme.png"
import teamprofileIMG from "../images/teamprofile.png"
import employeetrackerIMG from "../images/employeetracker.png"

import "../styles/project.css"
const Projects = () => {
    return (
        <div className="project">
            <div className="projectDiv">
                <h1 className="projectTitle">Read My Lips</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/Read-My-Lips" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://flying-dink.github.io/Read-My-Lips/" target="_blank">
                    <img src={readmylipsIMG} className="projectImage" alt="Read My lips" />
                </a>
                <h3 className="projectText">Read my lips is a game where one can read another's lips by guessing.  Great for parties and entertaining</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">MyAdventure App</h1>
                <h2 className="projectTitle"><a href="https://github.com/NukaGrizz/MyAdventure" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://myadventureteam.herokuapp.com/" target="_blank">
                    <img src={MyadventureAppIMG} className="projectImage" alt="My adventure App" />
                </a>
                <h3 className="projectText">This application is a social media site where one can post about adventures, and share travel experiences.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Note Taker</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/Note-Taker" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://note-taker-app-2021.herokuapp.com/" target="_blank">
                    <img src={noteTakerIMG} className="projectImage" alt="note taker" />
                </a>
                <h3 className="projectText">This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.</h3>
            </div>
        
            <div className="project">
            <div className="projectDiv">
                <h1 className="projectTitle">Readme Generator</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/README-Generator" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://drive.google.com/file/d/1xD_3LtBa42svZO0PhK_L3hozq0_CvQmP/view=" target="_blank">
                    <img src={ReadmeIMG} className="projectImage" alt="Readme generator" />
                </a>
                <h3 className="projectText">An app that produces a professional Readme</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">Team Profile Generator</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/Team-Profile-Generator" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://drive.google.com/file/d/1BuIsQhPMTOYiApiiJi7bnnG5Up6NWBN3/view " target="_blank">
                    <img src={teamprofileIMG} className="projectImage" alt="team profile generator" />
                </a>
                <h3 className="projectText">A command line app that generates profiles for team members.</h3>
            </div>
            <div className="projectDiv">
                <h1 className="projectTitle">SQL-Employee-Tracker</h1>
                <h2 className="projectTitle"><a href="https://github.com/Flying-dink/SQL-Employee-Tracker" className="linkStyles" target="_blank">Github</a></h2>
                <a href="https://watch.screencastify.com/v/i8m5WdQqborSzZjtz7g7" target="_blank">
                    <img src={employeetrackerIMG} className="projectImage" alt="SQL-Employee-Tracker" />
                </a>
                <h3 className="projectText">A command-line application to manage a company's employee database using Node.js, Inquirer and MySQL.</h3>
            </div>
        
                  

        

            

        </div>

            
            </div>
        
   )
}

export default Projects