interface InfoCardProps {
  title: string;
  text?: string;
  className?: string;
}

const InfoCard = ({ title, text, className }: InfoCardProps) => {
  return (
    <div className={`rounded-2xl p-6 bg-inverse-subtle flex flex-col gap-3 ${className}`}>
      <p className="font-semibold leading-6 text-lg text-neutral">
        {title}
      </p>
      {text && (
        <p className="leading-6 text-lg text-muted">
          {text}
        </p>
      )}
    </div>
  );
};

export default InfoCard;
