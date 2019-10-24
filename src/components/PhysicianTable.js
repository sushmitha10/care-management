import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from 'react';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { async } from 'q';

export default function PhysicianTable(props) {

  const [data, setData] = useState();

  const parseData = function(data) {
    return { 
      name: data.Name, 
      active: data.IsActive__c?'Y':'N', 
      practice: data.Name, 
      spots: data.Account_Count__c, 
      npinumber: data.PR_Practice_NPI_Number__c
    }
  }
  
  const AuthStr = 'Bearer 00D1D0000009kZ7!AQQAQHbChJ7jEKl8OM._tf842VHzc9vZGB3yS5I7osuAXfTWyPa5o7kreOTGFd5uM_ToOY56p4153S3k9fxvHuckXwyAlu1i';
  (async () => {
 let res = await  axios.get('https://ascensionsf--mrktplace.my.salesforce.com/services/data/v46.0/sobjects/Account/001U000000g8P42IAE', { 'headers': { 'Authorization': AuthStr } })
          let dataCopy = JSON.parse(JSON.stringify([parseData(res.data)]))
    dataCopy = props.value.lastName? dataCopy.filter(d=>d.name.includes(props.value.lastName)): dataCopy
    dataCopy = props.value.npinumber? dataCopy.filter(d=>d.npinumber.includes(props.value.npinumber)): dataCopy
    dataCopy = props.value.practice? dataCopy.filter(d=>d.practice.includes(props.value.practice)): dataCopy
    dataCopy = props.value.activeonly? dataCopy.filter(d=>d.active==='Y'): dataCopy
       if((dataCopy || []).length !== (data||[]).length )
    setData(dataCopy)
  })()


   const columns= [
      { title: 'Physician Name', field: 'name' },
      { title: 'NPI Number', field: 'npinumber'},
      { title: 'Practice', field: 'practice'},
      { title: 'Active', field: 'active' },
      {
        title: 'Available Spots',
        field: 'spots'
      }
    ]

    const tableIcons = {
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    };

  return (
    <MaterialTable
      title="Physician Search"
      columns={columns}
      data={data}
      options={{
        search: false,
        // filtering: true
      }}
      icons={tableIcons}
    />
  );
}