interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  isDone?: boolean;
}

const EventCard = ({ title, description, date, time, isDone = false }: EventCardProps) => {
  return (
    <div className="border border-green-800 hover:border-green-500 rounded-lg px-3 flex items-center justify-between">
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <p className="text-foreground text-lg font-normal">{title}</p>
            {isDone && (
              <span className="bg-primary/20 border border-green-600 rounded-2xl text-primary px-2 py-1 text-xs font-medium">
                Done
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="text-right text-muted-foreground text-sm ml-5">
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default EventCard;