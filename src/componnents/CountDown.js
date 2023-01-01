import "./CountDown.css"

function CountDown({date})
{

    let endtime = ((new Date()).getFullYear()+1) + "/1/1";
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return(
        <div className="continer centerIt">

            <div>
                <label className="project-title">NEW YEAR 2023</label>
                <label className="project-name">🔥2023🔥</label></div>
            <div className="counter">
                <div className="days">
                    <div className="value">{days}</div>
                    <span>Days</span>
                </div>

                <div className="hours">
                    <div className="value">{hours}</div>
                    <span>Hours</span>
                </div>

                <div className="minutes">
                    <div className="value">{minutes}</div>
                    <span>Minutes</span>
                </div>

                <div className="seconds">
                    <div className="value">{seconds}</div>
                    <span>Seconds</span>
                </div>

            </div>
        </div>
    )
}

export default CountDown