import { Calendar as CalendarDefault } from "@/components/Calendar";
import {
  CalendarItemDay,
  CalendarItemDayContainer,
} from "@/components/CalendarItemDay";
import { CalendarItemEmpty } from "@/components/CalendarItemEmpty";
import { CalendarItemWeekName } from "@/components/CalendarItemWeekName";
import { CalendarList } from "@/components/CalendarList";
import { CalendarRowMonth } from "@/components/CalendarRowMonth";
import { CalendarRowWeek } from "@/components/CalendarRowWeek";
import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";

/**
 * This file houses the public API for the flash-calendar package.
 */

type CalendarItemDayNamespace = {
  Container: typeof CalendarItemDayContainer;
} & typeof CalendarItemDay;

const CalendarItemDayWithNamespace =
  CalendarItemDay as CalendarItemDayNamespace;

CalendarItemDayWithNamespace.Container = CalendarItemDayContainer;
export type {
  CalendarItemDayContainerProps,
  CalendarItemDayProps,
} from "@/components/CalendarItemDay";

type CalendarItemNamespace = {
  Day: typeof CalendarItemDayWithNamespace;
  WeekName: typeof CalendarItemWeekName;
  Empty: typeof CalendarItemEmpty;
};

const CalendarItemWithNamespace = {} as CalendarItemNamespace;
CalendarItemWithNamespace.Day = CalendarItemDayWithNamespace;

CalendarItemWithNamespace.WeekName = CalendarItemWeekName;
export type { CalendarItemWeekNameProps } from "@/components/CalendarItemWeekName";

CalendarItemWithNamespace.Empty = CalendarItemEmpty;
export type { CalendarItemEmptyProps } from "@/components/CalendarItemEmpty";

type CalendarRowNamespace = {
  Month: typeof CalendarRowMonth;
  Week: typeof CalendarRowWeek;
};

const CalendarRowWithNamespace = {} as CalendarRowNamespace;
CalendarRowWithNamespace.Month = CalendarRowMonth;
export type { CalendarRowMonthProps } from "@/components/CalendarRowMonth";

CalendarRowWithNamespace.Week = CalendarRowWeek;
export type { CalendarRowWeekProps } from "@/components/CalendarRowWeek";

type CalendarNamespace = {
  Item: typeof CalendarItemWithNamespace;
  Row: typeof CalendarRowWithNamespace;
  List: typeof CalendarList;
  HStack: typeof HStack;
  VStack: typeof VStack;
} & typeof CalendarDefault;
export {
  CalendaronCalendarDayPress,
  CalendarProps,
  CalendarTheme,
} from "@/components/Calendar";

const CalendarWithNamespace = CalendarDefault as CalendarNamespace;
CalendarWithNamespace.Item = CalendarItemWithNamespace;
CalendarWithNamespace.Row = CalendarRowWithNamespace;

CalendarWithNamespace.List = CalendarList;
export type {
  CalendarListProps,
  CalendarListRef,
  CalendarMonthEnhanced,
} from "@/components/CalendarList";

// Useful for customizing the layout of the calendar, re-exported for convenience
CalendarWithNamespace.HStack = HStack;
CalendarWithNamespace.VStack = VStack;
export type { HStackProps } from "@/components/HStack";
export type { VStackProps } from "@/components/VStack";

export const Calendar = CalendarWithNamespace;
