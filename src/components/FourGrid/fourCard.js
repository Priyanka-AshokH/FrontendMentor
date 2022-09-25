import Supervisor from "./images/icon-supervisor.svg"
import TeamBuilder from "./images/icon-team-builder.svg"
import Karma from "./images/icon-karma.svg"
import Calculator from "./images/icon-calculator.svg"

const FourCard = () => {
    const cardData = [
        {
            title: "Supervisor",
            subTitle: "Monitors activity to identify project roadblocks",
            img: Supervisor,
            color: "hsl(212, 86%, 64%)"
        },
        {
            title: "Team Builder",
            subTitle: "Scans our talent network to create the optimal team for your project",
            img: TeamBuilder,
            color: "hsl(0, 78%, 62%)"
        },
        {
            title: "Karma",
            subTitle: "Regularly evaluates our talent to ensure quality",
            img: Karma,
            color: "hsl(180, 62%, 55%)"
        },
        {
            title: "Calculator",
            subTitle: "Uses data from past projects to provide better delivery estimates",
            img: Calculator,
            color: "hsl(34, 97%, 64%)"
        }
    ]
    return (
        <div className="main-container">
            <h1 className="heading-1">Reliable, efficient delivery</h1>
            <h1 className="heading-2">Powered by Technology</h1>
            <p className="sub-heading"> Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            <div className="mainGrid">
                <div className="cardWrapper" style={{ borderTopColor: `hsl(212, 86%, 64%)` }}>
                    <div className="headingContainer">
                        <h3>Supervisor</h3>
                        <p>Monitors activity to identify project roadblocks</p>
                    </div>
                    <div className="imgContainer">
                        <img src={Supervisor} alt={"Supervisor"} />
                    </div>
                </div>

                <div className="MiddleGrid">

                    <div className="cardWrapper" style={{ borderTopColor: `hsl(0, 78%, 62%)` }}>
                        <div className="headingContainer">
                            <h3>Team Builder</h3>
                            <p>Scans our talent network to create the optimal team for your project</p>
                        </div>
                        <div className="imgContainer">
                            <img src={TeamBuilder} alt={"TeamBuilder"} />
                        </div>
                    </div>

                    <div className="cardWrapper" style={{ borderTopColor: `hsl(180, 62%, 55%)` }}>
                        <div className="headingContainer">
                            <h3>Karma</h3>
                            <p>Regularly evaluates our talent to ensure quality</p>
                        </div>
                        <div className="imgContainer">
                            <img src={Karma} alt={"Karma"} />
                        </div>
                    </div>

                </div>
                <div className="cardWrapper" style={{ borderTopColor: `hsl(34, 97%, 64%)` }}>
                    <div className="headingContainer">
                        <h3>Calculator</h3>
                        <p>Uses data from past projects to provide better delivery estimates</p>
                    </div>
                    <div className="imgContainer">
                        <img src={Calculator} alt={"Calculator"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FourCard