import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Toolbar from './components/Toolbar/Toolbar'
import CVPage from './components/CVPage/CVPage'
import Editor from './components/Editor/Editor'
import { CVDataType } from './components/common'
import { v4 as uuid } from 'uuid';

const cvData = {
  personal: {
    firstName: "Andrew",
    lastName: "Cosack",
    contactNumber: "(+92) 340 00099",
    email: "andrew.cosack@gmail.com",
    summary: "I am experienced accountant working to make a difference in finance industry."
  },
  education: [
    {
      id: "1",
      school: "Coleman School of Accountancy",
      from: "2017-08-22",
      to: "2021-06-07",
      course: "BS Accounting & Finance"
    }
  ],
  experience: [
    {
      id: "2",
      company: "Deloitte Consultancy Ltd",
      jobTitle: "Management Trainee",
      from: "2021-07-05",
      to: "2022-01-11",
      description: [
        "Completed all assigned tasks on time",
        "Prepared credit reports accoring to conventional standards"
      ]
    }
  ]
}
function App() {
  const [personalData, setPersonalData] = useState(cvData.personal);
  const [educationData, setEducationData] = useState(cvData.education);
  const [experienceData, setExperienceData] = useState(cvData.experience);
  const [editMode, setEditMode] = useState(false);
  const [editor, setEditor] = useState({ show: false, dataType: -1, data: null })

  function onEditToggle() {
    setEditMode(!editMode);

    //hide editor
    if(editor.show){
      resetEditor();
    }
  }

  function onAdd(dataType){
    setEditor({show: true, dataType: dataType, data: {}})
  }

  function onUpdate(dataType, data){
    setEditor({show: true, dataType: dataType, data: data});
  }
  
  function onDelete(dataType, id){
    //Directly change call the state set method here.
    if(dataType === CVDataType.EDUCATION){
      let index = educationData.findIndex(d => d.id === id);
      if(index > -1){
        educationData.splice(index, 1);
        setEducationData([...educationData])
      }
    }
    else if(dataType === CVDataType.EXPERIENCE){
      let index = experienceData.findIndex(d => d.id === id);
      if(index > -1){
        experienceData.splice(index, 1);
        setExperienceData([...experienceData])
      }
    }
  }

  function resetEditor() {
    setEditor({show: false, dataType: -1, data: null})
  }

  function onSave(dataType, data){
    if(dataType === CVDataType.PERSONAL){
      setPersonalData({...data})
    }
    else if(dataType === CVDataType.EDUCATION){
      if(data['id']){
        let index = educationData.findIndex(d => d.id === data['id']);
        //educationData.splice(index, 1);
        //to not change the position of the item
        educationData[index] = data;
        setEducationData([...educationData]);
      }
      else{
        //New item added.
        data["id"] = uuid();
        setEducationData([...educationData, data]);
      }
    }
    else if(dataType === CVDataType.EXPERIENCE){
      if(data['id']){
        let index = experienceData.findIndex(d => d.id === data['id']);
        experienceData[index] = data;
        setExperienceData([...experienceData])
      }
      else{
        //new item added
        data['id'] = uuid();
        setExperienceData([...experienceData, data]);
      }
    }
    resetEditor();
  }

  return (
    <div className="main-container">
      <Navbar />
      <Toolbar handleEditToggle={onEditToggle}/>
      <div className="flex flex-col md:flex-row mt-2">
        {editor.show && <div className="basis-1/3 bg-white rounded">
          <Editor dataType={editor.dataType} data={editor.data} handleClose={resetEditor} handleSave={onSave}/>
        </div>}
        <div className="grow flex justify-center">
          <CVPage data={{personal: personalData, education: educationData, experience: experienceData}} editMode={editMode} handleAdd={onAdd} handleUpdate={onUpdate} handleDelete={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default App
