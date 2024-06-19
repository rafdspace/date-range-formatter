# Date Range Formatter

A utility function to create formatted date range strings.

## Installation

You can install the package via npm:

```bash
npm install date-range-formatter
# or
yarn add date-range-formatter
```

## Usage

```typescript
import { dateRange, DateRangeProps } from "date-range-formatter";
import dayjs from "dayjs";
import moment from "moment";

// Example usage 1
const startDate1: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-11");
const endDate1: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-12");
const range1: DateRangeProps = { startDate: startDate1, endDate: endDate1 };
const formattedRange1: string = dateRange(range);
console.log(formattedRange1); // Output: 11 - 12 October 2024

// Example usage 2
const startDate2: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-09-11");
const endDate2: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-12");
const range2: DateRangeProps = { startDate: startDate2, endDate: endDate2 };
const formattedRange2: string = dateRange(range);
console.log(formattedRange2); // Output: 11 Sep - 12 Oct 2024

// Example usage 3
const startDate3: Date | moment.Moment | dayjs.Dayjs = dayjs("2023-10-11");
const endDate3: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-12");
const range3: DateRangeProps = { startDate: startDate1, endDate: endDate1 };
const formattedRange3: string = dateRange(range);
console.log(formattedRange3); // Output: 11 Oct 2023 - 11 Oct 2024
```

## Date Support

The function supports Date, moment, and dayjs objects for startDate and endDate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
