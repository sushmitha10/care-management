import React from 'react';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from 'react';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

export default function PracticeAdminTable(props) {
  const rawdata = [
    { practicename: 'Abdelmalik, Maged M.D.', active: 'Y', practiceadmin: 'Brewer Brittany', taxid: '123-45-8888'},
    { practicename: 'Abou Jaoude, Dory M.D.', active: 'N', practiceadmin: 'Bryant Jewel', taxid: '134-55-7777'},
    { practicename: 'Abraham, Sarada M.D.', active: 'Y', practiceadmin: 'Burris Lesia', taxid: '134-55-6666'},
    { practicename: 'Abraham, Sheryn M.D.', active: 'Y', practiceadmin: 'Gamble Misty', taxid: '134-55-1111'},
    { practicename: 'Anderson, Jeffrey M.D.', active: 'N', practiceadmin: 'Gossage Abigail', taxid: '134-55-6666'},
    { practicename: 'Zerbe, Cathleen N.P.', active: 'Y', practiceadmin: 'Hancock Melissa', taxid: '134-55-5555' },
    { practicename: 'Zimmermann, Stephen M.D.', active: 'Y', practiceadmin: 'Howell Kim', taxid: '134-55-4444'},
    { practicename: 'Zielinski, David M.D.', active: 'N', practiceadmin: 'Jacobs Gwen', taxid: '134-55-3333' },
    { practicename: 'russell', active: 'Y', practiceadmin: 'Lavender Audrie', taxid: '134-55-2222' },
    { practicename: 'dereck', active: 'Y', practiceadmin: 'Jacobs Gwen', taxid: '134-55-4444'},
    { practicename: 'Swathi', active: 'N' , practiceadmin: 'Gossage Abigail', taxid: '167-45-5555'},
    { practicename: 'ajay', active: 'Y' , practiceadmin: 'Burris Lesia', taxid: '134-55-1111'},
  ];

   const columns= [
      { title: 'Practice Name', field: 'practicename' },
      { title: 'Tax Id', field: 'taxid'},
      { title: 'Practice Admin', field: 'practiceadmin'},
      { title: 'Active', field: 'active' },
    ]
   const data= (()=>{
      let dataCopy = JSON.parse(JSON.stringify(rawdata))
    dataCopy = props.value.practicename? dataCopy.filter(d=>d.practicename.includes(props.value.practicename)): dataCopy
    dataCopy = props.value.taxid? dataCopy.filter(d=>d.taxid.includes(props.value.taxid)): dataCopy
    dataCopy = props.value.practiceadmin? dataCopy.filter(d=>d.practiceadmin.includes(props.value.practiceadmin)): dataCopy
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
    <div>
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
    </div>
  );
}
