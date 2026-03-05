import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import "react-day-picker/style.css";
import { ChevronDownIcon } from '../icons';
import Heading from './Heading';
import classNames from 'classnames';

interface Props {
  selectedDate: Date | undefined
  onDateSelect: (date: Date) => void
}

const CURRENT_DATE = new Date()

const Calendar: React.FC<Props> = ({ selectedDate, onDateSelect }) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      required
      showOutsideDays
      mode="single"
      selected={selectedDate}
      onSelect={onDateSelect}
      navLayout="around"
      disabled={{ before: CURRENT_DATE }}
      classNames={{
        root: `${defaultClassNames.root} z-10 w-[304px] min-h-[400px] pt-md rounded-[6px] border border-eleveted shadow-xs bg-white`,
        weekday: `text-[16px] font-[400] leading-[125%] text-muted`,
        day: `size-10 text-center transition-all`,
        selected: 'size-10 rounded-[6px] text-white !bg-brand-primary transition-all',
        today: 'bg-eleveted rounded-[6px]',
      }}
      components={{
        CaptionLabel: (({ children }) => (
          <Heading as="h2" aria-label="Calendar month" className="absolute top-2 text-base font-medium text-neutral">
            {children?.toString().split(' ')[0]}
          </Heading>
        )),
        PreviousMonthButton: ({ onClick }) => (
          <button onClick={onClick} aria-label="Previous month button" type="button" className="z-10 absolute left-3 w-fit p-2.5 rounded-[6px] cursor-pointer border border-eleveted">
            <ChevronDownIcon className="size-4 rotate-90 text-neutral" />
          </button>
        ),
        NextMonthButton: ({ onClick }) => (
          <button onClick={onClick} type="button" aria-label="Next month button" className="z-10 absolute right-3 top-0 w-fit p-2.5 rounded-[6px] cursor-pointer border border-eleveted">
            <ChevronDownIcon className="size-4 rotate-270 text-neutral" />
          </button>
        ),
        MonthGrid: (props) => (
          <div className="h-full justify-center px-3">
            <table className="table border-separate border-spacing-y-[19px]">
              {props.children}
            </table>
          </div>
        ),
        DayButton: ({ day, children, disabled, onClick }) => {
          const isDaySelected = day.date.getTime() === selectedDate?.getTime()

          return (
            <button
              onClick={onClick}
              disabled={disabled}
              aria-label="Day button"
              className={
                classNames(
                  'size-10 text-[16px] leading-[125%] cursor-pointer disabled:cursor-not-allowed transition-all text-neutral',
                  {
                    'text-neutral-disabled': day.outside,
                    'text-white': isDaySelected
                  })}
            >
              {children}
            </button>
          )
        }
      }}
    />
  )
}

export default Calendar