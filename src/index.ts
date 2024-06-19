import dayjs from "dayjs";
import moment from "moment";
import { type DateRangeProps } from "./types";

/**
 * Function to create date range string. Example result are 11 - 12 Oct 2024, 11 Oct - 5 Nov 2024, and 12 Dec 2024 - 5 Jan 2025
 * @param {DateRangeProps} param - The object containing startDate and endDate
 * @returns string
 */
export const dateRange = ({ startDate, endDate }: DateRangeProps) => {
  const parseDate = (date: Date | moment.Moment | dayjs.Dayjs): dayjs.Dayjs => {
    if (dayjs.isDayjs(date)) {
      return date;
    } else if (moment.isMoment(date)) {
      return dayjs(date.toDate());
    } else if (date instanceof Date) {
      return dayjs(date);
    }

    throw new Error("Invalid date type");
  };
 
  const startDateObj = parseDate(startDate);
  const endDateObj = parseDate(endDate);

  if (endDateObj.isBefore(startDateObj)) {
    throw new Error('endDate cannot be before startDate');
  }

  const startMonth = startDateObj.format("MMMM");
  const endMonth = endDateObj.format("MMMM");
  
  const startYear = startDateObj.format("YYYY");
  const endYear = endDateObj.format("YYYY");

  if (startMonth !== endMonth && startYear !== endYear) {
    return `${startDateObj.format("D MMM YYYY")} - ${endDateObj.format("D MMM YYYY")}`;
  }
  if (startMonth !== endMonth) {
    return `${startDateObj.format("D MMM")} - ${endDateObj.format("D MMM")} ${startYear}`;
  }
  return `${startDateObj.format("D")} - ${endDateObj.format("D")} ${startMonth} ${startYear}`;
};
