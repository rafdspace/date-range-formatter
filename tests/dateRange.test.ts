import dayjs from "dayjs";
import moment from "moment";
import { dateRange } from "../src/index";

describe("dateRange", () => {
  it("should format date range within the same month and year correctly", () => {
    const startDate = dayjs("2024-10-11");
    const endDate = dayjs("2024-10-12");
    const result = dateRange({ startDate, endDate });
    expect(result).toBe("11 - 12 October 2024");
  });

  it("should format date range across different months but the same year correctly", () => {
    const startDate = dayjs("2024-10-11");
    const endDate = dayjs("2024-11-05");
    const result = dateRange({ startDate, endDate });
    expect(result).toBe("11 Oct - 5 Nov 2024");
  });

  it("should format date range across different months and years correctly", () => {
    const startDate = dayjs("2024-12-12");
    const endDate = dayjs("2025-01-05");
    const result = dateRange({ startDate, endDate });
    expect(result).toBe("12 Dec 2024 - 5 Jan 2025");
  });

  it("should work with moment dates", () => {
    const startDate = moment("2024-10-11");
    const endDate = moment("2024-10-12");
    const result = dateRange({ startDate, endDate });
    expect(result).toBe("11 - 12 October 2024");
  });

  it("should work with Date objects", () => {
    const startDate = new Date("2024-10-11");
    const endDate = new Date("2024-10-12");
    const result = dateRange({ startDate, endDate });
    expect(result).toBe("11 - 12 October 2024");
  });
});
