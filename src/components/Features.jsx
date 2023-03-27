import React from 'react';
import featureimage from '../images/skills.png';

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>

            <img src={featureimage} alt="feature-image" />

        </div>

        <div className='features-text'>
            <h2>Skills</h2>
            <h4>When love and skill work together, expect a masterpiece.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae excepturi enim animi doloribus sint culpa, pariatur fuga quibusdam? Autem unde, accusantium odit nihil illum tempora adipisci repudiandae quos laboriosam ipsam tempore nesciunt perferendis similique repellendus reprehenderit ut neque atque omnis placeat consequuntur temporibus consequatur quae veritatis itaque! Repellat, assumenda nihil.</p>
            <button>View My Portfolio</button>
        </div>

    </div>
  )
}

export default Features;