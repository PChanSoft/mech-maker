import React, {useEffect,useState} from 'react';
import axios from 'axios';
import '../index.css'
function Mechs() {
// const mechURL='https://mech-maker.herokuapp.com/mechs'
const mechURL='http://localhost:8080/mechs'
  const [mechs,setMechs] = useState(null);
  async function getMech(){
    try{
      const res = await axios.get(mechURL);
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
      const res = await axios.post(mechURL, form);
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
      const res = await axios.patch(mechURL, selectedMech);
      console.log(res.data);
      getMech();
    }catch(e) {
      console.error(e,e.message);
    }
  }
  async function deleteMech(mechId){
    try{
      const res = await axios.delete(mechURL+'/'+mechId);
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
        <label>
          Head Name:
          <input type="text" name="headName" />
        </label>
        <label>
          Torso Name:
          <input type="text" name="torsoName" />
        </label>
        <label>
          Arms Name:
          <input type="text" name="armsName" />
        </label>
        <label>
          Legs Name:
          <input type="text" name="legsName" />
        </label>
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
        <li>{mech.headName}</li>
        <li>{mech.torsoName}</li>
        <li>{mech.armsName}</li>
        <li>{mech.legsName}</li>
      </ul>
      <button onClick={() => selectMech(mech)} >Modify Mech</button>
      <button onClick={() => deleteMech(mech.id)}>Remove Mech</button>
    </div>
  )
}

export default Mechs;
