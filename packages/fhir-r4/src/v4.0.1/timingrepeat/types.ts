import type {
  Extension,
  Duration,
  Range,
  Period,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export interface TimingRepeat {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  boundsDuration?: Duration;

  boundsRange?: Range;

  boundsPeriod?: Period;
  /** A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values. */
  count?: number;

  _count?: Element;
  /** If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times. */
  countMax?: number;

  _countMax?: Element;
  /** How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration. */
  duration?: number;

  _duration?: Element;
  /** If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length. */
  durationMax?: number;

  _durationMax?: Element;
  /** The units of time for the duration, in UCUM units. */
  durationUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a";

  _durationUnit?: Element;
  /** The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency. */
  frequency?: number;

  _frequency?: Element;
  /** If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range. */
  frequencyMax?: number;

  _frequencyMax?: Element;
  /** Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length. */
  period?: number;

  _period?: Element;
  /** If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days. */
  periodMax?: number;

  _periodMax?: Element;
  /** The units of time for the period in UCUM units. */
  periodUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a";

  _periodUnit?: Element;
  /** If one or more days of week is provided, then the action happens only on the specified day(s). */
  dayOfWeek?: string[];

  _dayOfWeek?: Element[];
  /** Specified time of day for action to take place. */
  timeOfDay?: string[];

  _timeOfDay?: Element[];
  /** An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur. */
  when?: any;

  _when?: Element[];
  /** The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event. */
  offset?: number;

  _offset?: Element;
}
