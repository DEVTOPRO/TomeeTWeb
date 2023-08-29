import React from 'react'
import 'devextreme/dist/css/dx.light.css';
import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import {
  resources,
  generateAppointments,
} from './data.js';
import Query from 'devextreme/data/query';
const currentDate = new Date(2021, 1, 2);

const groups = ['humanId'];

const startDay = new Date(2021, 1, 1);
const endDay = new Date(2021, 1, 28);
const startDayHour =9;
const endDayHour = 24;

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

 export default function MainJob(props){
    const appointMentHandler=(e)=>{
    	var str = '';
          console.log(e.targetedAppointmentData);
    	for(var key in e.appointmentData)
      	str+= key + ': ' + e.appointmentData[key] + '; ';
    	alert(str);

    }

    console.log("appointments",appointments)
    const addHandler=(e)=>{
      console.log(e.appointmentData);
    }
    const dragData=(e)=>{
      console.log(e,"draga")
    }
return(
    <div>
<Scheduler
      dataSource={appointments}
      height={800}
      defaultCurrentView='timeWeek'
      defaultCurrentDate={currentDate}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      // showAllDayPanel={false}
      showCurrentTimeIndicator={false}
      onAppointmentClick={appointMentHandler}
      // onAppointmentFormOpening={onAppointmentFormOpening}
      onAppointmentAdded={addHandler}
      onAppointmentUpdating={(e) => console.log(e)}
      groups={groups}>
      <View
        type='timelineWorkWeek'
        name='Timeline'
        groupOrientation='vertical'
      />
      <View
        type='week'
        name="timeWeek"
        groupOrientation='vertical'
      />
      <View
        type='month'
        groupOrientation='horizontal'
      />
      <Resource
        fieldExpr='humanId'
        dataSource={resources}
        label='Employee'
      />
      <Scrolling
        mode='virtual'
      />
    </Scheduler>
    </div>
)
}

export const moviesData = [{
  id: 1,
  text: 'His Girl Friday',
  director: 'Howard Hawks',
  year: 1940,
  image: 'images/movies/HisGirlFriday.jpg',
  duration: 92,
  color: '#cb6bb2',
}, {
  id: 2,
  text: 'Royal Wedding',
  director: 'Stanley Donen',
  year: 1951,
  image: 'images/movies/RoyalWedding.jpg',
  duration: 93,
  color: '#56ca85',
}, {
  id: 3,
  text: 'A Star Is Born',
  director: 'William A. Wellman',
  year: 1937,
  image: 'images/movies/AStartIsBorn.jpg',
  duration: 111,
  color: '#1e90ff',
}, {
  id: 4,
  text: 'The Screaming Skull',
  director: 'Alex Nicol',
  year: 1958,
  image: 'images/movies/ScreamingSkull.jpg',
  duration: 68,
  color: '#ff9747',
}, {
  id: 5,
  text: 'It\'s a Wonderful Life',
  director: 'Frank Capra',
  year: 1946,
  image: 'images/movies/ItsAWonderfulLife.jpg',
  duration: 130,
  color: '#f05797',
}, {
  id: 6,
  text: 'City Lights',
  director: 'Charlie Chaplin',
  year: 1931,
  image: 'images/movies/CityLights.jpg',
  duration: 87,
  color: '#2a9010',
}];
function onAppointmentFormOpening(e) {
  const { form } = e;
  let movieInfo = getMovieById(e.appointmentData.movieId) || {};
  let { startDate } = e.appointmentData;

  form.option('items', [{
    label: {
      text: 'Movie',
    },
    editorType: 'dxSelectBox',
    dataField: 'movieId',
    editorOptions: {
      items: moviesData,
      displayExpr: 'text',
      valueExpr: 'id',
      onValueChanged(args) {
        movieInfo = getMovieById(args.value);

        form.updateData('director', movieInfo.director);
        form.updateData('endDate', new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration));
      },
    },
  }, {
    label: {
      text: 'Director',
    },
    name: 'director',
    editorType: 'dxTextBox',
    editorOptions: {
      value: movieInfo.director,
      readOnly: true,
    },
  }, {
    dataField: 'startDate',
    editorType: 'dxDateBox',
    editorOptions: {
      width: '100%',
      type: 'datetime',
      onValueChanged(args) {
        startDate = args.value;
        form.updateData('endDate', new Date(startDate.getTime() + 60 * 1000 * movieInfo.duration));
      },
    },
  }, {
    name: 'endDate',
    dataField: 'endDate',
    editorType: 'dxDateBox',
    editorOptions: {
      width: '100%',
      type: 'datetime',
      readOnly: true,
    },
  }, {
    dataField: 'price',
    editorType: 'dxRadioGroup',
    editorOptions: {
      dataSource: [5, 10, 15, 20],
      itemTemplate(itemData) {
        return `$${itemData}`;
      },
    },
  },
  ]);
}

function getMovieById(id) {
  return Query(moviesData).filter(['id', id]).toArray()[0];
}


