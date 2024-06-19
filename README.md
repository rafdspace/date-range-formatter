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

// Example usage
const startDate: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-11");
const endDate: Date | moment.Moment | dayjs.Dayjs = dayjs("2024-10-12");
const range: DateRangeProps = { startDate, endDate };

const formattedRange: string = dateRange(range);
console.log(formattedRange); // Output: 11 - 12 October 2024
```

## Date Support

The function supports Date, moment, and dayjs objects for startDate and endDate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
