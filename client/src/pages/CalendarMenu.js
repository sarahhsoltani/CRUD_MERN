import { Calendar, momentLocalizer ,Views} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
import { MOCK_EVENTS } from './event';
const localizer = momentLocalizer(moment);
const CalendarMenu = () => {
    
    const events = MOCK_EVENTS.map((event)=>{
        return{
            title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          color: event.color 
        }
    })
 
    return (
        <div>
       <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "1000px" }}
      eventPropGetter={(event) => {
        return {
          style: {
            backgroundColor: event.color,
          },
        };
      }}
      onSelectEvent={(event) => alert(event.title)}
      views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
    />
  
        </div>
    );
};

export default CalendarMenu;