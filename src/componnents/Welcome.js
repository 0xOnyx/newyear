
import  ReactAnime   from 'react-animejs'

import './Welcome.css'

const {Anime} = ReactAnime;

function Welcome()
{
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 700;
    ml4.durationOut = 500;
    ml4.delay = 800;

    return (
        <div className="Welcome">
            <Anime
                initial={
                    [
                        {
                            targets: '.ml4 .letters-1',
                            opacity: ml4.opacityIn,
                            scale: ml4.scaleIn,
                            duration: ml4.durationIn
                        },
                        {
                            targets: '.ml4 .letters-1',
                            opacity: 0,
                            scale: ml4.scaleOut,
                            duration: ml4.durationOut,
                            easing: "easeInExpo",
                            delay: ml4.delay
                        },
                        {
                            targets: '.ml4 .letters-2',
                            opacity: ml4.opacityIn,
                            scale: ml4.scaleIn,
                            duration: ml4.durationIn
                        },
                        {
                            targets: '.ml4 .letters-2',
                            opacity: 0,
                            scale: ml4.scaleOut,
                            duration: ml4.durationOut,
                            easing: "easeInExpo",
                            delay: ml4.delay
                        },
                        {
                            targets: '.ml4 .letters-3',
                            opacity: ml4.opacityIn,
                            scale: ml4.scaleIn,
                            duration: ml4.durationIn
                        },
                        {
                            targets: '.ml4 .letters-3',
                            opacity: 0,
                            scale: ml4.scaleOut,
                            duration: ml4.durationOut,
                            easing: "easeInExpo",
                            delay: ml4.delay
                        },
                        {
                            targets: '.ml4 .letters-4',
                            opacity: ml4.opacityIn,
                            scale: ml4.scaleIn,
                            duration: ml4.durationIn
                        },
                        {
                            targets: '.ml4 .letters-4',
                            opacity: 0,
                            scale: ml4.scaleOut,
                            duration: ml4.durationOut,
                            easing: "easeInExpo",
                            delay: ml4.delay
                        },
                        {
                            targets: '.ml4 .letters-5',
                            opacity: ml4.opacityIn,
                            scale: ml4.scaleIn,
                            duration: ml4.durationIn
                        },
                        {
                            targets: '.ml4 .letters-5',
                            opacity: 0,
                            scale: ml4.scaleOut,
                            duration: ml4.durationOut,
                            easing: "easeInExpo",
                            delay: ml4.delay
                        },

                        {
                            targets: '.ml4',
                            opacity: 0,
                            duration: 500,
                            delay: 500
                        },
                    ]
                }
            >
                <h1 className="ml4">
                    <span className="letters letters-1">Voila🥳</span>
                    <span className="letters letters-2">C'est 2023🤩</span>
                    <span className="letters letters-3">Laissez derrière vous les problèmes de l'année passée!</span>
                    <span className="letters letters-4">Que cette nouvelle année soit pleine de bonheur, de santé et de prospérité.😁</span>
                    <span className="letters letters-5">Bonne année à tous!🔥</span>
                </h1>
            </Anime>
        </div>
    )
}

export default Welcome;
