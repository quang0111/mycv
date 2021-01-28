import React from 'react';
import { Progress } from 'reactstrap';

const Skill = () => {
 return (
  <>
   <div className="mySkill">
     <div className="container">
     <div className=""> -- HTML :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>
      <div className=""> -- CSS/CSS3 :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>
      <div className=""> -- Javascript :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>
      <div className=""> -- React js :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>
      <div className=""> -- Angular :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>
      <div className=""> -- More :
       <Progress className="progress" value="85"> 85% </ Progress>
      </div>

     </div>
    </div>
  </>
 )
}

export default Skill
