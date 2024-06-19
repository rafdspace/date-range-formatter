import dayjs from "dayjs";
import moment from "moment";

export interface DateRangeProps {
  startDate: Date | moment.Moment | dayjs.Dayjs;
  endDate: Date | moment.Moment | dayjs.Dayjs;
}
