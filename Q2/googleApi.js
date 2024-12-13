import { google } from 'googleapis';
import dotenv from "dotenv";
import Joi from 'joi';

dotenv.config(); 

const apiKey = process.env.API_KEY
const calendarId=process.env.CALENDAR_ID
const calendar = google.calendar({
  version: 'v3',
  auth: apiKey
});

export const checkFreeBusy=async(payload) =>{
  try {
    const schema = Joi.object({
      startTime: Joi.date().required(),
      endTime: Joi.date().required(),
    }).required();
  
    const { error, value } = schema.validate(payload);
    if (error) {
      throw new Error(error.message);
    }
  const {startTime,endTime}=value
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
      throw error
  }
}