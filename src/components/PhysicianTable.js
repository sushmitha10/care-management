import React from 'react';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from 'react';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

export default function PhysicianTable(props) {
  const rawdata = [
    { name: 'Abdelmalik, Maged M.D.', active: 'Y', practice: 'St. Vincents Ambulatory Care, Inc.', spots: '65', deanumber: '12345'},
    { name: 'Abou Jaoude, Dory M.D.', active: 'N', practice: 'Via Christi Clinic Murdock', spots: '65', deanumber: '13455'},
    { name: 'Abraham, Sarada M.D.', active: 'Y', practice: 'Columbia St. Marys Hospital - Milwaukee', spots: '65', deanumber: '13455'},
    { name: 'Abraham, Sheryn M.D.', active: 'Y', practice: 'Childrens Medical Group', spots: '65', deanumber: '13455'},
    { name: 'Anderson, Jeffrey M.D.', active: 'N', practice: 'Alabama Providence Healthcare Services, Inc.', spots: '65', deanumber: '13455'},
    { name: 'Zerbe, Cathleen N.P.', active: 'Y', practice: 'American Health Network of Indiana, LLC', spots: '65', deanumber: '13455' },
    { name: 'Zimmermann, Stephen M.D.', active: 'Y', practice: 'RoMurfreesboro Medical Clinic, P.A.	bert', spots: '65', deanumber: '13455'},
    { name: 'Zielinski, David M.D.', active: 'N', practice: '	Ascension Our Lady of Victory Hospital', spots: '65', deanumber: '13455' },
    { name: 'russell', active: 'Y', practice: 'Good Health Associates, PLLC', spots: '65', deanumber: '13455' },
    { name: 'dereck', active: 'Y', practice: 'Wheaton Franciscan Medical Group', spots: '65', deanumber: '13455'},
    { name: 'Swathi', active: 'N' , practice: 'Wheaton Franciscan Medical Group', spots: '65', deanumber: '167455'},
    { name: 'ajay', active: 'Y' , practice: 'Wheaton Franciscan Medical Group', spots: '65', deanumber: '13455'},
  ];

   const columns= [
      { title: 'Physician Name', field: 'name' },
      { title: 'Active', field: 'active' },
      { title: 'Practice', field: 'practice'},
      { title: 'DEA Number', field: 'deanumber'},
      {
        title: 'Available Spots',
        field: 'spots'
      }
    ]
   const data= (()=>{
      let dataCopy = JSON.parse(JSON.stringify(rawdata))
    dataCopy = props.value.lastName? dataCopy.filter(d=>d.name.includes(props.value.lastName)): dataCopy
    dataCopy = props.value.deanumber? dataCopy.filter(d=>d.deanumber.includes(props.value.deanumber)): dataCopy
    dataCopy = props.value.practice? dataCopy.filter(d=>d.practice.includes(props.value.practice)): dataCopy
    dataCopy = props.value.activeonly? dataCopy.filter(d=>d.active==='Y'): dataCopy
    console.log(JSON.stringify(props));
      return dataCopy
    })();

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