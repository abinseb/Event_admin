import React, { useState } from 'react'
import TableList from '../../components/Tables/TableView'
import './group.css';
import './button.scss'
import DialogWithTextField from '../../components/Dialog/DialogAdd';
const AddGroup = () => {
    
    const [opendialog , setOpenDialog] = useState(false);
    const [groupName, setGroupName] = useState('');

    const handleOpenDialog=()=>{
        setOpenDialog(true);
    }

    const handleCloseDialog=()=>{
        setOpenDialog(false);
    }

  const handleSaveChanges = (newGroupName) => {
    setGroupName(newGroupName);
    console.log(newGroupName);
  };

  return (
    <div className='group-container'>
        <div className='group-button-view-container'>
            <button class="button-43" role="button"onClick={handleOpenDialog}>Add Group</button>
        </div>
        <div className='center-table'>
            <TableList
                groupData={[]}
            />
        </div>
        <DialogWithTextField
            opendialog={opendialog}
            handleClose={handleCloseDialog}
            groupName={groupName}
            handleSaveChanges={handleSaveChanges}

        />
    </div>
  )
}

export default AddGroup
