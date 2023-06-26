import React, { useState }  from 'react'
import "./JobFilter.css"

export default function JobFilter() {
    const [urgentChecked, setUrgentChecked] = useState(false);
    const [partTime, setPartTime] = useState(false);
    const [fullTime, setFullTime] = useState(false);
    const [crafting, setCrafting] = useState(false);
    const [homeImprovment, setHomeImprovment] = useState(false);
    const [gardening, setGardening] = useState(false);
    const [cookingBaking, setCookingBaking] = useState(false);
    const [upcycling, setUpcycling] = useState(false);
    const [sewingKnitting, setSewingKnitting] = useState(false);

    const handleClearAll = () => {
        setUrgentChecked(false);
        setPartTime(false);
        setFullTime(false);
        setCrafting(false);
        setHomeImprovment(false);
        setGardening(false);
        setCookingBaking(false);
        setUpcycling(false);
        setSewingKnitting(false);
      };

      const handleClearAvailability = () => {
        setUrgentChecked(false);
        setPartTime(false);
        setFullTime(false);
      };
      
      const handleClearExperience = () => {
        setCrafting(false);
        setHomeImprovment(false);
        setGardening(false);
        setCookingBaking(false);
        setUpcycling(false);
        setSewingKnitting(false);
      };
      
      


  return (
    <>
    <div id='jobFilter'>
        <div className="title-filter flex justify-between items-center">
        <h3>Job Filter</h3>
        <h4 className="blu clickable" onClick={handleClearAll}>Clear All</h4>
        </div>
        <div className="title-filter flex justify-between">
        <h4>Availability</h4>
        <h4 className="blu clickable" onClick={handleClearAvailability}>Clear</h4>
        </div>
       
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={urgentChecked}
             onChange={() => setUrgentChecked(!urgentChecked)}
             className="checkbox checkbox-xs"
           />
           <p>Urgent</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={partTime}
             onChange={() => setPartTime(!partTime)}
             className="checkbox checkbox-xs"
           />
           <p>Partime</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={fullTime}
             onChange={() => setFullTime(!fullTime)}
             className="checkbox checkbox-xs"
           />
           <p>Full-time</p>
         </div>

         <div className="title-filter flex justify-between">
        <h4>Experience</h4>
        <h4 className="blu clickable" onClick={handleClearExperience}>Clear</h4>
        </div>
        <div className="text-sm flex">
           <input
             type="checkbox"
             checked={crafting}
             onChange={() => setCrafting(!crafting)}
             className="checkbox checkbox-xs"
           />
           <p>Crafting</p>
         </div>
        <div className="text-sm flex">
           <input
             type="checkbox"
             checked={homeImprovment}
             onChange={() => setHomeImprovment(!homeImprovment)}
             className="checkbox checkbox-xs"
           />
           <p>Home Improvment</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={gardening}
             onChange={() => setGardening(!gardening)}
             className="checkbox checkbox-xs"
           />
           <p>Full-time</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={cookingBaking}
             onChange={() => setCookingBaking(!cookingBaking)}
             className="checkbox checkbox-xs"
           />
           <p>Cooking and Baking</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={upcycling}
             onChange={() => setUpcycling(!upcycling)}
             className="checkbox checkbox-xs"
           />
           <p>Upcycling</p>
         </div>
         <div className="text-sm flex">
           <input
             type="checkbox"
             checked={sewingKnitting}
             onChange={() => setSewingKnitting(!sewingKnitting)}
             className="checkbox checkbox-xs"
           />
           <p>Sewing and Knitting</p>
         </div>
         
         </div>
</>
  )
}
