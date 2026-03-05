import { StarIcon } from "@/components/icons";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <ul className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <li key={star}>
          <StarIcon
            key={star}
            className={`size-[22px] ${
              star <= rating ? "text-[#FFE30F]" : "text-inverse-subtle"
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default StarRating;
