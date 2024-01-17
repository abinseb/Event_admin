import React, { useEffect, useState } from 'react'
import TableList from '../../components/Tables/TableView'
import './group.css';
import './button.scss'
import DialogWithTextField from '../../components/Dialog/DialogAdd';
import { group_Add } from '../../API /Registration';
import { groupDataFetch } from '../../API /GetDataFromDB';
const AddGroup = () => {
    
    const [opendialog , setOpenDialog] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groupData,setGroupData] = useState([]);

    useEffect(()=>{
        groupDetailsFetch();
    },[])

    // fetch the group date from the db
    const groupDetailsFetch=async()=>{
        const groupfetch = await groupDataFetch();
        console.log("Fetchedclient group",groupfetch);
        if(groupfetch.data!==undefined){
        setGroupData(groupfetch.data.data);
        }
    }

    // open dialog
    const handleOpenDialog=()=>{
        setOpenDialog(true);
    }

    // close dialoge
    const handleCloseDialog=()=>{
        setOpenDialog(false);
    }
// onchange data of the group
  const handleSaveChanges = (newGroupName) => {
    setGroupName(newGroupName);
    console.log(newGroupName);
  };

//   add the group details to the db
  const handleaddGroup=async()=>{
    console.log("groupname",groupName);
    const groupadd = await group_Add(groupName);
    console.log("GroupAddresponse",groupadd.status);
  if(groupadd.status == 200){
        handleCloseDialog();
        groupDetailsFetch();
    }
    else if(groupadd.status === undefined){
        alert("Failed")
    }
  }

  return (
    <div className='group-container'>
        <div className='group-button-view-container'>
            <button class="button-43" role="button"onClick={handleOpenDialog}>Add Group</button>
        </div>
        <div className='center-table'>
            <TableList
                groupData={groupData === undefined ?[]:groupData}
            />
        </div>
        <DialogWithTextField
            opendialog={opendialog}
            handleClose={handleCloseDialog}
            groupName={groupName}
            handleSaveChanges={handleSaveChanges}
            handleOperation={handleaddGroup}

        />
    </div>
  )
}

export default AddGroup
