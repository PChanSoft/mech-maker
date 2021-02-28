import React, {useEffect,useState} from 'react';
import axios from 'axios';
import '../index.css'
function Mechs() {


const mechURL='https://mech-maker.herokuapp.com/'

// const mechURL='http://localhost:8080/'
  const [mechs,setMechs] = useState(null);
  async function getMech(){
    try{
      const res = await axios.get(mechURL+'mechs');
      setMechs(res.data);
    }catch(e){
      console.error(e,e.message);
    }
  }
  useEffect(() => {
    getMech();
  }, [])

  const [form, setForm] = useState(null);

  function handleChange(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value});
  }

  function handleSubmit(e){
    e.preventDefault();
    createMech();
  }

  async function createMech(){
    try{
      const res = await axios.post(mechURL+'mechs', form);
      const headRes= await axios.post(mechURL+'heads',head(form));
      setMechs([...mechs, res.data]);
    }catch(e){
      console.error(e,e.messaage);
    }
  }

  const [selectedMech, setSelectedMech] = useState(null);

  function selectMech(mech){
    setSelectedMech(mech)
  }

  function handleEditChange(e){
    const {name,value} = e.target;
    setSelectedMech({...selectedMech, [name]: value});
  }

  async function handleEditSubmit(e){
    e.preventDefault();
    try{
      const res = await axios.patch(mechURL+'mechs', selectedMech);
      console.log(res.data);
      getMech();
    }catch(e) {
      console.error(e,e.message);
    }
  }
  async function deleteMech(mechId){
    try{
      const res = await axios.delete(mechURL+'mechs/'+mechId);
      getMech();
    }catch(e){
      console.error(e,e.message);
    }
  }

  return (
    <div>
      {mechs && mechs.map( mech => <Mech mech={ mech } selectMech={selectMech} deleteMech={ deleteMech } />)}
      <div> Mech Maker</div>
      <form className="mechForm" onChange={(e) => handleChange(e)}
      onSubmit= {(e) => handleSubmit(e)}>
        <label>
          Mech Name:
          <input type="text" name="modelName" />
        </label>
        <div className="headBox">
        <label>
          Head Name:
          <input type="text" name="headName" />
        </label>
        <label>Head Defense:
          <input type="number" name="headDefense" min="1" max="100"/>
        </label>
        <label>Head Vision:</label>
          <input type="number" name="vision" min="1" max="100"/>
        </div>
        <div className="torsoBox">
        <label>
          Torso Name:
          <input type="text" name="torsoName" />
        </label>
        <label>Torso Defense:</label>
        <input type="number" name="torsoDefense" min="1" max="100"/>
        <label>Torso Cooling:</label>
        <input type="number" name="cooling" min="1" max="100"/>
        </div>
        <div className="armsBox">
        <label>
          Arms Name:
          <input type="text" name="armsName" />
        </label>
        </div>
        <div className="legsBox">
        <label>
          Legs Name:
          <input type="text" name="legsName" />
        </label>
        </div>
        <input type="submit" value="Make Mech" />
      </form>
      {selectedMech && <form
      onChange={(e)=>handleEditChange(e)}
      onSubmit={(e)=>handleEditSubmit(e)}>
        <label>
          Mech Name:
          <input type="text" name="modelName" defaultValue={selectedMech.modelName} />
        </label>
        <label>
          Head Name:
          <input type="text" name="headName" defaultValue={selectedMech.headName} />
        </label>
        <label>
          Torso Name:
          <input type="text" name="torsoName" defaultValue={selectedMech.torsoName} />
        </label>
        <label>
          Arms Name:
          <input type="text" name="armsName" defaultValue={selectedMech.armsName} />
        </label>
        <label>
          Legs Name:
          <input type="text" name="legsName" defaultValue={selectedMech.legsName} />
        </label>
        <input type="submit" value="Modify Mech" />
        </form>
        }

    </div>
  );
}
function Mech({ mech, selectMech, deleteMech}){
  return (
    <div>
      <h3>{mech.modelName}{console.log(mech)}</h3>
      <h6>Contains the following Parts</h6>
      <ul>
        <li>Head: {mech.headName}</li>
        <li>Torso: {mech.torsoName}</li>
        <li>Arms: {mech.armsName}</li>
        <li>Legs: {mech.legsName}</li>
      </ul>
      <button onClick={() => selectMech(mech)} >Modify Mech</button>
      <button onClick={() => deleteMech(mech.id)}>Remove Mech</button>
    </div>
  )
}
function head(form){
  let filter={
    name:form.headName,
    defense:form.headDefense,
    vision:form.vision
  }
  return filter;
}
function torso(form){
  let filter={
    name:form.torsoName,
    defense:form.torsoDefense,
    cooling:form.cooling
  }
  return filter;
}
// function arms(form){
//   let filter={
//     name:form.armsName,
//     defense:form.armsDefense,
//     strength:form.strength
//   }
//   return filter;
// }
// function legs(form){
//   let filter={
//     name:form.legsName,
//     defense:form.legsDefense,
//     speed:form.speed
//   }
//   return filter;
// }
export default Mechs;
