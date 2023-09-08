import React from 'react'

export const Detail = () => {
    return (
        <>
            <div className="container-fluid p-2 px-5 info">
                <div className="row p-5 bat-info">
                    <div className="col-lg-7 ">
                        <h2>Learn about Bat</h2>
                        <ul className='my-4'>
                            <li className='my-2'>Material: Premium grade willow for superior strength and responsiveness.</li>
                            <li className='my-2'>Profile: Balanced design enhances control and powerful strokes.</li>
                            <li className='my-2'>Handle: Comfort grip for optimal swing and shot precision."</li>
                            <li className='my-2'>Weight: Ideal balance ensures effortless maneuverability and controlled hits.</li>
                            <li className='my-2'>Blade: Thick edges deliver maximum power and consistent performance.</li>
                            <li className='my-2'>Grains: Even grains ensure durability and enhanced performance.</li>
                            <li className='my-2'>Grip: Non-slip grip enhances handling and shot execution.</li>
                            <li className='my-2'>Performance: Designed for professional performance and aspiring cricketers.</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 bat-img"></div>
                    <p>In the world of cricket, the bat stands as an iconic symbol of power and precision. Over centuries, it has transformed from a simple tool to a masterpiece of engineering. Crafted meticulously from premium willow, modern cricket bats combine tradition with innovation. The balance between weight and profile has evolved to empower players with agility and control, allowing for mighty shots and delicate strokes. The sweet spot, a batsman's treasure, has been strategically positioned for optimal performance. As cricket continues to capture hearts, the cricket bat remains an unparalleled instrument, reflecting the art and science of the game."</p>
                </div>
                <div className="row p-5 ball-info">
                    <div className="col-lg-7">
                        <h2>Learn about Ball</h2>
                        <ul className='my-4'>
                            <li className='my-2'>Construction: Synthetic leather for consistent performance and durability.</li>
                            <li className='my-2'>Core: Responsive core ensures bounce and accurate deliveries.</li>
                            <li className='my-2'>Seam: Promotes grip, swing, and seam movement for bowlers.</li>
                            <li className='my-2'>Weight: Balanced weight for controlled flight and spin variations.</li>
                            <li className='my-2'>Weight: Balanced weight for controlled flight and spin variations.</li>
                            <li className='my-2'>Weight: Balanced weight for controlled flight and spin variations.</li>
                            <li className='my-2'>Texture: Enhanced grip aids spin, swing, and accurate bowling.</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 ball-img"></div>
                </div>
            </div>
            {/* <div className="container-fluid py-3 all-info">
                <div className="row">
                    <div className="col-lg-5 all-info-tag mx-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Ground Information
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h2>The Heart of Sports: The Significance of the Ground</h2>
                                        <p>A sports ground is more than just a field; it's a canvas where athletic dreams are painted. Whether it's the hush before a football match or the palpable energy of a cricket game, the ground is where emotions collide and history is made. Every inch holds stories of triumph, defeat, and relentless effort.</p>
                                        <p>The ground is a sanctuary for athletes and fans alike. It's where athletes push their limits and where fans pour their hearts out in support. The lush green expanse witnesses the glory of touchdowns, goals, wickets, and centuries. It's where teamwork and individual brilliance converge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        About Batter
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h2>Masters of the Crease: The Art of the Batsman</h2>
                                        <p>In the realm of sports, the batsman holds a unique position. Armed with a cricket bat, they stride onto the field with the weight of expectations and aspirations upon their shoulders. The batsman is not merely a player; they are an artist crafting their strokes, a strategist decoding the bowler's intentions, and a warrior battling the uncertainties of the pitch.</p>
                                        <p>The batsman's stance is a canvas of intent. Every twitch, every adjustment communicates readiness for the duel with the bowler. The crease becomes a sanctuary where they weave tales of resilience and daring. Each shot is a brushstroke, and the field is their masterpiece.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        About Bowler
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h2>Architects of Precision: The Craftsmanship of a Bowler</h2>
                                        <p>In the world of cricket, the bowler is akin to an architect, meticulously constructing deliveries that challenge the batsman's skill and determination. With a ball in hand, they stride to the crease, eyes locked on their target, and strategy mapped out. A symphony of speed, spin, and subtlety, the bowler is a strategist, an artist, and a relentless warrior on the field.</p>
                                        <p>The run-up is their canvas, each step a rhythm of anticipation. With a seamless blend of power and poise, the bowler unleashes their creation. Fast bowlers generate raw velocity, while spinners weave deception with revolutions. Yorkers, bouncers, leg breaks each delivery is a stroke of calculated genius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        About Fielder
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h2>Guardians of the Green: The Artistry of a Fielder</h2>
                                        <p>On the cricket field, the fielder is more than a player; they are the guardians of the green expanse. With agility, anticipation, and lightning reflexes, they transform the field into a canvas of athleticism and precision. The fielder is a sentinel, a tactician, and an acrobat rolled into one, playing an indispensable role in shaping the outcome of the game.</p>
                                        <p>The fielder's eyes are sharp as an eagle's. They lock onto the ball's flight, deciphering its speed and trajectory in a fraction of a second. The catch is an artwork of timing and coordination, converting mere chances into moments of brilliance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Ampire-The Fiar Man
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <h2>Guardians of Fair Play: The Role of the Umpire</h2>
                                        <p>In the theater of cricket, the umpire assumes the role of a silent sentinel, ensuring fairness, order, and the integrity of the game. Clad in white, armed with a keen eye and a resolute demeanor, the umpire is the guardian of the rules, the adjudicator of decisions, and the embodiment of impartiality.</p>
                                        <p>The umpire's signals are a universal language. A raised finger signifies the fall of a wicket, while a sweep of the arms declares a boundary. Their gestures orchestrate the rhythm of the game, guiding players and spectators through the ebb and flow of the match.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Kit that wear in Match
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>A leader ball match, also known as a leather ball match, typically refers to a cricket match played with a hard leather cricket ball. The kit you would need for such a match would include essential cricket equipment to ensure your safety, performance, and comfort. Here's a list of the best kit for a leather ball cricket match</p>
                                        <strong>Cricket Bat</strong>
                                        <strong>Batting Gloves</strong>
                                        <strong>Batting Pads</strong>
                                        <strong>Helmet</strong>
                                        <strong>Thigh Guard and Abdominal Guard</strong>
                                        <strong>Cricket Shoes</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            The Role of Shoes
                                        </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>The role of shoes in hard ball cricket is crucial, as they directly impact a player's performance, safety, and overall comfort on the field. Here are some key aspects of the role of shoes in hard ball cricket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            The Role of Shoes
                                        </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>The role of shoes in hard ball cricket is crucial, as they directly impact a player's performance, safety, and overall comfort on the field. Here are some key aspects of the role of shoes in hard ball cricket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            The Role of Shoes
                                        </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>The role of shoes in hard ball cricket is crucial, as they directly impact a player's performance, safety, and overall comfort on the field. Here are some key aspects of the role of shoes in hard ball cricket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            The Role of Shoes
                                        </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>The role of shoes in hard ball cricket is crucial, as they directly impact a player's performance, safety, and overall comfort on the field. Here are some key aspects of the role of shoes in hard ball cricket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 all-info-img"></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mx-4 py-3">
                    <div className="col-md-4 other-img-1"></div>
                    <div className="col-md-4 other-img-2"></div>
                    <div className="col-md-4 other-img-3"></div>
                </div>
            </div> */}
            <div className="container-fluid" id='all-info'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 all-info">
                            <h1>Regestration Policy</h1>
                            <strong>Understanding the Registration Policy at BCV</strong>
                            <p className='text-justify'>Briefly introduce the cricket academy and its importance in nurturing young cricket talents.Highlight how registration helps in managing resources, tracking progress, and ensuring safety.Discuss the eligibility criteria for potential registrants.Explain the step-by-step procedure for registering at the academy.Provide details about the registration fees and any additional costs, if applicable.List the documents and information needed during the registration process (e.g., birth certificates, medical records, contact information).Encourage potential players and their parents/guardians to go through the policy carefully.Discuss payment methods and deadlines.</p>
                        </div>
                        <div className="col-md-4 register-img">
                            <img src="/image/register-img.png" alt="/" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 practice-session">
                            <img src="/image/practice-Session.jpg" alt="/" />
                        </div>
                        <div className="col-md-8 all-info">
                            <h1>Practice Session</h1>
                            <strong>Maximizing Growth Through Effective Practice Sessions at BCV</strong>
                            <p>Introduce the importance of practice in cricket and its role in skill development.Emphasize how regular practice contributes to a player's overall growth.Emphasize how regular practice contributes to a player's overall growth.Highlight the role of experienced coaches in conducting practice sessions.Discuss the various cricketing skills covered during practice sessions (e.g., batting, bowling, fielding, wicketkeeping).</p>
                            <p>Provide examples of common drills and exercises used during practice sessions.Discuss how technology, such as video analysis, is used to assess and improve player performance.xplain how practice sessions often involve teamwork and match simulations.Highlight the benefits of attending regular practice sessions (e.g., improved skills, increased confidence, networking).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid spons-div py-4">
                <div className="container">
                    <div className="row all-info text-center">
                        <h1>Provide Sponsorship</h1>
                        <strong>"Cricket Sponsorship for the Underprivileged: Bridging the Gap in Sports"</strong>
                        <p>Introduce the concept of cricket sponsorship for underprivileged individuals.Highlight the importance of such initiatives in promoting inclusivity and talent development.Preview the key aspects to be discussed in the article.Provide guidance on how individuals, cricket academies, or organizations can find sponsors for cricket initiatives.Share tips on building meaningful partnerships with potential sponsors in the cricketing world.</p>
                        <div className="row my-3">
                            <div className="col-md-7">
                                <strong className='text-start my-2'>Discuss the steps involved in establishing a cricket sponsorship</strong>
                                <ul className='text-start mx-5 my-2'>
                                    <li>Identifying deserving cricket talents.</li>
                                    <li>Budgeting for equipment, training, or educational support.</li>
                                    <li>Defining program goals and metrics.</li>
                                </ul>
                                <strong className='text-start my-2'>Discuss various types of cricket sponsorship programs, including:</strong>
                                <ul className='text-start mx-5 my-2'>
                                    <li>Equipment sponsorship.</li>
                                    <li>Coaching and training sponsorships.</li>
                                    <li>Tournament participation sponsorships.</li>
                                    <li>Educational support for young cricketers.</li>
                                </ul>
                            </div>
                            <div className="col-md-5 spons-img">
                                <img src="/image/spons-img.jpg" alt="/" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
