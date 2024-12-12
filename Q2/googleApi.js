import { google } from 'googleapis';
import dotenv from "dotenv";
dotenv.config(); 

const apiKey = process.env.API_KEY
const calendarId=process.env.CALENDAR_ID
const calendar = google.calendar({
  version: 'v3',
  auth: apiKey
});

export const checkFreeBusy=async(payload) =>{
  const {startTime,endTime}=payload
  try {
    const requestBody = {
      timeMin: startTime,
      timeMax: endTime,
      items: [{ id:calendarId  }],
    };
    const res = await calendar.freebusy.query({
      requestBody,
    });
    return res.data.calendars[calendarId.toString()];
  } catch (error) {
    console.error('Error checking free/busy times:', error);
  }
}